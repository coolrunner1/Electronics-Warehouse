/*
  Warnings:

  - Added the required column `created_at` to the `review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "review" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL,
ALTER COLUMN "score" SET DEFAULT 0;
