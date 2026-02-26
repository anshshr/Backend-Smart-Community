/*
  Warnings:

  - You are about to drop the column `FCMToken` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_FCMToken_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "FCMToken";

-- CreateTable
CREATE TABLE "FCMTokens" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "FCMTokens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FCMTokens" ADD CONSTRAINT "FCMTokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
