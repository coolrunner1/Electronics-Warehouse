/*
  Warnings:

  - You are about to drop the column `description` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the `Chapter` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Chapter" DROP CONSTRAINT "Chapter_chapterId_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "description";

-- DropTable
DROP TABLE "Chapter";
