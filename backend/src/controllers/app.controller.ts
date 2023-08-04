import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import prisma from '../utils/prisma';

class AppController
{
    async home(req: Request, res: Response, next: NextFunction)
    {
        // check if user has filled the form
        const has_filled = await prisma.user.findUnique({
            where: { id: res.locals.payload.id },
            select: {
                userInformationEntrepreneur: true,
                userInformationInvestor: true,
            }
        });
        if (!has_filled?.userInformationEntrepreneur && !has_filled?.userInformationInvestor)
        {
            return next({
                status: StatusCodes.FAILED_DEPENDENCY,
                message: 'Usuário não preencheu o formulário',
            });
        }

        const user_id = res.locals.payload.id;
        const user = await prisma.user.findUnique({
            where: { id: user_id },
            select: {
                id: true,
                userTypeId: true,
            }
        });

        let return_data: any[] = [];
        switch (user?.userTypeId)
        {
            case 1:
                const investor_data = await prisma.userInformationInvestor.findUnique({
                    where: { userId: user_id },
                    select: {
                        id: true,
                        areas: true,
                        linkedin: true,
                        vc_fund: true,
                        vc_rounds: true,
                        wpp: true,
                    }
                });

                // find all matching startups
                const startups = await prisma.userInformationEntrepreneur.findMany({
                    where: {
                        areaId: {
                            in: investor_data?.areas.map(area => area.id)
                        },
                        vc_roundId: {
                            in: investor_data?.vc_rounds.map(round => round.id)
                        },
                    },
                    select: {
                        user: true,
                        vc_round: true,
                        area: true,
                        has_been_incubated: true,
                        has_clients: true,
                        has_received_vc: true,
                        linkedin: true,
                        wpp: true,
                        target_equity: true,
                        target_value: true,
                    },
                });

                return_data = startups;
                break;
            case 2:
                const entrepreneur_data = await prisma.userInformationEntrepreneur.findUnique({
                    where: { userId: user_id },
                    select: {
                        id: true,
                        areaId: true,
                        vc_roundId: true,
                    },
                });

                // find all matching investors
                const investors = await prisma.userInformationInvestor.findMany({
                    where: {
                        areas: {
                            some: {
                                id: entrepreneur_data?.areaId,
                            },
                        },
                        vc_rounds: {
                            some: {
                                id: entrepreneur_data?.vc_roundId,
                            },
                        },
                    },
                    select: {
                        user: true,
                        vc_rounds: true,
                        areas: true,
                        linkedin: true,
                        vc_fund: true,
                        wpp: true,
                    },
                });

                return_data = investors;
                break;
            default:
                return next({
                    status: StatusCodes.BAD_REQUEST,
                    message: 'Tipo de usuário inválido',
                });
        }

        res.status(StatusCodes.OK).json(return_data);
    }
}

export default new AppController();