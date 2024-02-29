import z from 'zod'

export const scheduleSchema = z.object({
    data: z.string().transform((str) => new Date(str)),
    nome_cliente: z.string(),
    numero_celular: z.string(),
    hora_inicio: z.string(),
    hora_fim: z.string(),
    feriado: z.boolean(),
    touro_mecanico: z.boolean(),
    fotos: z.boolean(),
    garcom: z.boolean(),
    dj: z.boolean(),
    climatizacao: z.boolean(),
    churrasqueira: z.boolean(),
    telao: z.boolean(),
    taxa_luz: z.boolean(),
    buffet: z.boolean(),
    valor_buffet: z.string(),
    valor_sugerido: z.number(),
    valor_cobrado: z.number()
})
