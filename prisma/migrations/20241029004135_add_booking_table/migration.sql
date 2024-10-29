/*
  Warnings:

  - You are about to drop the `bookingdata` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `bookingdata`;

-- CreateTable
CREATE TABLE `booking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullname` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `pickup` VARCHAR(191) NOT NULL,
    `dropoff` VARCHAR(191) NOT NULL,
    `carname` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
