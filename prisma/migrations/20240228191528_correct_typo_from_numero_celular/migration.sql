/*
  Warnings:

  - You are about to drop the column `numbero_celular` on the `Schedule` table. All the data in the column will be lost.
  - Added the required column `numero_celular` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "numbero_celular",
ADD COLUMN     "numero_celular" TEXT NOT NULL;
