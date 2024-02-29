import { Prisma } from '@/lib/prisma'
import { scheduleSchema } from '@/lib/schema'

export async function GET() {

    return Response.json({ ok: true })



}

export async function POST(req: Request) {
    const data = await req.json()
    console.log(new Date().toISOString())
    try {
        const valide = scheduleSchema.parse(data)
        const newSchedule = await Prisma.schedule.create({
            data: {
                data: valide.data,
                nome_cliente: valide.nome_cliente,
                numero_celular: valide.numero_celular,
                hora_inicio: valide.hora_inicio,
                hora_fim: valide.hora_fim,
                feriado: valide.feriado,
                touro_mecanico: valide.touro_mecanico,
                fotos: valide.fotos,
                garcom: valide.garcom,
                dj: valide.dj,
                climatizacao: valide.climatizacao,
                churrasqueira: valide.churrasqueira,
                telao: valide.telao,
                taxa_luz: valide.taxa_luz,
                buffet: valide.buffet,
                valor_buffet: valide.valor_buffet,
                valor_sugerido: valide.valor_sugerido,
                valor_cobrado: valide.valor_cobrado

            }

        })
        return Response.json({ "Novo agendamento": newSchedule })

    }
    catch (err) {
        return Response.json(err)
    }


}


