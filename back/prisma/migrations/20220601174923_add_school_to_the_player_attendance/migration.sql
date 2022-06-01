-- AlterTable
ALTER TABLE "PlayerAttendance" ADD COLUMN     "schoolId" TEXT;

-- AddForeignKey
ALTER TABLE "PlayerAttendance" ADD CONSTRAINT "PlayerAttendance_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE SET NULL ON UPDATE CASCADE;
