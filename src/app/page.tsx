
import Image from "next/image";



import { CalendarDemo } from "@/components/CalendarDemo";
import {ButtonAgend} from "@/components/ButtonAgend";
import { DatePickerDemo} from "@/components/FormCalender";



export default function Home() {


  return (
    <div  className=" flex flex-col  items-center " style={{height: 'calc(100vh - 144px'}} > 
      <CalendarDemo/>
      <ButtonAgend/>
 
    </div>
  );
}