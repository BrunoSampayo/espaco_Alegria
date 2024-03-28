'use server'
import prisma from '@/lib/prisma'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { revalidatePath } from 'next/cache'
dayjs.extend(utc)
export async function getSchedules(mes?: FormData) {
  if (mes) {
    const data = mes.get('mes') as string // 2024-07
    const fdata = dayjs(data).format('YYYY-MM-DD')
    const firstDayOfMonth = new Date(
      dayjs.utc(fdata).startOf('month').format('YYYY-MM-DD'),
    )
    const lastDayOfMonth = new Date(
      dayjs.utc(fdata).endOf('month').format('YYYY-MM-DD'),
    )

    const schedules = await prisma.schedule.findMany({
      where: {
        data: {
          lte: lastDayOfMonth,
          gte: firstDayOfMonth,
        },
      },
    })
    return schedules
  } else {
    const schedules = await prisma.schedule.findMany({
      orderBy: [{ data: 'desc' }],
      where: {},
    })

    return schedules
  }
}

export async function deleteSchedule(scheduleId: string) {
  await prisma.schedule.delete({
    where: {
      id: scheduleId,
    },
  })
  revalidatePath('/')
}
