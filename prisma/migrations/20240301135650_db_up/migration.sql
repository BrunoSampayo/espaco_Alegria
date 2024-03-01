-- CreateTable
CREATE TABLE "Schedule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome_cliente" TEXT NOT NULL,
    "numero_celular" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "hora_inicio" TEXT NOT NULL,
    "hora_fim" TEXT NOT NULL,
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

-- CreateTable
CREATE TABLE "Value" (
    "versao" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_data_hora_inicio_key" ON "Schedule"("data", "hora_inicio");

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_data_hora_fim_key" ON "Schedule"("data", "hora_fim");
