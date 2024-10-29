-- CreateTable
CREATE TABLE `BookingData` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullname` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `pickup` VARCHAR(191) NOT NULL,
    `dropoff` VARCHAR(191) NOT NULL,
    `carlistId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BookingData` ADD CONSTRAINT `BookingData_carlistId_fkey` FOREIGN KEY (`carlistId`) REFERENCES `carlists`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
