-- CreateTable
CREATE TABLE `DiagnosticDtcSolution` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(191) NOT NULL,
    `diagnosticId` INTEGER NOT NULL,
    `dtcCode` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DiagnosticDtcSolution` ADD CONSTRAINT `DiagnosticDtcSolution_diagnosticId_dtcCode_fkey` FOREIGN KEY (`diagnosticId`, `dtcCode`) REFERENCES `DiagnosticDtc`(`diagnosticId`, `dtcCode`) ON DELETE RESTRICT ON UPDATE CASCADE;
