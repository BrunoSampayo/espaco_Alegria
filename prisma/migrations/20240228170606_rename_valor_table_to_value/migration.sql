/*
  Warnings:

  - You are about to drop the `Valores` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Valores";

-- CreateTable
CREATE TABLE "Value" (
    "versao" SERIAL NOT NULL,
    "data_modificacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valor_padrao" INTEGER NOT NULL,
    "valor_feriado" INTEGER NOT NULL,
    "touro_mecanico" INTEGER NOT NULL,
    "fotos" INTEGER NOT NULL,
    "garcom" INTEGER NOT NULL,
    "dj" INTEGER NOT NULL,
    "climatizacao" INTEGER NOT NULL,
    "churrasqueira" INTEGER NOT NULL,
    "telao" INTEGER NOT NULL,
    "taxa_luz" INTEGER NOT NULL,

    CONSTRAINT "Value_pkey" PRIMARY KEY ("versao")
);
