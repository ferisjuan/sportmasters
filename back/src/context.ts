// @vendors
import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

// @generated

export const prisma = new PrismaClient()

export interface Context {
    prisma: PrismaClient
    req: Request
    res: Response
}
