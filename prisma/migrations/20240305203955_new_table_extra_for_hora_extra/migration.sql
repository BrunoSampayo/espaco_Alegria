-- CreateTable
CREATE TABLE "extra" (
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
CREATE UNIQUE INDEX "extra_title_key" ON "extra"("title");
