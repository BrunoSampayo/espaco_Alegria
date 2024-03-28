'use client'
import { deleteSchedule } from '@/app/_actions'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Schedule } from '@prisma/client'
import { ColumnDef } from '@tanstack/react-table'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import Link from 'next/link'
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

dayjs.extend(utc)
export const columns: ColumnDef<Schedule>[] = [
  {
    accessorKey: 'nome_cliente',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Cliente
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: 'data',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Data
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const date = row.getValue('data') as string
      const formated = dayjs.utc(date).format('DD-MM-YYYY')
      return <div className="font-medium">{formated}</div>
    },
  },
  {
    accessorKey: 'hora_inicio',
    header: 'Horario',
    cell: ({ row }) => {
      const date = row.getValue('hora_inicio') as string
      const formated = dayjs.utc(date).format('HH:mm')
      return <div className="font-medium">{formated}</div>
    },
  },

  {
    id: 'actions',
    cell: ({ row }) => {
      const schedule = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem>
              <Link className="w-full" href={`/agendamento/${schedule.id}`}>
                Editar
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => deleteSchedule(schedule.id)}
              className="focus:bg-destructive focus:text-white"
            >
              Excluir agendamento
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
