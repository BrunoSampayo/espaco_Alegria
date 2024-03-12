import prisma from "@/lib/prisma";


export async function GET (){
    const values = await prisma.value.findUnique({
        where: {
            title: "default"
        }
    })
    const extra = await prisma.extra.findUnique({
        where:{
            title:"default"
        }
    })
   console.log("fez requisição values")
   return new Response(JSON.stringify({values,extra}))


}