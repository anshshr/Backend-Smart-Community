/*
  Warnings:

  - A unique constraint covering the columns `[FCMToken]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "FCMToken" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "User_FCMToken_key" ON "User"("FCMToken");
