import { getSchedule } from './action'
import { EditFormComponent } from './component/EditForm'

export default async function Page({ params }: { params: { id: string } }) {
  const schedule = await getSchedule(params.id)
  if (!schedule) return
  return (
    <div className="mx-auto  max-w-3xl space-y-8 bg-slate-100 p-10 rounded-sm ">
      <EditFormComponent schedule={schedule} />
    </div>
  )
}
