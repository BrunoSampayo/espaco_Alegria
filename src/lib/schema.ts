import z from 'zod'

export const scheduleSchema = z.object({
    nomeCliente: z.string(),
    numeroCelular: z.string(),
    data: z.string().transform((str) => new Date(str)),
    horaInicio: z.string(),
    horaFim: z.string(),
    feriado: z.boolean(),
    touroMecanico: z.string().transform((str) => parseInt(str)),//hora
    fotos: z.string().transform((str) => parseInt(str)),//hora
    garcom: z.string().transform((str) => parseInt(str)),
    dj: z.string().transform((str) => parseInt(str)),
    climatizacao: z.string().transform((str) => parseInt(str)),
    churrasqueira: z.string().transform((str) => parseInt(str)),
    telao: z.string().transform((str) => parseInt(str)),
    taxaLuz: z.string().transform((str) => parseInt(str)),
    valorBuffet: z.string().transform((str) => parseFloat(str)),
    observacao: z.string(),
    valorSugerido: z.number(),
    valorCobrado: z.number()
})
