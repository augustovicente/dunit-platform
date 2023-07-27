import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import prisma from '../utils/prisma';

class NFTController
{
    async home(req: Request, res: Response, next: NextFunction)
    {
        
    }
}

export default new NFTController();