-- AlterTable
ALTER TABLE "item" ADD COLUMN     "score" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "item_details" (
    "id" SERIAL NOT NULL,
    "item_id" INTEGER NOT NULL,
    "description_en" TEXT NOT NULL,
    "description_ru" TEXT NOT NULL,
    "specs_en" TEXT NOT NULL,
    "specs_ru" TEXT NOT NULL,

    CONSTRAINT "item_details_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "item_details_item_id_key" ON "item_details"("item_id");

-- AddForeignKey
ALTER TABLE "item_details" ADD CONSTRAINT "item_details_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "item"("item_id") ON DELETE CASCADE ON UPDATE CASCADE;
