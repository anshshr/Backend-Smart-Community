/*
  Warnings:

  - Made the column `status` on table `PurchaseRequest` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `PurchaseRequest` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "PurchaseRequest" ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "createdAt" SET NOT NULL;
