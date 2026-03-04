/*
  Warnings:

  - You are about to drop the `FCMTokens` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NotificationUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FCMTokens" DROP CONSTRAINT "FCMTokens_userId_fkey";

-- DropForeignKey
ALTER TABLE "NotificationUser" DROP CONSTRAINT "NotificationUser_notificationId_fkey";

-- DropForeignKey
ALTER TABLE "NotificationUser" DROP CONSTRAINT "NotificationUser_userId_fkey";

-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "allowNotifications" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "token" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "FCMTokens";

-- DropTable
DROP TABLE "NotificationUser";

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
