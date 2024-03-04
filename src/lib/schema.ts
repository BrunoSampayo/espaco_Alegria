import z from 'zod'

const stringTransformToInt = z.string().transform((str: string) => parseInt(str));
const stringTransformToFloat = z.string().transform((str: string) => parseFloat(str));
const stringTransformToDate = z.string().transform((str: string) => new Date(str));
const stringtoIntwithValue = (defaultValue: string, max: number) => stringTransformToInt.default(defaultValue).refine(value => value >= parseInt(defaultValue) && (value === parseInt(defaultValue) || value >= max), { message: `Caso necessite deve ser minimo de ${max} horas`, })

export const scheduleSchema = z.object({
    nome_cliente: z.string(),
    numero_celular: z.string(),
    data: stringTransformToDate,
    hora_inicio: z.string(),
    hora_fim: z.string(),
    feriado: z.boolean(),
    touro_mecanico: z.number(),
    fotos: z.number(),
    garcom: z.number(),
    dj: z.number(),
    climatizacao: z.number(),
    churrasqueira: z.number(),
    telao: z.number(),
    taxa_luz: z.number(),
    valor_buffet: z.number(),
    observacao: z.string(),
    valor_sugerido: stringTransformToFloat,
    valor_cobrado: stringTransformToFloat
})

export const valideFormSchema = z.object({
    nome_cliente: z.string(),
    numero_celular: z.string().optional(),
    data: z.string(),
    hora_inicio: z.string(),
    hora_fim: z.string(),
    feriado: z.boolean(),
    garcom: stringtoIntwithValue('0', 4),
    touro_mecanico: stringtoIntwithValue('0', 1),
    taxa_luz: stringtoIntwithValue('0', 4),
    fotos: stringtoIntwithValue('0', 1),
    dj: stringtoIntwithValue('0', 4),
    climatizacao: stringtoIntwithValue('0', 4),
    churrasqueira: stringtoIntwithValue('0', 4),
    telao: stringtoIntwithValue('0', 4),
    valor_buffet: stringtoIntwithValue('0', 4),
    observacao: z.string().default("  "),
    valor_sugerido: z.string().default("0"),
    valor_cobrado: z.string().default("0"),
})

