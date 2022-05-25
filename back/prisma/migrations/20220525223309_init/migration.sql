-- CreateEnum
CREATE TYPE "FAMILY_SUPPORT" AS ENUM ('NONE', 'AUNT', 'FATHER', 'GRANDFATHER', 'GRANDMOTHER', 'MOTHER', 'UNCLE');

-- CreateEnum
CREATE TYPE "FIELD_POSITION" AS ENUM ('NONE', 'ATTACKING_MIDFIELDER', 'CENTER_BACK', 'CENTER_FORWARD', 'CENTER_MIDDLEFIELDER', 'DEFENSIVE_MIDFIELDER', 'GOAL_KEEPER', 'LEFT_FULLBACK', 'LEFT_MIDDLEFIELDER', 'RIGHT_FULLBACK', 'RIGHT_MIDDLEFIELDER', 'SWEEPER');

-- CreateEnum
CREATE TYPE "GUARDIAN_TYPE" AS ENUM ('NONE', 'FATHER', 'GRANDFATHER', 'GRANDMOTHER', 'MOTHER');

-- CreateEnum
CREATE TYPE "HANDEDNESS" AS ENUM ('AMBIDEXTROUS', 'LEFT', 'RIGHT');

-- CreateEnum
CREATE TYPE "NDI_TYPE" AS ENUM ('PASSPORT', 'FOREIGN_CARD', 'NATIONAL_ID', 'CIVIL_REGISTRATION', 'IDENTITY_CARD');

-- CreateEnum
CREATE TYPE "PERSONAL_QUALITIES" AS ENUM ('NONE', 'FELLOWSHIP', 'PUNTUALITY', 'RESPONSABILITY', 'SOLIDARITY');

-- CreateEnum
CREATE TYPE "PHYSICAL_CAPABILITIES" AS ENUM ('NONE', 'BALANCE', 'COORDINATION', 'FLEXIBILITY', 'RESISTANCE', 'SPEED', 'STRENGTH');

-- CreateEnum
CREATE TYPE "PHYSICAL_QUALITIES" AS ENUM ('NONE', 'AGILITY', 'DIRBLING', 'JUMPING');

-- CreateEnum
CREATE TYPE "PLAYER_CATEGORY" AS ENUM ('NONE', 'FIRST', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH', 'SIXTH', 'SEVENTH', 'EIGHTH');

-- CreateEnum
CREATE TYPE "ROLES" AS ENUM ('NONE', 'ADMIN', 'COACH', 'GUARDIAN', 'PLAYER');

-- CreateEnum
CREATE TYPE "SPORTS" AS ENUM ('BASEBALL', 'BASKETBALL', 'BOXING', 'KARATE', 'PINGPONG', 'RUNNING', 'SKATING', 'SOCCER', 'SWIMMING', 'TAEKWONDO', 'TENNIS', 'VOLLEYBALL');

-- CreateEnum
CREATE TYPE "TIER" AS ENUM ('BASIC', 'INTERMEDIATE', 'ADVANCED', 'EXPERT');

-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "image" TEXT,
    "lastName" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "playerDataId" TEXT NOT NULL,
    "playerEmail" TEXT NOT NULL,
    "playerGuardianId" TEXT,
    "playerInjuriesId" TEXT,
    "playerMedicalId" TEXT,
    "playerPsychologyId" TEXT,
    "playerSportDataId" TEXT,
    "playerSurgeryId" TEXT,
    "schoolId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerData" (
    "id" TEXT NOT NULL,
    "birthday" TIMESTAMP(3),
    "placeOfBirth" TEXT,
    "playerIdNumber" TEXT NOT NULL,
    "playerIdExpeditionPlace" TEXT,
    "playerIdType" "NDI_TYPE" NOT NULL,
    "playerPhone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlayerData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerPsychology" (
    "id" TEXT NOT NULL,
    "hobbies" TEXT[],
    "physicalCapabilities" "PHYSICAL_CAPABILITIES"[],
    "physicalQualities" "PHYSICAL_QUALITIES"[],
    "personalQualities" "PERSONAL_QUALITIES"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlayerPsychology_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerGuardian" (
    "id" TEXT NOT NULL,
    "familySupport" "FAMILY_SUPPORT",
    "guardianEmail" TEXT NOT NULL,
    "guardianId" TEXT NOT NULL,
    "guardianIdType" "NDI_TYPE" NOT NULL,
    "guardianIdExpeditionPlace" TEXT NOT NULL,
    "guardianLastName" TEXT NOT NULL,
    "guardianName" TEXT NOT NULL,
    "guardianPhone" TEXT NOT NULL,
    "guardianType" "GUARDIAN_TYPE" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlayerGuardian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerInjuries" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "observations" TEXT NOT NULL,
    "occurrenceDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlayerInjuries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerSportData" (
    "id" TEXT NOT NULL,
    "admissionDate" TIMESTAMP(3) NOT NULL,
    "category" "PLAYER_CATEGORY",
    "fieldPosition" "FIELD_POSITION",
    "handedness" "HANDEDNESS" NOT NULL,
    "previousSchool" TEXT,
    "observations" TEXT,
    "shirtNumber" TEXT,
    "sport" "SPORTS"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlayerSportData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerMedical" (
    "id" TEXT NOT NULL,
    "alergies" TEXT[],
    "bloodType" TEXT NOT NULL,
    "diseases" TEXT[],
    "healthProvider" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "IMC" TEXT NOT NULL,
    "observations" TEXT,
    "weight" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlayerMedical_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerSurgeries" (
    "id" TEXT NOT NULL,
    "observations" TEXT,
    "name" TEXT NOT NULL,
    "performedDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlayerSurgeries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "School" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "tier" "TIER" NOT NULL DEFAULT E'BASIC',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "acceptsPrivacyPolicy" BOOLEAN NOT NULL DEFAULT false,
    "acceptsTermsOfService" BOOLEAN NOT NULL DEFAULT false,
    "address" TEXT DEFAULT E'',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "roles" "ROLES"[],
    "password" TEXT NOT NULL,
    "phone" TEXT DEFAULT E'',
    "schoolEmail" TEXT NOT NULL DEFAULT E'',
    "confirmed" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Player_playerEmail_key" ON "Player"("playerEmail");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerData_playerIdNumber_key" ON "PlayerData"("playerIdNumber");

-- CreateIndex
CREATE UNIQUE INDEX "School_id_key" ON "School"("id");

-- CreateIndex
CREATE UNIQUE INDEX "School_email_key" ON "School"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_playerDataId_fkey" FOREIGN KEY ("playerDataId") REFERENCES "PlayerData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_playerPsychologyId_fkey" FOREIGN KEY ("playerPsychologyId") REFERENCES "PlayerPsychology"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_playerGuardianId_fkey" FOREIGN KEY ("playerGuardianId") REFERENCES "PlayerGuardian"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_playerInjuriesId_fkey" FOREIGN KEY ("playerInjuriesId") REFERENCES "PlayerInjuries"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_playerSportDataId_fkey" FOREIGN KEY ("playerSportDataId") REFERENCES "PlayerSportData"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_playerMedicalId_fkey" FOREIGN KEY ("playerMedicalId") REFERENCES "PlayerMedical"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_playerSurgeryId_fkey" FOREIGN KEY ("playerSurgeryId") REFERENCES "PlayerSurgeries"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_schoolEmail_fkey" FOREIGN KEY ("schoolEmail") REFERENCES "School"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
