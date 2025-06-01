/*
  Warnings:

  - You are about to drop the column `nameEN` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `nameRU` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `modelEN` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `modelRU` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `item` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name_en]` on the table `category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name_ru]` on the table `category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name_en` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_ru` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model_en` to the `item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model_ru` to the `item` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "category_nameEN_key";

-- DropIndex
DROP INDEX "category_nameRU_key";

-- AlterTable
ALTER TABLE "category" DROP COLUMN "nameEN",
DROP COLUMN "nameRU",
ADD COLUMN     "name_en" VARCHAR(255) NOT NULL,
ADD COLUMN     "name_ru" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "item" DROP COLUMN "modelEN",
DROP COLUMN "modelRU",
DROP COLUMN "status",
ADD COLUMN     "model_en" VARCHAR(255) NOT NULL,
ADD COLUMN     "model_ru" VARCHAR(255) NOT NULL,
ALTER COLUMN "unit_price" SET DEFAULT 0,
ALTER COLUMN "units_in_stock" SET DEFAULT 0,
ALTER COLUMN "faulty_units" SET DEFAULT 0;

-- DropEnum
DROP TYPE "item_status";

-- CreateIndex
CREATE UNIQUE INDEX "category_name_en_key" ON "category"("name_en");

-- CreateIndex
CREATE UNIQUE INDEX "category_name_ru_key" ON "category"("name_ru");
