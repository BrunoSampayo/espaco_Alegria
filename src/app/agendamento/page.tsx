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
import { useEffect } from "react"
import { useState } from "react"
import { TypeOf, z } from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { valideFormSchema } from "@/lib/schema"
import axios, {isCancel, AxiosError} from 'axios';


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
        
        const dataValue =  setOutPut(JSON.stringify(data,null,2));
    
    }
    useEffect(()=>{
        async function teste() {
            const response = await axios.post('/api/schedule', outPut,{headers: {
                'Content-Type': 'application/json'
            }});
            return response
        } 
        const valorData = teste()
        
        console.log(valorData)
    
    },[outPut]);
    
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
                            <Label htmlFor="nome_cliente">Nome</Label>
                            <Input id="nome_cliente" placeholder="Nome do cliente" required type="text"
                            {...register('nome_cliente')}   
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor=" numero_celular">Numero do celular</Label>
                            <Input id=" numero_celular" placeholder="Telefone do cliente"  type="tel"
                            {...register('numero_celular')}   
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-10">
                        <div className="space-y-2">
                            <Label htmlFor="data">Dia</Label>
                            <Input id="data" required type="date"
                            {...register('data')}   
                            />
                        </div>
                        <div className="">  
                        <Label className="leading-none text-nowrap" htmlFor="feriado">
                                Feriado/Fim de semana
                        </Label>
                        <Input className=" w-7" id="feriado" type="checkbox"
                         {...register('feriado')} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="hora_inicio">Horario de Inicio</Label>
                            <Input id="hora_inicio" required type="time" 
                            {...register('hora_inicio')}   
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="hora_fim">Horario Fim</Label>
                            <Input id="hora_fim" required type="time"
                            {...register('hora_fim')}   
                            />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                        <div className="flex items-center mb-1 gap-2">

                            <Label className="leading-none" htmlFor="touro_mecanico">
                                Touro Mecânico
                            </Label>
                            
                            <Input className="" id="touro_mecanico"  type="number"
                            {...register('touro_mecanico')}   
                            /></div>   
                            {errors.touro_mecanico && <span className=" text-xs p-1 bg-white border border-red-300 rounded-md ">{errors.touro_mecanico.message}</span>}                 
                        
                        </div>

                        <div>
                        <div className="flex items-center mb-1 gap-2">
                            
                            <Label className="leading-none" htmlFor="fotos">
                                Cabine de fotos
                            </Label>
                            <Input className="" id="fotos"  type="number" 
                            {...register('fotos')}
                              
                            /></div>
                            {errors.fotos && <span className=" text-xs p-1 bg-white border border-red-300 rounded-md ">{errors.fotos.message}</span>}
                        </div>

                        <div>
                        <div className="flex items-center mb-1 gap-2">
                            
                            <Label className="leading-none" htmlFor="garcom">
                                Garçom
                            </Label>
                            <Input className="" id="garcom"  type="number" 
                            {...register('garcom')}   
                            /></div>
                            {errors.garcom && <span className=" text-xs p-1 bg-white border border-red-300 rounded-md ">{errors.garcom.message}</span>}
                        </div>
                        
                        <div>
                        <div className="flex items-center mb-1 gap-2">
                        
                            <Label className="leading-none" htmlFor="dj">
                                DJ
                            </Label>
                            <Input className="" id="dj"  type="number" 
                            {...register('dj')}   
                            /></div>
                            {errors.dj && <span className=" text-xs p-1 bg-white border border-red-300 rounded-md ">{errors.dj.message}</span>}

                        </div>

                        <div>
                        <div className="flex items-center mb-1 gap-2">

                            <Label className="leading-none" htmlFor="climatizacao">
                                Climatização
                            </Label>
                            <Input className="" id="climatizacao"  type="number"
                            {...register('climatizacao')}   
                            /></div>
                            {errors.climatizacao && <span className=" text-xs p-1 bg-white border border-red-300 rounded-md ">{errors.climatizacao.message}</span>}
                            
                        </div>
                        
                        <div>
                        <div className="flex items-center mb-1 gap-2">

                            <Label className="leading-none" htmlFor="churrasqueira">
                                Churrasqueira
                            </Label>
                            <Input className="" id="churrasqueira"  type="number" 
                            {...register('churrasqueira')}   
                            /></div>
                            {errors.churrasqueira && <span className=" text-xs p-1 bg-white border border-red-300 rounded-md ">{errors.churrasqueira.message}</span>}

                        </div>

                        <div>
                        <div className="flex items-center mb-1 gap-2 ">

                            <Label className="leading-none" htmlFor="telao">
                                Telão
                            </Label>
                            <Input className="" id="telao"  type="number" 
                            {...register('telao')}   
                            /></div>
                            {errors.telao && <span className=" text-xs p-1 bg-white border border-red-300 rounded-md ">{errors.telao.message}</span>}

                        </div>

                        <div>
                        <div className="flex items-center mb-1 gap-2">

                            <Label className="leading-none" htmlFor="taxa_luz">
                                Taxa de Luz
                            </Label>
                            <Input className="" id="taxa_luz"  type="number" 
                            {...register('taxa_luz')}   
                            /></div>
                            {errors.taxa_luz && <span className=" text-xs p-1 bg-white border border-red-300 rounded-md ">{errors.taxa_luz.message}</span>}

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
                        <Label htmlFor="valor_buffet">Valor Buffet</Label>
                        <Input id="valor_buffet" placeholder="Entre com valor do buffet R$" 
                            {...register('valor_buffet')}
                        
                        />
                    </div>
                    <div className="space-y-2 ">
                        <p>Observação:</p>
                        <textarea id="observacao" placeholder="Digite aqui." className="w-full rounded-md shadow-sm border p-1 border-gray-200"
                            {...register('observacao')}
                            />
                    
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor=" valor_sugerido">Preço sugerido Pelo sistema</Label>
                        <Input id=" valor_sugerido" placeholder="" disabled 
                            {...register('valor_sugerido')}
                            />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="valor_cobrado">Preço final cobrado</Label>
                        <Input id="valor_cobrado" placeholder="Insira o Preço que sera cobrado" 
                            {...register('valor_cobrado')}
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
