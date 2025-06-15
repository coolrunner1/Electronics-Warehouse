-- CreateTable
CREATE TABLE "article" (
    "id" SERIAL NOT NULL,
    "title_en" VARCHAR(100) NOT NULL,
    "title_ru" VARCHAR(100) NOT NULL,
    "description_en" VARCHAR(255) NOT NULL,
    "description_ru" VARCHAR(255) NOT NULL,
    "content_en" TEXT NOT NULL,
    "content_ru" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "article_pkey" PRIMARY KEY ("id")
);
