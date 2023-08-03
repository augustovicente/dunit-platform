import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';
import prisma from '../utils/prisma';
import jwt from '../utils/jwt';

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

        // TODO: send email with token to user
        // sendgrid.send({
        //     to: user.email,
        //     from: process.env.SENDGRID_FROM_EMAIL,
        //     subject: 'Recuperação de senha',
        //     html: `<p>Olá ${user.name},</p>
        //     <p>Para recuperar sua senha, clique no link abaixo:</p>
        //     <a href="${process.env.FRONTEND_URL}/reset-password?token=${token}">Recuperar senha</a>`,
        // });

        res.status(StatusCodes.OK).json({ message: 'Email enviado com sucesso' });
    }

    async fill_information(req: Request, res: Response, next: NextFunction)
    {
        const { userTypeId, ...data } = req.body;

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
                    },
                });
                await prisma.user.update({
                    where: { id: res.locals.payload.id },
                    data: { userTypeId },
                });
                break;
            case 2:
                // fill the UserInformationEntrepreneur
                await prisma.userInformationEntrepreneur.create({
                    data: {
                        ...data,
                        userId: res.locals.payload.id,
                    },
                });
                await prisma.user.update({
                    where: { id: res.locals.payload.id },
                    data: { userTypeId },
                });
                break;
        }

        res.status(StatusCodes.OK).json({ message: 'Informações preenchidas com sucesso' });
    }
}

export default new LoginController();