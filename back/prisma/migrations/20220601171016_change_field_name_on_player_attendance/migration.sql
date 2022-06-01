/*
  Warnings:

  - You are about to drop the column `attendanceDate` on the `PlayerAttendance` table. All the data in the column will be lost.
  - Added the required column `missAttendanceDate` to the `PlayerAttendance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PlayerAttendance" DROP COLUMN "attendanceDate",
ADD COLUMN     "missAttendanceDate" TIMESTAMP(3) NOT NULL;
