// @vendors
import { Request, Response } from 'express';

// @generated
import { PrismaClient } from './generated/prisma-client-ts.ts';

export const prisma = new PrismaClient()

export interface Context {
    prisma: PrismaClient,
    req: Request,
    res: Response
}
