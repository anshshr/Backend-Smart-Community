/*
  Warnings:

  - You are about to drop the column `profileImage` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[clerkId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "profileImage",
DROP COLUMN "username",
ADD COLUMN     "clerkId" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "imageUrl" TEXT DEFAULT '',
ADD COLUMN     "lastName" TEXT,
ALTER COLUMN "token" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkId_key" ON "User"("clerkId");
