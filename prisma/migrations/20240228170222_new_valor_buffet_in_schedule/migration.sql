/*
  Warnings:

  - You are about to drop the column `buffet` on the `Valores` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Schedule" ADD COLUMN     "valor_buffet" TEXT;

-- AlterTable
ALTER TABLE "Valores" DROP COLUMN "buffet";
