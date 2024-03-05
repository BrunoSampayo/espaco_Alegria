/*
  Warnings:

  - You are about to alter the column `hora_fim` on the `Schedule` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.
  - You are about to alter the column `hora_inicio` on the `Schedule` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Schedule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome_cliente" TEXT NOT NULL,
    "numero_celular" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "hora_inicio" DATETIME NOT NULL,
    "hora_fim" DATETIME NOT NULL,
    "feriado" BOOLEAN NOT NULL DEFAULT false,
    "touro_mecanico" INTEGER NOT NULL DEFAULT 0,
    "fotos" INTEGER NOT NULL DEFAULT 0,
    "garcom" INTEGER NOT NULL DEFAULT 0,
    "dj" INTEGER NOT NULL DEFAULT 0,
    "climatizacao" INTEGER NOT NULL DEFAULT 0,
    "churrasqueira" INTEGER NOT NULL DEFAULT 0,
    "telao" INTEGER NOT NULL DEFAULT 0,
    "taxa_luz" INTEGER NOT NULL DEFAULT 0,
    "valor_buffet" REAL NOT NULL DEFAULT 0,
    "observacao" TEXT NOT NULL,
    "valor_sugerido" REAL NOT NULL,
    "valor_cobrado" REAL NOT NULL
);
INSERT INTO "new_Schedule" ("churrasqueira", "climatizacao", "data", "dj", "feriado", "fotos", "garcom", "hora_fim", "hora_inicio", "id", "nome_cliente", "numero_celular", "observacao", "taxa_luz", "telao", "touro_mecanico", "valor_buffet", "valor_cobrado", "valor_sugerido") SELECT "churrasqueira", "climatizacao", "data", "dj", "feriado", "fotos", "garcom", "hora_fim", "hora_inicio", "id", "nome_cliente", "numero_celular", "observacao", "taxa_luz", "telao", "touro_mecanico", "valor_buffet", "valor_cobrado", "valor_sugerido" FROM "Schedule";
DROP TABLE "Schedule";
ALTER TABLE "new_Schedule" RENAME TO "Schedule";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
