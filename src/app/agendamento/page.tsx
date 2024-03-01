"use client"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6CjwyfLXypS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"

import { useState } from "react"
import { TypeOf, z } from "zod"
import {zodResolver} from "@hookform/resolvers/zod"

const valideFormSchema = z.object({
    name: z.string()
        .transform(name => {
            return name.trim().split(' ').map(word => {
                return word[0].toLocaleUpperCase().concat(word.substring(1))
            }).join(' ')
        }),
    phone: z.string().optional(),
    date: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    holiday: z.boolean().optional(),
    mechanicalBull: z.string().optional().refine(value => {
        if (!value) return true; // Permitindo valor vazio ou ausente
        const numPhotos = parseInt(value, 10); // Convertendo a string para um número
        return numPhotos >= 1; // Validando se o número de fotos é pelo menos 4
    }, { message: 'O número mínimo de horas é 1h' }),
    photos: z.string().optional().refine(value => {
        if (!value) return true; // Permitindo valor vazio ou ausente-m 
        const numPhotos = parseInt(value, 10); // Convertendo a string para um número
        return numPhotos >= 1; // Validando se o número de fotos é pelo menos 4
    }, { message: 'O número mínimo de horas é 1h' }) ,
    waiter: z.string().optional().refine(value => {
        if (!value) return true; // Permitindo valor vazio ou ausente
        const numPhotos = parseInt(value, 10); // Convertendo a string para um número
        return numPhotos >= 4; // Validando se o número de fotos é pelo menos 4
    }, { message: 'O número mínimo de horas é 4h' }),
    dj: z.string().optional().refine(value => {
        if (!value) return true; // Permitindo valor vazio ou ausente
        const numPhotos = parseInt(value, 10); // Convertendo a string para um número
        return numPhotos >= 4; // Validando se o número de fotos é pelo menos 4
    }, { message: 'O número mínimo de horas é 4h' }),
    airConditioning: z.string().optional().refine(value => {
        if (!value) return true; // Permitindo valor vazio ou ausente
        const numPhotos = parseInt(value, 10); // Convertendo a string para um número
        return numPhotos >= 4; // Validando se o número de fotos é pelo menos 4
    }, { message: 'O número mínimo de horas é 4h' }),
    barbecueGrill: z.string().optional().refine(value => {
        if (!value) return true; // Permitindo valor vazio ou ausente
        const numPhotos = parseInt(value, 10); // Convertendo a string para um número
        return numPhotos >= 4; // Validando se o número de fotos é pelo menos 4
    }, { message: 'O número mínimo de horas é 4h' }),
    bigScreen:z.string().optional().refine(value => {
        if (!value) return true; // Permitindo valor vazio ou ausente
        const numPhotos = parseInt(value, 10); // Convertendo a string para um número
        return numPhotos >= 4; // Validando se o número de fotos é pelo menos 4
    }, { message: 'O número mínimo de horas é 4h' }),
    electricityFee: z.string().optional().refine(value => {
        if (!value) return true; // Permitindo valor vazio ou ausente
        const numPhotos = parseInt(value, 10); // Convertendo a string para um número
        return numPhotos >= 4; // Validando se o número de fotos é pelo menos 4
    }, { message: 'O número mínimo de horas é 4h' }),
})

type TypeValideFormSchema = z.infer<typeof valideFormSchema>

export default function Component() {
    const [outPut, setOutPut] = useState('')
    const {register,
         handleSubmit,
         formState:{errors}
        } = useForm<TypeValideFormSchema>({
        resolver: zodResolver(valideFormSchema),
    });
    

    function createUser(data: any){
        setOutPut(JSON.stringify(data,null,2));
    }


    return (
        <div className="h-\[calc\(100\%\-8rem\)\] ">
            <div  className="mx-auto  max-w-3xl space-y-8 bg-slate-100 p-10 rounded-sm ">
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <UserIcon className="h-6 w-6" />
                        <div>Reserva</div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Entre com as informações da Reserva.</p>
                </div>
                <form  onSubmit={handleSubmit(createUser)}>
                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Nome</Label>
                            <Input id="name" placeholder="Nome do cliente" required type="text"
                            {...register('name')}   
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Numero do celular</Label>
                            <Input id="phone" placeholder="Telefone do cliente"  type="tel"
                            {...register('phone')}   
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-10">
                        <div className="space-y-2">
                            <Label htmlFor="date">Dia</Label>
                            <Input id="date"  type="date"
                            {...register('date')}   
                            />
                        </div>
                        <div className="">  
                        <Label className="leading-none text-nowrap" htmlFor="holiday">
                                Feriado/Fim de semana
                        </Label>
                        <Input className=" w-7" id="holiday" type="checkbox" {...register('holiday')} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="startTime">Horario de Inicio</Label>
                            <Input id="startTime"  type="time" 
                            {...register('startTime')}   
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="endTime">Horario Fim</Label>
                            <Input id="endTime"  type="time"
                            {...register('endTime')}   
                            />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                       
                        <div className="flex items-center gap-2">

                            <Label className="leading-none" htmlFor="mechanicalBull">
                                Touro Mecânico
                            </Label>
                            <Input className="" id="mechanicalBull"  type="number"
                            {...register('mechanicalBull')}   
                            />
                            {errors.mechanicalBull && <span>{errors.mechanicalBull.message}</span>}

                        </div>
                        <div className="flex items-center gap-2">
                            
                            <Label className="leading-none" htmlFor="photos">
                                Cabine de Fotos
                            </Label>
                            <Input className="" id="photos"  type="number" 
                            {...register('photos')}
                              
                            />
                            {errors.photos && <span>{errors.photos.message}</span>}
                        </div>
                       
                        <div className="flex items-center gap-2">
                            
                            <Label className="leading-none" htmlFor="waiter">
                                Garçom
                            </Label>
                            <Input className="" id="waiter"  type="number" 
                            {...register('waiter')}   
                            />
                            {errors.waiter && <span>{errors.waiter.message}</span>}
                        </div>
                        <div className="flex items-center gap-2">
                        
                            <Label className="leading-none" htmlFor="dj">
                                DJ
                            </Label>
                            <Input className="" id="dj"  type="number" 
                            {...register('dj')}   
                            />
                            {errors.dj && <span>{errors.dj.message}</span>}

                        </div>
                        <div className="flex items-center gap-2">

                            <Label className="leading-none" htmlFor="airConditioning">
                                Climatização
                            </Label>
                            <Input className="" id="airConditioning"  type="number"
                            {...register('airConditioning')}   
                            />
                            {errors.airConditioning && <span>{errors.airConditioning.message}</span>}
                            
                        </div>
                        <div className="flex items-center gap-2">

                            <Label className="leading-none" htmlFor="barbecueGrill">
                                Churrasqueira
                            </Label>
                            <Input className="" id="barbecueGrill"  type="number" 
                            {...register('barbecueGrill')}   
                            />
                            {errors.barbecueGrill && <span>{errors.barbecueGrill.message}</span>}

                        </div>
                        <div className="flex items-center gap-2">

                            <Label className="leading-none" htmlFor="bigScreen">
                                Telão
                            </Label>
                            <Input className="" id="bigScreen"  type="number" 
                            {...register('bigScreen')}   
                            />
                            {errors.bigScreen && <span>{errors.bigScreen.message}</span>}

                        </div>
                        <div className="flex items-center gap-2">

                            <Label className="leading-none" htmlFor="electricityFee">
                                Taxa de Luz
                            </Label>
                            <Input className="" id="electricityFee"  type="number" 
                            {...register('electricityFee')}   
                            />
                            {errors.electricityFee && <span>{errors.electricityFee.message}</span>}

                        </div>
                     
                        
                    </div>

                    <div className="  grid grid-cols-2 gap-2 bg-white rounded-lg border border-gray-200 text-black">
                            <div className="mx-auto">
                                <h2 className="text-center text-xl font-semibold">Valores</h2>
                                <ul className="text-sm list-disc">
                                    <li className="my-1">Touro mecânico: <strong>R$ 120,00</strong> (1h)</li>
                                    <li className="my-1">Cabine de fotos: <strong>R$ 200,00</strong> (1h)</li>
                                    <li className="my-1">Garçom e/ou copeira: <strong>R$ 140,00</strong> (4h)</li>
                                    <li className="my-1">Dj com pista completa: <strong>R$ 600,00</strong> (4h)</li>
                                    <li className="my-1">Climatização: <strong>R$ 120,00</strong> (4h)</li>
                                    <li className="my-1">Churrasqueira: <strong>R$ 150,00</strong> (4h)</li>
                                    <li className="my-1">Telão: <strong>R$ 180,00</strong> (4h)</li>
                                    <li className="my-1">Taxa de luz:<strong> R$ 70,00</strong> (4h)</li>
                                </ul>
                            </div>    
                            <div className="mx-auto">
                                <h2 className="text-center text-xl font-semibold">Horas Extras</h2>
                                <ul className="text-sm list-disc">
                                    <li className="my-1">Salão: <strong>R$ 180,00</strong></li>
                                    <li className="my-1">Monitores: <strong>R$ 25,00</strong></li>
                                    <li className="my-1">Garçom e/ou copeira: <strong>R$ 35,00</strong></li>
                                    <li className="my-1">Climatização: <strong>R$ 30,00</strong></li>
                                    <li className="my-1">Dj: <strong>R$ 150,00</strong></li>
                                    <li className="my-1">Telão: <strong>R$ 45,00</strong></li>
                                </ul>
                                </div> 
                        </div>
                       
                    
                    <div className="space-y-2">
                        <Label htmlFor="buffetPrice">Valor Buffet</Label>
                        <Input id="buffetPrice" placeholder="Entre com valor do buffet R$" 
                            
                        />
                    </div>
                    <div className="space-y-2 ">
                        <p>Observação:</p>
                        <textarea placeholder="Digite aqui." className="w-full rounded-md shadow-sm border p-1 border-gray-200"/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="suggestedPrice">Preço sugerido Pelo sistema</Label>
                        <Input id="suggestedPrice" placeholder="" disabled 
                          
                            />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="chargedPrice">Preço final cobrado</Label>
                        <Input id="chargedPrice" placeholder="Insira o Preço que sera cobrado" 
                            
                            />
                    </div>
                    <Button  >Enviar</Button>
                </div>
                </form>
                <pre>{outPut}</pre>
            </div>
        </div>
    )
}

function UserIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}
