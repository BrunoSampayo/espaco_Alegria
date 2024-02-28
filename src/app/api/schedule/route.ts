export async function GET() {
    return Response.json({ok:true})
    
        
    
}

export async function POST(req:Request){
    const data = await req.json()
    console.log()
    return Response.json(data)
}


