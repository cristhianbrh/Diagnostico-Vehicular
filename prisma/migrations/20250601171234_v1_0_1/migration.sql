/*
  Warnings:

  - You are about to drop the column `año` on the `vehicle` table. All the data in the column will be lost.
  - Added the required column `year` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `vehicle` DROP COLUMN `año`,
    ADD COLUMN `year` INTEGER NOT NULL;
