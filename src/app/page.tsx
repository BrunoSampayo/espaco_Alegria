
import { CalendarDemo } from "@/components/layout/CalendarDemo";
import { ButtonAgend } from "@/components/layout/button";
import { Button } from "@/components/ui/button";
import Link from "next/link";





export default function Home() {


  return (
    <div className=" flex flex-col  items-center " style={{ height: 'calc(100vh - 144px' }} >
      <CalendarDemo />
      <div className="flex gap-20 mt-10">
        <Button asChild className=" bg-opacity-85 hover:bg-gray-600 w-32 p-6 font-bold text-xl">
          <Link href={"/agendar"}>Agendar</Link>
        </Button>
        <Button asChild className="  hover:bg-gray-600 w-32 p-6 font-bold text-xl">
          <Link href={"/lucro"}>Lucro</Link>
        </Button>

      </div>


    </div>
  );
}