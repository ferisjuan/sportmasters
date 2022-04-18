-- CreateEnum
CREATE TYPE "ROLES" AS ENUM ('NONE', 'ADMIN', 'COACH', 'GUARDIAN', 'PLAYER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "roles" "ROLES"[];
