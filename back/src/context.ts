import { PrismaClient } from '@prisma/client';
import { Request } from 'express';

export const prisma = new PrismaClient()

export interface Context {
    req: Request,
}
