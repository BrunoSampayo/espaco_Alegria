'use server'
import prisma from '@/lib/prisma'
import { scheduleSchema, valideFormSchema } from '@/lib/schema'
import { HourFormat } from '@/utils/hoursFormat'
import dayjs from 'dayjs'
import { z } from 'zod'
import isBetween from 'dayjs/plugin/isBetween'

type FormData = z.infer<typeof valideFormSchema>

export async function getSchedule(id: string) {
  const schedule = await prisma.schedule.findUnique({
    where: {
      id,
    },
  })
  return schedule
}

export async function editSchedule(id: string, form: FormData) {
  const validetedSchema = scheduleSchema.safeParse(form)
  if (!validetedSchema.success) {
    console.error(
      'erro validecao campos action: ' + validetedSchema.error.issues,
    )
    return { error: 'Erro validação campos' }
  }

  const [horaInicio, horaFim] = HourFormat(
    validetedSchema.data.data,
    validetedSchema.data.hora_inicio,
    validetedSchema.data.hora_fim,
  )

  const scheduleScheck = await prisma.schedule.findMany({
    where: {
      data: validetedSchema.data.data,
    },
  })
  // verifica se veio dado e se veio caso for cadastrar nao existe nenhum registro no mesmo horario marcado
  if (scheduleScheck.length > 0) {
    for (const i in scheduleScheck) {
      if (scheduleScheck[i].id !== id) {
        dayjs.extend(isBetween)
        dayjs(horaInicio).isBetween(
          scheduleScheck[i].hora_inicio,
          scheduleScheck[i].hora_fim,
        )
        return {
          error:
            'Agendamento duplicado, ja existe um agendamento para esse dia entre o horario desejado',
        }
      }
    }
  }

  try {
    const editSchedule = await prisma.schedule.update({
      where: {
        id,
      },
      data: {
        nome_cliente: validetedSchema.data.nome_cliente,
        numero_celular: validetedSchema.data.numero_celular,
        churrasqueira: validetedSchema.data.churrasqueira,
        climatizacao: validetedSchema.data.climatizacao,
        data: validetedSchema.data.data,
        hora_inicio: horaInicio,
        hora_fim: horaFim,
        dj: validetedSchema.data.dj,
        feriado: validetedSchema.data.feriado,
        fotos: validetedSchema.data.fotos,
        garcom: validetedSchema.data.garcom,
        observacao: validetedSchema.data.observacao,
        taxa_luz: validetedSchema.data.taxa_luz,
        telao: validetedSchema.data.telao,
        touro_mecanico: validetedSchema.data.touro_mecanico,
        valor_buffet: validetedSchema.data.valor_buffet,
        valor_cobrado: validetedSchema.data.valor_cobrado,
        valor_sugerido: validetedSchema.data.valor_sugerido,
      },
    })
    return editSchedule
  } catch (error) {
    return { error }
  }
}
