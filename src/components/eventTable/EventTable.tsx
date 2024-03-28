import { getSchedules } from '@/app/_actions'
import { columns } from '@/components/eventTable/columns'
import { DataTable } from '@/components/eventTable/data-table'
import { Schedule } from '@prisma/client'

async function getData(): Promise<Schedule[]> {
  const schedules = await getSchedules()
  return schedules
}

export default async function EventTable() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
