/*
  Warnings:

  - You are about to drop the column `name` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `nameLocales` on the `category` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nameEN]` on the table `category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nameRU]` on the table `category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nameEN` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameRU` to the `category` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "category_name_key";

-- AlterTable
ALTER TABLE "category" DROP COLUMN "name",
DROP COLUMN "nameLocales",
ADD COLUMN     "nameEN" TEXT NOT NULL,
ADD COLUMN     "nameRU" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "category_nameEN_key" ON "category"("nameEN");

-- CreateIndex
CREATE UNIQUE INDEX "category_nameRU_key" ON "category"("nameRU");
