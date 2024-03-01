import  prisma  from '@/lib/prisma'
import { scheduleSchema } from '@/lib/schema'
import { NextRequest } from 'next/server';
import 'dayjs'
import dayjs from 'dayjs';
export async function GET(req: NextRequest) {
    const data = req.nextUrl.searchParams.get("date") as string;
    //data format yyyy-mm-dd


    const startOfMonth = dayjs(data).startOf('month').add(-1, 'day').toDate().setUTCHours(0,0,0,0);
    const endOfMonth = dayjs(data).endOf('month').endOf('hour').add(-1, 'day').toDate().setUTCHours(23,59,59,999);
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
    
    
    if(schedules.length===0){
        return Response.json({ error: "Nenhum agendamento encontrado" })
    }
    return  Response.json(schedules)
}


export async function POST(req: Request) {
    const data = await req.json()
    console.log(new Date().toISOString())
    try {
        const valide = scheduleSchema.parse(data)
        const newSchedule = await prisma.schedule.create({
            data: {
                nome_cliente: valide.nomeCliente,
                numero_celular: valide.numeroCelular,
                data: valide.data,
                hora_inicio: valide.horaInicio,
                hora_fim: valide.horaFim,
                feriado: valide.feriado,
                touro_mecanico: valide.touroMecanico,
                fotos: valide.fotos,
                garcom: valide.garcom,
                dj: valide.dj,
                climatizacao: valide.climatizacao,
                churrasqueira: valide.churrasqueira,
                telao: valide.telao,
                taxa_luz: valide.taxaLuz,
                valor_buffet: valide.valorBuffet,
                observacao: valide.observacao,
                valor_sugerido: valide.valorSugerido,
                valor_cobrado: valide.valorCobrado

            }

        })
        return Response.json({ "Novo agendamento": newSchedule })

    }
    catch (err) {
        const error:any=err
        return Response.json(error.message)
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
