/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nameLocales` to the `category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "category" ADD COLUMN     "nameLocales" JSONB NOT NULL,
ALTER COLUMN "name" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "category_name_key" ON "category"("name");

-- RenameForeignKey
ALTER TABLE "clientorder" RENAME CONSTRAINT "clientorder_client_foreign" TO "clientorder_client_id_fkey";

-- RenameForeignKey
ALTER TABLE "item" RENAME CONSTRAINT "item_category_foreign" TO "item_category_id_fkey";
