import { Prisma } from '@/lib/prisma'
import { scheduleSchema } from '@/lib/schema'
import { NextRequest } from 'next/server';
import 'dayjs'
import dayjs from 'dayjs';
export async function GET(req: NextRequest) {
    const data = req.nextUrl.searchParams.get("date") as string;
    //data format yyyy-mm-dd


    const startOfMonth = dayjs(data).startOf('month').add(-1, 'day').toDate();
    const endOfMonth = dayjs(data).endOf('month').add(-1, 'day').toDate();
    const schedules = await Prisma.schedule.findMany({
        where: {
            data: {
                lte: endOfMonth,
                gte: startOfMonth
            }
        }
    })

    Response.json(schedules)
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


