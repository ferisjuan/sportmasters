-- CreateEnum
CREATE TYPE "NDI_TYPE" AS ENUM ('PASSPORT', 'FOREIGN_CARD', 'NATIONAL_ID');

-- CreateEnum
CREATE TYPE "FAMILY_SUPPORT" AS ENUM ('NONE', 'BOTH_GRANDFATHERS', 'BOTH_PARENTS', 'FATHER', 'GRANDFATHER', 'GRANDMOTHER', 'MOTHER');

-- CreateEnum
CREATE TYPE "FIELD_POSITION" AS ENUM ('NONE', 'ATTACKING_MIDFIELDER', 'CENTER_BACK', 'CENTER_FORWARD', 'CENTER_MIDDLEFIELDER', 'DEFENSIVE_MIDFIELDER', 'GOAL_KEEPER', 'LEFT_FULLBACK', 'LEFT_MIDDLEFIELDER', 'RIGHT_FULLBACK', 'RIGHT_MIDDLEFIELDER', 'SWEEPER');

-- CreateEnum
CREATE TYPE "GUARDIAN_TYPE" AS ENUM ('NONE', 'FATHER', 'GRANDFATHER', 'GRANDMOTHER', 'MOTHER');

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
CREATE TYPE "TIER" AS ENUM ('BASIC', 'INTERMEDIATE', 'ADVANCED', 'EXPERT');

-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "category" "PLAYER_CATEGORY",
    "familySupport" "FAMILY_SUPPORT",
    "fieldPosition" "FIELD_POSITION",
    "guardianEmail" TEXT NOT NULL,
    "guardianId" TEXT NOT NULL,
    "guardianIdType" "NDI_TYPE" NOT NULL,
    "guardianLastName" TEXT NOT NULL,
    "guardianName" TEXT NOT NULL,
    "guardianPhone" TEXT NOT NULL,
    "guardianType" "GUARDIAN_TYPE" NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "hobbies" TEXT[],
    "image" TEXT,
    "IMC" DOUBLE PRECISION NOT NULL,
    "lastName" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "personalQualities" "PERSONAL_QUALITIES"[],
    "physicalCapabilities" "PHYSICAL_CAPABILITIES"[],
    "physicalQualities" "PHYSICAL_QUALITIES"[],
    "placeOfBirth" TEXT,
    "playerEmail" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "playerIdType" "NDI_TYPE" NOT NULL,
    "playerNumber" TEXT,
    "playerPhone" TEXT NOT NULL,
    "schoolId" TEXT NOT NULL,
    "sportHistory" TEXT,
    "weight" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
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
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "School_pkey" PRIMARY KEY ("id")
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
    "schoolId" TEXT NOT NULL,
    "confirmed" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Player_playerEmail_key" ON "Player"("playerEmail");

-- CreateIndex
CREATE UNIQUE INDEX "School_email_key" ON "School"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
