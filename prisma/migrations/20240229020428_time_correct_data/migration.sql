/*
  Warnings:

  - You are about to drop the column `horas` on the `Schedule` table. All the data in the column will be lost.
  - Added the required column `hora_fim` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hora_inicio` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "horas",
ADD COLUMN     "hora_fim" TEXT NOT NULL,
ADD COLUMN     "hora_inicio" TEXT NOT NULL;
