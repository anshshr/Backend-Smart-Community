/*
  Warnings:

  - You are about to drop the column `clerkId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User_clerkId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "clerkId",
DROP COLUMN "firstName",
DROP COLUMN "imageUrl",
DROP COLUMN "lastName",
ADD COLUMN     "profileImage" TEXT DEFAULT '',
ADD COLUMN     "username" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
