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
    nomeCliente: z.string()
        .transform(name => {
            return name.trim().split(' ').map(word => {
                return word[0].toLocaleUpperCase().concat(word.substring(1))
            }).join(' ')
        }),
    numeroCliente: z.string().optional(),
    data: z.string(),
    horaInicio: z.string(),
    horaFim: z.string(),
    feriado: z.boolean(),
    touroMecanico: z.string().optional().refine(value => {
        if (!value) return true; // Permitindo valor vazio ou ausente
        const numPhotos = parseInt(value, 10); // Convertendo a string para um número
        return numPhotos >= 1; // Validando se o número de fotos é pelo menos 4
    }, { message: 'O número mínimo de horas é 1h' }),
    fotos: z.string().optional().refine(value => {
        if (!value) return true; // Permitindo valor vazio ou ausente-m 
        const numPhotos = parseInt(value, 10); // Convertendo a string para um número
        return numPhotos >= 1; // Validando se o número de fotos é pelo menos 4
    }, { message: 'O número mínimo de horas é 1h' }) ,
    garcom: z.string().optional().refine(value => {
        if (!value) return true; // Permitindo valor vazio ou ausente
        const numPhotos = parseInt(value, 10); // Convertendo a string para um número
        return numPhotos >= 4; // Validando se o número de fotos é pelo menos 4
    }, { message: 'O número mínimo de horas é 4h' }),
    dj: z.string().optional().refine(value => {
        if (!value) return true; // Permitindo valor vazio ou ausente
        const numPhotos = parseInt(value, 10); // Convertendo a string para um número
        return numPhotos >= 4; // Validando se o número de fotos é pelo menos 4
    }, { message: 'O número mínimo de horas é 4h' }),
    climatizacao: z.string().optional().refine(value => {
        if (!value) return true; // Permitindo valor vazio ou ausente
        const numPhotos = parseInt(value, 10); // Convertendo a string para um número
        return numPhotos >= 4; // Validando se o número de fotos é pelo menos 4
    }, { message: 'O número mínimo de horas é 4h' }),
    churrasqueira: z.string().optional().refine(value => {
        if (!value) return true; // Permitindo valor vazio ou ausente
        const numPhotos = parseInt(value, 10); // Convertendo a string para um número
        return numPhotos >= 4; // Validando se o número de fotos é pelo menos 4
    }, { message: 'O número mínimo de horas é 4h' }),
    telao:z.string().optional().refine(value => {
        if (!value) return true; // Permitindo valor vazio ou ausente
        const numPhotos = parseInt(value, 10); // Convertendo a string para um número
        return numPhotos >= 4; // Validando se o número de fotos é pelo menos 4
    }, { message: 'O número mínimo de horas é 4h' }),
    taxaLuz: z.string().optional().refine(value => {
        if (!value) return true; // Permitindo valor vazio ou ausente
        const numPhotos = parseInt(value, 10); // Convertendo a string para um número
        return numPhotos >= 4; // Validando se o número de fotos é pelo menos 4
    }, { message: 'O número mínimo de horas é 4h' }),
    buffet:z.string().optional(),
    valorBuffet:z.string().optional(),
    observacao: z.string().optional(),
    valorSugerido:z.string().optional(),
    valorCobrado:z.string().optional(),
    


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
                            <Label htmlFor="nomeCliente">Nome</Label>
                            <Input id="nomeCliente" placeholder="Nome do cliente" required type="text"
                            {...register('nomeCliente')}   
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="numeroCliente">Numero do celular</Label>
                            <Input id="numeroCliente" placeholder="Telefone do cliente"  type="tel"
                            {...register('numeroCliente')}   
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-10">
                        <div className="space-y-2">
                            <Label htmlFor="data">Dia</Label>
                            <Input id="data"  type="date"
                            {...register('data')}   
                            />
                        </div>
                        <div className="">  
                        <Label className="leading-none text-nowrap" htmlFor="holiday">
                                Feriado/Fim de semana
                        </Label>
                        <Input className=" w-7" id="feriado" type="checkbox"
                         {...register('feriado')} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="horaInicio">Horario de Inicio</Label>
                            <Input id="horaInicio"  type="time" 
                            {...register('horaInicio')}   
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="horaFim">Horario Fim</Label>
                            <Input id="horaFim"  type="time"
                            {...register('horaFim')}   
                            />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                       
                        <div className="flex items-center gap-2">

                            <Label className="leading-none" htmlFor="touroMecanico">
                                Touro Mecânico
                            </Label>
                            <Input className="" id="touroMecanico"  type="number"
                            {...register('touroMecanico')}   
                            />
                            {errors.touroMecanico && <span>{errors.touroMecanico.message}</span>}

                        </div>
                        <div className="flex items-center gap-2">
                            
                            <Label className="leading-none" htmlFor="fotos">
                                Cabine de Fotos
                            </Label>
                            <Input className="" id="fotos"  type="number" 
                            {...register('fotos')}
                              
                            />
                            {errors.fotos && <span>{errors.fotos.message}</span>}
                        </div>
                       
                        <div className="flex items-center gap-2">
                            
                            <Label className="leading-none" htmlFor="garcom">
                                Garçom
                            </Label>
                            <Input className="" id="garcom"  type="number" 
                            {...register('garcom')}   
                            />
                            {errors.garcom && <span>{errors.garcom.message}</span>}
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

                            <Label className="leading-none" htmlFor="climatizacao">
                                Climatização
                            </Label>
                            <Input className="" id="climatizacao"  type="number"
                            {...register('climatizacao')}   
                            />
                            {errors.climatizacao && <span>{errors.climatizacao.message}</span>}
                            
                        </div>
                        <div className="flex items-center gap-2">

                            <Label className="leading-none" htmlFor="churrasqueira">
                                Churrasqueira
                            </Label>
                            <Input className="" id="churrasqueira"  type="number" 
                            {...register('churrasqueira')}   
                            />
                            {errors.churrasqueira && <span>{errors.churrasqueira.message}</span>}

                        </div>
                        <div className="flex items-center gap-2">

                            <Label className="leading-none" htmlFor="telao">
                                Telão
                            </Label>
                            <Input className="" id="telao"  type="number" 
                            {...register('telao')}   
                            />
                            {errors.telao && <span>{errors.telao.message}</span>}

                        </div>
                        <div className="flex items-center gap-2">

                            <Label className="leading-none" htmlFor="taxaLuz">
                                Taxa de Luz
                            </Label>
                            <Input className="" id="taxaLuz"  type="number" 
                            {...register('taxaLuz')}   
                            />
                            {errors.taxaLuz && <span>{errors.taxaLuz.message}</span>}

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
                        <Label htmlFor="valorBuffet">Valor Buffet</Label>
                        <Input id="valorBuffet" placeholder="Entre com valor do buffet R$" 
                            {...register('valorBuffet')}
                        
                        />
                    </div>
                    <div className="space-y-2 ">
                        <p>Observação:</p>
                        <textarea id="observacao" placeholder="Digite aqui." className="w-full rounded-md shadow-sm border p-1 border-gray-200"
                            {...register('observacao')}
                            />
                    
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="valorSugerido">Preço sugerido Pelo sistema</Label>
                        <Input id="valorSugerido" placeholder="" disabled 
                            {...register('valorSugerido')}
                            />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="valorCobrado">Preço final cobrado</Label>
                        <Input id="valorCobrado" placeholder="Insira o Preço que sera cobrado" 
                            {...register('valorCobrado')}
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
