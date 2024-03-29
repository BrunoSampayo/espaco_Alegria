import { getSchedules } from '@/app/_actions'
import { columns } from '@/components/eventTable/columns'
import { DataTable } from '@/components/eventTable/data-table'
import { Schedule } from '@prisma/client'

async function getData(): Promise<Schedule[]> {
  const schedules = await getSchedules()
  return schedules
}

export default async function Page() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10 min-h-screen">
      <h1 className="text-center text-white font-bold text-2xl drop-shadow-lg">
        Sistema de Agendamento de eventos
      </h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
