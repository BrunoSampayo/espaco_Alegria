import z from 'zod'

export const scheduleSchema = z.object({
    nome_cliente: z.string(),
    numero_celular: z.string(),
    data: z.string().transform((str) => new Date(str)),
    hora_inicio: z.string(),
    hora_fim: z.string(),
    feriado: z.boolean(),
    touro_mecanico: z.string().transform((str) => parseInt(str)) ,//hora
    fotos: z.string().transform((str) => parseInt(str)),//hora
    garcom: z.string().transform((str) => parseInt(str)),
    dj: z.string().transform((str) => parseInt(str)),
    climatizacao: z.string().transform((str) => parseInt(str)),
    churrasqueira: z.string().transform((str) => parseInt(str)),
    telao: z.string().transform((str) => parseInt(str)),
    taxa_luz: z.string().transform((str) => parseInt(str)),
    valor_buffet: z.string().transform((str) => parseInt(str)),
    observacao: z.string(),
    valor_sugerido: z.string().transform((str) => parseFloat(str)),
    valor_cobrado: z.string().transform((str) => parseFloat(str))
})

export const valideFormSchema = z.object({
    nome_cliente: z.string()
        .transform(name => {
            return name.trim().split(' ').map(word => {
                return word[0].toLocaleUpperCase().concat(word.substring(1))
            }).join(' ')
        }),
        numero_celular: z.string().optional(),
    data: z.string(),
    hora_inicio: z.string(),
    hora_fim: z.string(),
    feriado: z.boolean(),
    touro_mecanico: z.string().optional().refine(value => {
        if (!value) return true; // Permitindo valor vazio ou ausente
        const numPhotos = parseInt(value, 10); // Convertendo a string para um número
        return numPhotos >= 1; // Validando se o número de fotos é pelo menos 4
    }, { message: 'O número mínimo de horas é 1h' }),
    fotos: z.string().optional().refine(value => {
        if (!value) return true; // Permitindo valor vazio ou ausente-m 
        const numPhotos = parseInt(value, 10); // Convertendo a string para um número
        return numPhotos >= 1; // Validando se o número de fotos é pelo menos 4
    }, { message: 'O número mínimo de horas é 1h' }) ,
    garcom: z.string().optional().refine(value => {
        if (!value) return true; // Permitindo valor vazio ou ausente
        const numPhotos = parseInt(value, 10); // Convertendo a string para um número
        return numPhotos >= 4; // Validando se o número de fotos é pelo menos 4
    }, { message: 'O número mínimo de horas é 4h' }),
    dj: z.string().optional().refine(value => {
        if (!value) return true; // Permitindo valor vazio ou ausente
        const numPhotos = parseInt(value, 10); // Convertendo a string para um número
        return numPhotos >= 4; // Validando se o número de fotos é pelo menos 4
    }, { message: 'O número mínimo de horas é 4h' }),
    climatizacao: z.string().optional().refine(value => {
        if (!value) return true; // Permitindo valor vazio ou ausente
        const numPhotos = parseInt(value, 10); // Convertendo a string para um número
        return numPhotos >= 4; // Validando se o número de fotos é pelo menos 4
    }, { message: 'O número mínimo de horas é 4h' }),
    churrasqueira: z.string().optional().refine(value => {
        if (!value) return true; // Permitindo valor vazio ou ausente
        const numPhotos = parseInt(value, 10); // Convertendo a string para um número
        return numPhotos >= 4; // Validando se o número de fotos é pelo menos 4
    }, { message: 'O número mínimo de horas é 4h' }),
    telao:z.string().optional().refine(value => {
        if (!value) return true; // Permitindo valor vazio ou ausente
        const numPhotos = parseInt(value, 10); // Convertendo a string para um número
        return numPhotos >= 4; // Validando se o número de fotos é pelo menos 4
    }, { message: 'O número mínimo de horas é 4h' }),
    taxa_luz: z.string().optional().refine(value => {
        if (!value) return true; // Permitindo valor vazio ou ausente
        const numPhotos = parseInt(value, 10); // Convertendo a string para um número
        return numPhotos >= 4; // Validando se o número de fotos é pelo menos 4
    }, { message: 'O número mínimo de horas é 4h' }),
    
    valor_buffet:z.string().optional(),
    observacao: z.string().optional(),
    valor_sugerido:z.string().transform((str) => parseFloat(str)),
    valor_cobrado: z.string().optional(),

})
