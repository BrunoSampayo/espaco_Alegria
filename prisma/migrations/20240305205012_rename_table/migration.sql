/*
  Warnings:

  - You are about to drop the `extra` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "extra";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Extra" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "data_modificacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "salao" REAL NOT NULL,
    "Monitores" REAL NOT NULL,
    "garcom" REAL NOT NULL,
    "climatizacao" REAL NOT NULL,
    "dj" REAL NOT NULL,
    "telao" REAL NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Extra_title_key" ON "Extra"("title");
