
import Image from "next/image";



import { CalendarDemo } from "@/components/CalendarDemo";
import {ButtonAgend} from "@/components/ButtonAgend";


export default function Home() {


  return (
    <div  className="h-full w-full  flex flex-col items-center ">
      
      <CalendarDemo/>
      <ButtonAgend/>
      
      </div>
  );
}