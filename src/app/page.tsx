
import Image from "next/image";



import { CalendarDemo } from "@/components/CalendarDemo";
import {ButtonAgend} from "@/components/ButtonAgend";


export default function Home() {


  return (
    <div  className="flex flex-col content-center items-center mt-60 ">
      
      <CalendarDemo/>
      <ButtonAgend/>
      </div>
  );
}