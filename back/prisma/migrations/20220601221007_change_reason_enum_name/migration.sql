/*
  Warnings:

  - The `reason` column on the `PlayerAttendance` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "MISSED_REASON" AS ENUM ('MEDICAL', 'INJURY', 'LEAVE', 'LATE', 'SANCTION', 'NOT_PLAYING');

-- AlterTable
ALTER TABLE "PlayerAttendance" DROP COLUMN "reason",
ADD COLUMN     "reason" "MISSED_REASON" NOT NULL DEFAULT E'NOT_PLAYING';

-- DropEnum
DROP TYPE "REASON";
