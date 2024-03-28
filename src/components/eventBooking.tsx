'use client'
import Link from 'next/link'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table'
import { CardContent, Card } from '@/components/ui/card'
import { PencilIcon } from 'lucide-react'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { getSchedules } from '@/app/_actions'
import { Label } from '@radix-ui/react-label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Schedule } from '@prisma/client'
import { useEffect, useState } from 'react'
dayjs.extend(utc)

export function EventList() {
  const [schedules, setSchedules] = useState<Schedule[]>([])
  useEffect(() => {
    const getSchedule = async () => {
      const schedules = await getSchedules()
      setSchedules(schedules)
    }
    getSchedule()
  }, [])

  const handleFormSubmit = async (form: FormData) => {
    if (!form.get('mes')) {
      const schedules = await getSchedules()
      setSchedules(schedules)
    } else {
      const schedules = await getSchedules(form)
      setSchedules(schedules)
    }
  }
  return (
    <div className="grid gap-4 md:gap-8 container">
      <div className="flex items-center gap-4">
        <form action={handleFormSubmit} className="flex gap-2 items-center">
          <Label className="font-bold text-primary-foreground"> Mes</Label>
          <Input name="mes" type="month" />
          <Button variant="secondary" type="submit">
            Pesquisar
          </Button>
        </form>
      </div>
      <Card>
        <CardContent className="overflow-y-scroll h-[650px] ">
          <Table className="">
            <TableHeader className="">
              <TableRow className="">
                <TableHead className="w-1/4">Cliente</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Horario</TableHead>
                <TableHead>Editar</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schedules.length <= 0 && (
                <span className="font-bold text-xl">Sem Agendamentos</span>
              )}
              {schedules.map((item) => (
                <TableRow
                  key={item.id}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <TableCell className="font-semibold">
                    {item.nome_cliente}
                  </TableCell>
                  <TableCell>
                    {dayjs.utc(item.data).format('DD-MM-YYYY')}
                  </TableCell>
                  <TableCell>
                    {dayjs.utc(item.hora_inicio).format('HH:mm')}
                  </TableCell>
                  <TableCell>
                    <Link
                      href={`agendamento/${item.id}`}
                      className=" block m-auto   "
                    >
                      <PencilIcon className="size-5 ml-3 hover:bg-slate-100/80 rounded-sm  " />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
