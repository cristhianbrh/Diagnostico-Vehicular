/*
  Warnings:

  - You are about to drop the column `AditionalSymptom` on the `diagnosticsymptom` table. All the data in the column will be lost.
  - You are about to drop the column `noteTecnic` on the `diagnosticsymptom` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `diagnostic` ADD COLUMN `aditionalSymptom` VARCHAR(191) NULL,
    ADD COLUMN `noteTecnicSym` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `diagnosticsymptom` DROP COLUMN `AditionalSymptom`,
    DROP COLUMN `noteTecnic`;
