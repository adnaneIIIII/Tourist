/*
  Warnings:

  - You are about to drop the `carlists` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `carlists`;

-- CreateTable
CREATE TABLE `carslists` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `carname` VARCHAR(191) NOT NULL,
    `brand` VARCHAR(191) NOT NULL,
    `brandyear` INTEGER NOT NULL,
    `price` DOUBLE NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `cartype` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
