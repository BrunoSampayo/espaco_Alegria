
import Image from "next/image";


import { useState } from "react";
import { CalendarDemo } from "@/components/CalendarDemo";


export default function Home() {


  return (
    <div className="flex flex-col items-center justify-between">
      
      <CalendarDemo/>

      </div>
  );
}