import prisma from '@/lib/prisma'
import { scheduleSchema } from '@/lib/schema'
import { NextRequest } from 'next/server';
import 'dayjs'
import dayjs from 'dayjs';
import { HourFormat } from '@/utils/hoursFormat';
import isBetween from 'dayjs/plugin/isBetween'
import { NextApiResponse } from 'next';
import { ZodError } from 'zod';

export async function GET(req: NextRequest) {
    const data = req.nextUrl.searchParams.get("date") as string;
    //data format yyyy-mm-dd


    const startOfMonth = dayjs(data).startOf('month').add(-1, 'day').toDate().setUTCHours(0, 0, 0, 0);
    const endOfMonth = dayjs(data).endOf('month').endOf('hour').add(-1, 'day').toDate().setUTCHours(23, 59, 59, 999);
    console.log(new Date(startOfMonth))
    console.log(new Date(endOfMonth))

    const schedules = await prisma.schedule.findMany({
        where: {
            data: {
                gte: new Date(startOfMonth),
                lte: new Date(endOfMonth)
            }
        }
    })


    if (schedules.length === 0) {
        return new Response(JSON.stringify({ error: "Nenhum agendamento encontrado" }))

    }
    return new Response(JSON.stringify(schedules))

}


export async function POST(req: Request, res: NextApiResponse) {
    const data = await req.json()


    const validetedSchema = scheduleSchema.safeParse(data)
    if (!validetedSchema.success) {
        console.error("erro validecao api: " + validetedSchema.error.issues)
        throw new Error("Erro de validação na API, peça para adminstrador checar os logs do sistema")
    }



    const [horaInicio, horaFim] = HourFormat(validetedSchema.data.data, validetedSchema.data.hora_inicio, validetedSchema.data.hora_fim)


    const scheduleScheck = await prisma.schedule.findMany({
        where: {
            data: validetedSchema.data.data
        }
    })
    //verifica se veio dado e se veio caso for cadastrar nao existe nenhum registro no mesmo horario marcado
    if (scheduleScheck.length > 0) {
        for (let i in scheduleScheck) {
            dayjs.extend(isBetween);
            dayjs(horaInicio).isBetween(scheduleScheck[i].hora_inicio, scheduleScheck[i].hora_fim)
            return new Response(JSON.stringify({
                error:
                    `Erro de campo único duplicado, nao pode haver agendamento no mesmo dia com mesma hora de inicio ou fim de evento, pois a um agendamento no nome de ${scheduleScheck[i].nome_cliente}`
            }), { status: 400 }
            )
        }
    }


    try {
        const newSchedule = await prisma.schedule.create({
            data: {
                nome_cliente: validetedSchema.data.nome_cliente,
                numero_celular: validetedSchema.data.numero_celular,
                data: validetedSchema.data.data,
                hora_inicio: horaInicio,
                hora_fim: horaFim,
                feriado: validetedSchema.data.feriado,
                touro_mecanico: validetedSchema.data.touro_mecanico,
                fotos: validetedSchema.data.fotos,
                garcom: validetedSchema.data.garcom,
                dj: validetedSchema.data.dj,
                climatizacao: validetedSchema.data.climatizacao,
                churrasqueira: validetedSchema.data.churrasqueira,
                telao: validetedSchema.data.telao,
                taxa_luz: validetedSchema.data.taxa_luz,
                observacao: validetedSchema.data.observacao,
                valor_cobrado: validetedSchema.data.valor_cobrado,
                valor_sugerido: validetedSchema.data.valor_sugerido,
                valor_buffet: validetedSchema.data.valor_buffet
            }

        })
        return new Response(JSON.stringify({ novoAgendamento: newSchedule }), { status: 201 })


    }
    catch (err) {
        const error: any = err
        if (err instanceof ZodError) {
            return new Response(JSON.stringify({ error: error.format() }),)
        }
        return new Response(JSON.stringify({ error: error.message }),)
    }


}


export async function PUT(req: NextRequest) {
    const dados = await req.json()
    const id = req.nextUrl.searchParams.get("id") as string;
    try {
        const valide = scheduleSchema.parse(dados)
        const editedSchedule = await prisma.schedule.update({
            where: { id: id }, data: valide
        })

        return Response.json({ message: `Agendamento do ${editedSchedule.nome_cliente} alterado com Sucesso` })
    } catch (err) {
        return Response.json("error" + err)
    }
}
