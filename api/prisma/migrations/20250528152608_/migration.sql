/*
  Warnings:

  - You are about to alter the column `nameEN` on the `category` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `nameRU` on the `category` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to drop the column `model` on the `item` table. All the data in the column will be lost.
  - Added the required column `modelEN` to the `item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modelRU` to the `item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "category" ALTER COLUMN "nameEN" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "nameRU" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "item" DROP COLUMN "model",
ADD COLUMN     "modelEN" VARCHAR(255) NOT NULL,
ADD COLUMN     "modelRU" VARCHAR(255) NOT NULL;

-- CreateTable
CREATE TABLE "review" (
    "id" SERIAL NOT NULL,
    "item_id" INTEGER NOT NULL,
    "client_id" INTEGER NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "review_pkey" PRIMARY KEY ("id")
);

-- RenameForeignKey
ALTER TABLE "orderproduct" RENAME CONSTRAINT "orderproduct_clientorder_foreign" TO "orderproduct_order_id_fkey";

-- RenameForeignKey
ALTER TABLE "orderproduct" RENAME CONSTRAINT "orderproduct_item_foreign" TO "orderproduct_item_id_fkey";

-- RenameForeignKey
ALTER TABLE "orderreturn" RENAME CONSTRAINT "orderreturn_orderproduct_foreign" TO "orderreturn_order_product_id_fkey";

-- RenameForeignKey
ALTER TABLE "supplieritem" RENAME CONSTRAINT "supplieritem_item_foreign" TO "supplieritem_item_id_fkey";

-- RenameForeignKey
ALTER TABLE "supplieritem" RENAME CONSTRAINT "supplieritem_supplier_foreign" TO "supplieritem_supplier_id_fkey";

-- RenameForeignKey
ALTER TABLE "userprofile" RENAME CONSTRAINT "userprofile_client_foreign" TO "userprofile_client_id_fkey";

-- RenameForeignKey
ALTER TABLE "userprofile" RENAME CONSTRAINT "userprofile_role_foreign" TO "userprofile_role_id_fkey";

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "item"("item_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "client"("client_id") ON DELETE CASCADE ON UPDATE CASCADE;
