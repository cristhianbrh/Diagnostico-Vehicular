/*
  Warnings:

  - You are about to drop the column `solutionText` on the `diagnosticdtc` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `diagnostic` ADD COLUMN `solutionText` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `diagnosticdtc` DROP COLUMN `solutionText`;
