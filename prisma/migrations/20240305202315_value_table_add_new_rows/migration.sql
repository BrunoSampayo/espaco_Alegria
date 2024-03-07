/*
  Warnings:

  - The primary key for the `Value` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `versao` on the `Value` table. All the data in the column will be lost.
  - Added the required column `id` to the `Value` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Value` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Value" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "data_modificacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valor_padrao" INTEGER NOT NULL,
    "valor_feriado" INTEGER NOT NULL,
    "touro_mecanico" INTEGER NOT NULL,
    "fotos" INTEGER NOT NULL,
    "garcom" INTEGER NOT NULL,
    "dj" INTEGER NOT NULL,
    "climatizacao" INTEGER NOT NULL,
    "churrasqueira" INTEGER NOT NULL,
    "telao" INTEGER NOT NULL,
    "taxa_luz" INTEGER NOT NULL
);
INSERT INTO "new_Value" ("churrasqueira", "climatizacao", "data_modificacao", "dj", "fotos", "garcom", "taxa_luz", "telao", "touro_mecanico", "valor_feriado", "valor_padrao") SELECT "churrasqueira", "climatizacao", "data_modificacao", "dj", "fotos", "garcom", "taxa_luz", "telao", "touro_mecanico", "valor_feriado", "valor_padrao" FROM "Value";
DROP TABLE "Value";
ALTER TABLE "new_Value" RENAME TO "Value";
CREATE UNIQUE INDEX "Value_title_key" ON "Value"("title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
