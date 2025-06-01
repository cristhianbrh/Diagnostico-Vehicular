-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vehicle` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `marca` VARCHAR(191) NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,
    `año` INTEGER NOT NULL,
    `motor` VARCHAR(191) NOT NULL,
    `vin` VARCHAR(191) NOT NULL,
    `patente` VARCHAR(191) NOT NULL,
    `km` INTEGER NOT NULL,
    `fechaAdq` DATETIME(3) NOT NULL,
    `userId` INTEGER NOT NULL,
    `lastDiag` DATETIME(3) NULL,

    UNIQUE INDEX `Vehicle_vin_key`(`vin`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dtc` (
    `code` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `severity` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DtcCause` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(191) NOT NULL,
    `dtcCode` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DtcSolution` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(191) NOT NULL,
    `dtcCode` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Symptom` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Diagnostic` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vehicleId` INTEGER NOT NULL,
    `fecha` DATETIME(3) NOT NULL,
    `desc` VARCHAR(191) NOT NULL,
    `tecnico` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,
    `detalles` VARCHAR(191) NOT NULL,
    `scannerFileId` INTEGER NULL,
    `cost` INTEGER NOT NULL,
    `duration` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DiagnosticDtc` (
    `diagnosticId` INTEGER NOT NULL,
    `dtcCode` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`diagnosticId`, `dtcCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DiagnosticSymptom` (
    `diagnosticId` INTEGER NOT NULL,
    `symptomId` INTEGER NOT NULL,

    PRIMARY KEY (`diagnosticId`, `symptomId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ScannerFile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fileName` VARCHAR(191) NOT NULL,
    `uploadDate` DATETIME(3) NOT NULL,
    `vehicleVin` VARCHAR(191) NOT NULL,
    `scannerType` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `rawData` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Help` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Vehicle` ADD CONSTRAINT `Vehicle_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DtcCause` ADD CONSTRAINT `DtcCause_dtcCode_fkey` FOREIGN KEY (`dtcCode`) REFERENCES `Dtc`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DtcSolution` ADD CONSTRAINT `DtcSolution_dtcCode_fkey` FOREIGN KEY (`dtcCode`) REFERENCES `Dtc`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Diagnostic` ADD CONSTRAINT `Diagnostic_vehicleId_fkey` FOREIGN KEY (`vehicleId`) REFERENCES `Vehicle`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Diagnostic` ADD CONSTRAINT `Diagnostic_scannerFileId_fkey` FOREIGN KEY (`scannerFileId`) REFERENCES `ScannerFile`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DiagnosticDtc` ADD CONSTRAINT `DiagnosticDtc_diagnosticId_fkey` FOREIGN KEY (`diagnosticId`) REFERENCES `Diagnostic`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DiagnosticDtc` ADD CONSTRAINT `DiagnosticDtc_dtcCode_fkey` FOREIGN KEY (`dtcCode`) REFERENCES `Dtc`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DiagnosticSymptom` ADD CONSTRAINT `DiagnosticSymptom_diagnosticId_fkey` FOREIGN KEY (`diagnosticId`) REFERENCES `Diagnostic`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DiagnosticSymptom` ADD CONSTRAINT `DiagnosticSymptom_symptomId_fkey` FOREIGN KEY (`symptomId`) REFERENCES `Symptom`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ScannerFile` ADD CONSTRAINT `ScannerFile_vehicleVin_fkey` FOREIGN KEY (`vehicleVin`) REFERENCES `Vehicle`(`vin`) ON DELETE RESTRICT ON UPDATE CASCADE;
