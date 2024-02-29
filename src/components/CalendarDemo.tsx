"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className=" h-96 ">
 <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow bg-zinc-200 bg-opacity-15  "
      
    />
    </div>
   
  )
}
