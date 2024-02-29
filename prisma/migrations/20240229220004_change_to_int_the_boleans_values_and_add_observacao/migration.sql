/*
  Warnings:

  - You are about to drop the column `buffet` on the `Schedule` table. All the data in the column will be lost.
  - The `touro_mecanico` column on the `Schedule` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `fotos` column on the `Schedule` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `garcom` column on the `Schedule` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dj` column on the `Schedule` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `climatizacao` column on the `Schedule` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `churrasqueira` column on the `Schedule` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `telao` column on the `Schedule` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `taxa_luz` column on the `Schedule` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `valor_buffet` column on the `Schedule` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[data,hora_inicio]` on the table `Schedule` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[data,hora_fim]` on the table `Schedule` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `observacao` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "buffet",
ADD COLUMN     "observacao" TEXT NOT NULL,
DROP COLUMN "touro_mecanico",
ADD COLUMN     "touro_mecanico" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "fotos",
ADD COLUMN     "fotos" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "garcom",
ADD COLUMN     "garcom" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "dj",
ADD COLUMN     "dj" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "climatizacao",
ADD COLUMN     "climatizacao" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "churrasqueira",
ADD COLUMN     "churrasqueira" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "telao",
ADD COLUMN     "telao" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "taxa_luz",
ADD COLUMN     "taxa_luz" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "valor_buffet",
ADD COLUMN     "valor_buffet" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_data_hora_inicio_key" ON "Schedule"("data", "hora_inicio");

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_data_hora_fim_key" ON "Schedule"("data", "hora_fim");
