-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "coachId" TEXT;

-- CreateTable
CREATE TABLE "PlayerAttendance" (
    "id" TEXT NOT NULL,
    "attendanceDate" TIMESTAMP(3) NOT NULL,
    "playerId" TEXT NOT NULL,
    "sport" "SPORTS" NOT NULL,

    CONSTRAINT "PlayerAttendance_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PlayerAttendance" ADD CONSTRAINT "PlayerAttendance_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
