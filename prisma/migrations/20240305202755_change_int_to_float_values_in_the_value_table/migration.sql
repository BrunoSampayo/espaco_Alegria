/*
  Warnings:

  - You are about to alter the column `churrasqueira` on the `Value` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `climatizacao` on the `Value` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `dj` on the `Value` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `fotos` on the `Value` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `garcom` on the `Value` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `taxa_luz` on the `Value` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `telao` on the `Value` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `touro_mecanico` on the `Value` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `valor_feriado` on the `Value` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `valor_padrao` on the `Value` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Value" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "data_modificacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valor_padrao" REAL NOT NULL,
    "valor_feriado" REAL NOT NULL,
    "touro_mecanico" REAL NOT NULL,
    "fotos" REAL NOT NULL,
    "garcom" REAL NOT NULL,
    "dj" REAL NOT NULL,
    "climatizacao" REAL NOT NULL,
    "churrasqueira" REAL NOT NULL,
    "telao" REAL NOT NULL,
    "taxa_luz" REAL NOT NULL
);
INSERT INTO "new_Value" ("churrasqueira", "climatizacao", "data_modificacao", "dj", "fotos", "garcom", "id", "taxa_luz", "telao", "title", "touro_mecanico", "valor_feriado", "valor_padrao") SELECT "churrasqueira", "climatizacao", "data_modificacao", "dj", "fotos", "garcom", "id", "taxa_luz", "telao", "title", "touro_mecanico", "valor_feriado", "valor_padrao" FROM "Value";
DROP TABLE "Value";
ALTER TABLE "new_Value" RENAME TO "Value";
CREATE UNIQUE INDEX "Value_title_key" ON "Value"("title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
