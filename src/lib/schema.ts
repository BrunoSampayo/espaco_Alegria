import z from 'zod'

export const scheduleSchema = z.object({
    nome_cliente: z.string(),
    numero_celular: z.string(),
    data: z.string().transform((str) => new Date(str)),
    hora_inicio: z.string(),
    hora_fim: z.string(),
    feriado: z.boolean(),
    touro_mecanico: z.string().transform((str) => parseInt(str)),//hora
    fotos: z.string().transform((str) => parseInt(str)),//hora
    garcom: z.string().transform((str) => parseInt(str)),
    dj: z.string().transform((str) => parseInt(str)),
    climatizacao: z.string().transform((str) => parseInt(str)),
    churrasqueira: z.string().transform((str) => parseInt(str)),
    telao: z.string().transform((str) => parseInt(str)),
    taxa_luz: z.string().transform((str) => parseInt(str)),
    valor_buffet: z.string().transform((str) => parseInt(str)),
    observacao: z.string(),
    valor_sugerido: z.number(),
    valor_cobrado: z.number()
})
