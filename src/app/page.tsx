
import Image from "next/image";
import {Header} from '@/components/Header';
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react";


export default function Home() {

  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <div className="flex flex-col items-center justify-between">
      <Header/>


  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"
  />

      </div>
  );
}