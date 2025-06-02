/*
  Warnings:

  - You are about to drop the `diagnosticdtcsolution` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `diagnosticdtcsolution` DROP FOREIGN KEY `DiagnosticDtcSolution_diagnosticId_dtcCode_fkey`;

-- AlterTable
ALTER TABLE `diagnosticdtc` ADD COLUMN `solutionText` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `diagnosticdtcsolution`;
