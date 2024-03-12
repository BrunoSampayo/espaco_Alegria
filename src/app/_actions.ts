
"use server"
import { ZodError, ZodFormattedError } from "zod"
import { valideFormSchema } from "@/lib/schema"
import axios from "axios"


export async function addSchedule(form: FormData) {
    const formData = Object.fromEntries(form.entries())
    
    const parseData = valideFormSchema.safeParse(formData)
    
    if (!parseData.success) {
        return { error: parseData.error.format() }
    }
    console.log(parseData)

    try {
        const response = await axios.post('http://localhost:3000/api/schedule',parseData.data , {
            headers:
                { 'Content-Type': 'application/json' }
        });
       
       
        
        console.log('Resposta da API:', response.data);
    }
    catch (error) {
       
   
        if (axios.isAxiosError(error)) {
            console.error('Erro ao enviar requisição:' ,error.response?.data);
            
            if (error.response) {
              
                throw new Error(error.response.data.error)
               
            }

        } else {
            console.log(error)
        }

    }
}



