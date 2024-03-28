import dayjs from 'dayjs';
import z from 'zod'

const stringTransformToInt = z.string().transform((str: string) => parseInt(str));
const stringTransformToFloat = z.string().transform((str: string) => parseFloat(str));
const stringTransformToDate = z.string().transform((str: string) => new Date(str));
const stringtoIntwithValue = (defaultValue: string, max: number) => stringTransformToInt.default(defaultValue).refine(value => value >= parseInt(defaultValue) && (value === parseInt(defaultValue) || value >= max), { message: `Caso necessite deve ser minimo de ${max} horas`, })

export const scheduleSchema = z.object({
    nome_cliente: z.string(),
    numero_celular: z.string(),
    data: z.coerce.date(),
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
    nome_cliente: z.string().min(2),
    numero_celular: z.string().optional(),
    data: z.coerce.date(),//.refine((data)=>data>=new Date(),{message: "Data inválida"}),
    hora_inicio: z.string(),
    hora_fim: z.string(),
    feriado: z.coerce.boolean(),
    garcom: stringtoIntwithValue('0', 4),
    touro_mecanico: stringtoIntwithValue('0', 4),
    taxa_luz: stringtoIntwithValue('0', 4),
    fotos: stringtoIntwithValue('0', 1),
    dj: stringtoIntwithValue('0', 4),
    climatizacao: stringtoIntwithValue('0', 4),
    churrasqueira: stringtoIntwithValue('0', 4),
    telao: stringtoIntwithValue('0', 4),
    valor_buffet: stringTransformToFloat,
    observacao: z.string().default("  "),
    valor_sugerido: z.string(),
    valor_cobrado: z.string(),
})

