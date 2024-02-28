-- CreateTable
CREATE TABLE "Schedule" (
    "id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "nome_cliente" TEXT NOT NULL,
    "numbero_celular" TEXT NOT NULL,
    "horas" INTEGER NOT NULL,
    "feriado" BOOLEAN NOT NULL DEFAULT false,
    "touro_mecanico" BOOLEAN NOT NULL,
    "fotos" BOOLEAN NOT NULL,
    "garcom" BOOLEAN NOT NULL,
    "dj" BOOLEAN NOT NULL,
    "climatizacao" BOOLEAN NOT NULL,
    "churrasqueira" BOOLEAN NOT NULL,
    "telao" BOOLEAN NOT NULL,
    "taxa_luz" BOOLEAN NOT NULL,
    "buffet" BOOLEAN NOT NULL,
    "valor_sugerido" DOUBLE PRECISION NOT NULL,
    "valor_cobrado" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Valores" (
    "versao" SERIAL NOT NULL,
    "data_modificacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valor_padrao" INTEGER NOT NULL,
    "valor_feriado" INTEGER NOT NULL,
    "touro_mecanico" INTEGER NOT NULL,
    "fotos" INTEGER NOT NULL,
    "garcom" INTEGER NOT NULL,
    "dj" INTEGER NOT NULL,
    "climatizacao" INTEGER NOT NULL,
    "churrasqueira" INTEGER NOT NULL,
    "telao" INTEGER NOT NULL,
    "taxa_luz" INTEGER NOT NULL,
    "buffet" INTEGER NOT NULL,

    CONSTRAINT "Valores_pkey" PRIMARY KEY ("versao")
);
