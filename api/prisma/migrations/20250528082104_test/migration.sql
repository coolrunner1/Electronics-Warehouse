-- CreateEnum
CREATE TYPE "item_status" AS ENUM ('In Stock', 'Out Of Stock');

-- CreateEnum
CREATE TYPE "order_status" AS ENUM ('Pending', 'Processing', 'Shipped', 'Delivered', 'Canceled');

-- CreateEnum
CREATE TYPE "return_reason" AS ENUM ('Defective Product', 'Wrong Item Sent', 'Item Not as Described', 'Changed Mind', 'Other');

-- CreateEnum
CREATE TYPE "return_status" AS ENUM ('Sent', 'Received', 'Processing', 'Refunded', 'Rejected');

-- CreateTable
CREATE TABLE "Chapter" (
    "id" SERIAL NOT NULL,
    "chapterId" INTEGER,

    CONSTRAINT "Chapter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "category_id" SERIAL NOT NULL,
    "name" JSONB NOT NULL,
    "description" JSONB NOT NULL,
    "parent_id" INTEGER,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "client" (
    "client_id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "phone_number" INTEGER NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "region" VARCHAR(255) NOT NULL,
    "country" VARCHAR(255) NOT NULL,
    "postal_code" INTEGER NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("client_id")
);

-- CreateTable
CREATE TABLE "clientorder" (
    "order_id" SERIAL NOT NULL,
    "client_id" INTEGER NOT NULL,
    "status" "order_status" NOT NULL,
    "timestamp" TIMESTAMP(6) NOT NULL,
    "total_items" INTEGER NOT NULL,
    "total_amount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "clientorder_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "item" (
    "item_id" SERIAL NOT NULL,
    "category_id" INTEGER NOT NULL,
    "model" VARCHAR(255) NOT NULL,
    "image_path" VARCHAR(255),
    "status" "item_status" NOT NULL,
    "manufacturer" VARCHAR(255) NOT NULL,
    "unit_price" DOUBLE PRECISION NOT NULL,
    "date_of_arrival" TIMESTAMP(6) NOT NULL,
    "units_in_stock" INTEGER NOT NULL,
    "faulty_units" INTEGER NOT NULL,

    CONSTRAINT "item_pkey" PRIMARY KEY ("item_id")
);

-- CreateTable
CREATE TABLE "orderproduct" (
    "order_product_id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "returned_units" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "orderproduct_pkey" PRIMARY KEY ("order_product_id")
);

-- CreateTable
CREATE TABLE "orderreturn" (
    "order_return_id" SERIAL NOT NULL,
    "order_product_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "reason" "return_reason" NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "status" "return_status" NOT NULL,
    "return_date" DATE NOT NULL,

    CONSTRAINT "orderreturn_pkey" PRIMARY KEY ("order_return_id")
);

-- CreateTable
CREATE TABLE "role" (
    "role_id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "supplier" (
    "supplier_id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "region" VARCHAR(255) NOT NULL,
    "country" VARCHAR(255) NOT NULL,
    "postal_code" INTEGER NOT NULL,
    "phone_number" INTEGER NOT NULL,

    CONSTRAINT "supplier_pkey" PRIMARY KEY ("supplier_id")
);

-- CreateTable
CREATE TABLE "supplieritem" (
    "id" SERIAL NOT NULL,
    "supplier_id" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,

    CONSTRAINT "supplieritem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userprofile" (
    "user_id" SERIAL NOT NULL,
    "role_id" INTEGER NOT NULL,
    "client_id" INTEGER,
    "login" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "image_path" VARCHAR(255),
    "full_name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone_number" INTEGER NOT NULL,
    "passport" INTEGER NOT NULL,

    CONSTRAINT "userprofile_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "role_name_key" ON "role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "userprofile_login_key" ON "userprofile"("login");

-- CreateIndex
CREATE UNIQUE INDEX "userprofile_email_key" ON "userprofile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "userprofile_phone_number_key" ON "userprofile"("phone_number");

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "Chapter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "Category"("category_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clientorder" ADD CONSTRAINT "clientorder_client_foreign" FOREIGN KEY ("client_id") REFERENCES "client"("client_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_category_foreign" FOREIGN KEY ("category_id") REFERENCES "Category"("category_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderproduct" ADD CONSTRAINT "orderproduct_clientorder_foreign" FOREIGN KEY ("order_id") REFERENCES "clientorder"("order_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orderproduct" ADD CONSTRAINT "orderproduct_item_foreign" FOREIGN KEY ("item_id") REFERENCES "item"("item_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orderreturn" ADD CONSTRAINT "orderreturn_orderproduct_foreign" FOREIGN KEY ("order_product_id") REFERENCES "orderproduct"("order_product_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "supplieritem" ADD CONSTRAINT "supplieritem_item_foreign" FOREIGN KEY ("item_id") REFERENCES "item"("item_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "supplieritem" ADD CONSTRAINT "supplieritem_supplier_foreign" FOREIGN KEY ("supplier_id") REFERENCES "supplier"("supplier_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "userprofile" ADD CONSTRAINT "userprofile_client_foreign" FOREIGN KEY ("client_id") REFERENCES "client"("client_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userprofile" ADD CONSTRAINT "userprofile_role_foreign" FOREIGN KEY ("role_id") REFERENCES "role"("role_id") ON DELETE CASCADE ON UPDATE CASCADE;
