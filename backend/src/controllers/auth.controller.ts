import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';
import prisma from '../utils/prisma';
import jwt from '../utils/jwt';
import { transformPropToNumber } from '../utils/formatter';
import sgMail from '@sendgrid/mail';

class LoginController
{
    async login(req: Request, res: Response, next: NextFunction)
    {
        const { email, password } = req.body;

        if (!email || !password) {
            return next({
                status: StatusCodes.BAD_REQUEST,
                message: 'Há campos obrigatórios faltando',
            });
        }

        const user = await prisma.user.findUnique({ where: { email } });

        if (!user)
        {
            return next({
                status: StatusCodes.UNAUTHORIZED,
                message: 'Email ou senha inválidos',
            });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword)
        {
            return next({
                status: StatusCodes.UNAUTHORIZED,
                message: 'Email ou senha inválidos',
            });
        }

        const token = jwt.sign({ id: user.id, email: user.email });

        res.status(StatusCodes.OK).json({ user, token });
    }

    async signup(req: Request, res: Response, next: NextFunction)
    {
        const { username: email, password, phone } = req.body;

        if (!email || !password || !phone) {
            return next({
                status: StatusCodes.BAD_REQUEST,
                message: 'Há campos obrigatórios faltando',
            });
        }

        const has_user = await prisma.user.findUnique({ where: { email } });

        if (has_user)
        {
            return next({
                status: StatusCodes.CONFLICT,
                message: 'Email já cadastrado',
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const new_user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                phone,
                name: '',
                userTypeId: 1,
            },
        });

        // create token and send to user
        const token = jwt.sign({ id: new_user.id, email: new_user.email });

        res.status(StatusCodes.OK).json({ user: new_user, token });
    }

    async reset_password(req: Request, res: Response, next: NextFunction)
    {
        const { password, token } = req.body;

        if (!password || !token) {
            return next({
                status: StatusCodes.BAD_REQUEST,
                message: 'Há campos obrigatórios faltando',
            });
        }

        const payload:any = jwt.verify(token);

        if (!payload)
        {
            return next({
                status: StatusCodes.UNAUTHORIZED,
                message: 'Token inválido',
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await prisma.user.update({
            where: { id: payload.id },
            data: { password: hashedPassword },
        });

        res.status(StatusCodes.OK).json({ message: 'Senha alterada com sucesso' });
    }

    async forgot_password(req: Request, res: Response, next: NextFunction)
    {
        // send email with token to user ysing sendgrid
        const { email } = req.body;

        if (!email) {
            return next({
                status: StatusCodes.BAD_REQUEST,
                message: 'Há campos obrigatórios faltando',
            });
        }

        const user = await prisma.user.findUnique({ where: { email } });

        if (!user)
        {
            return next({
                status: StatusCodes.NOT_FOUND,
                message: 'Email não encontrado',
            });
        }

        const token = jwt.sign({ id: user.id, email: user.email });

        sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');
        await sgMail.send({
            from: 'noreply@dunitstudio.com',
            to: user.email,
            subject: 'Recuperação de senha',
            templateId: 'd-244ca9e92aba48afbe4f3f1ae1c17fea',
            dynamicTemplateData: {
                verification_url: `${process.env.FRONTEND_URL}/reset-pwd?t=${token}`,
            },
        });

        res.status(StatusCodes.OK).json({ message: 'Email enviado com sucesso' });
    }

    async fill_information(req: Request, res: Response, next: NextFunction)
    {
        const {
            userTypeId,
            user_name: name,
            areas,
            vc_rounds,
            ...data
        } = req.body;

        if (!userTypeId) {
            return next({
                status: StatusCodes.BAD_REQUEST,
                message: 'Há campos obrigatórios faltando',
            });
        }

        switch (userTypeId)
        {
            case 1:
                // fill the UserInformationInvestor data
                await prisma.userInformationInvestor.create({
                    data: {
                        ...data,
                        userId: res.locals.payload.id,
                        areas: {
                            connect: areas.map((area: any) => ({ id: +area })),
                        },
                        vc_rounds: {
                            connect: vc_rounds.map((vc_round: any) => ({ id: +vc_round })),
                        },
                    },
                });
                await prisma.user.update({
                    where: { id: res.locals.payload.id },
                    data: { userTypeId, name },
                });
                break;
            case 2:
                // fill the UserInformationEntrepreneur
                await prisma.userInformationEntrepreneur.create({
                    data: {
                        ...transformPropToNumber(data, 'areaId', 'vc_roundId'),
                        userId: res.locals.payload.id,
                    },
                });
                await prisma.user.update({
                    where: { id: res.locals.payload.id },
                    data: { userTypeId, name },
                });
                break;
        }

        res.status(StatusCodes.OK).json({ message: 'Informações preenchidas com sucesso' });
    }
}

export default new LoginController();