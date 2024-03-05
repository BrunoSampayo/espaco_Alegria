"use client"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6CjwyfLXypS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import {zodResolver} from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { valideFormSchema } from "@/lib/schema"
import {  z } from "zod"
import { useEffect } from "react"
import { useState } from "react"
import axios, {isCancel, AxiosError} from 'axios';

type TypeValideFormSchema = z.infer<typeof valideFormSchema>



export const _formComponent = () => {
    

    const {register,
        handleSubmit,
        formState:{errors}
       } = useForm<TypeValideFormSchema>({
       resolver: zodResolver(valideFormSchema),
   });
   const [outPut, setOutPut] = useState('')
   
    async function teste(data: any) {
        if (!data.valor_sugerido) {
            data.valor_sugerido = 'teste do campo'; // Valor padrão sugerido pelo banco de dados
        }
        try{  
            const response = await axios.post('/api/schedule', data, {headers: 
                {'Content-Type': 'application/json'}});
                
            console.log('Resposta da API:', response.data);
        }
        catch(error){
            console.error('Erro ao enviar requisição:', error);
        }
    }

    function createUser(data: any){
        setOutPut(JSON.stringify(data, null, 2));
        teste(data);
    }

    useEffect(()=> {     
        //passar function teste
        console.log('Rodou o effect')
    },[outPut])
    
   

    return (
        <div>
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
                        <div className="" >  
                        <Label className="leading-none text-nowrap" htmlFor="feriado">
                                Feriado/Fim de semana
                        </Label>
                        <Input type="checkbox" className=" mx-16 border border-gray-400 bg-background h-7 w-7 rounded-full mt-2" id="feriado" 
                         {...register('feriado')} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="hora_inicio">Horario de Inicio</Label>
                            <Input className=" w-24" id="hora_inicio" required type="time" 
                            {...register('hora_inicio')}   
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="quantidade_de_horas">Tempo a ser Alugado</Label>
                            <Input className=" w-24" id="hora_fim" required type="time"
                            {...register('hora_fim')}   
                            />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4">
                        <div>
                        <div className="flex items-center mb-1 gap-2">

                            <Label className="leading-none" htmlFor="touro_mecanico">
                                Touro Mecânico
                            </Label>
                            
                            <Input className="w-16" id="touro_mecanico"  type="number"
                            {...register('touro_mecanico')}   
                            /></div>   
                             {errors.touro_mecanico && <span className="text-nowrap text-xs p-1 bg-white border border-red-300 rounded-md " style={{fontSize: '0.5rem'}} >{errors.touro_mecanico.message}</span>}                 
                        
                        </div>

                        <div>
                        <div className="flex items-center mb-1 gap-2">
                            
                            <Label className="leading-none" htmlFor="fotos">
                                Cabine de fotos
                            </Label>
                            <Input className="w-16" id="fotos"  type="number" 
                            {...register('fotos')}
                              
                            /></div>
                             {errors.fotos && <span className="text-nowrap text-xs p-1 bg-white border border-red-300 rounded-md " style={{fontSize: '0.5rem'}} >{errors.fotos.message}</span>}
                        </div>

                        <div>
                        <div className="flex items-center mb-1 gap-2">
                            
                            <Label className="leading-none" htmlFor="garcom">
                                Garçom
                            </Label>
                            <Input className="w-16" id="garcom"  type="number" 
                            {...register('garcom')}   
                            /></div>
                             {errors.garcom && <span className="text-nowrap text-xs p-1 bg-white border border-red-300 rounded-md " style={{fontSize: '0.5rem'}} >{errors.garcom.message}</span>}
                        </div>
                        
                        <div>
                        <div className="flex items-center mb-1 gap-2">
                        
                            <Label className="leading-none" htmlFor="dj">
                                DJ
                            </Label>
                            <Input className="w-16" id="dj"  type="number" 
                            {...register('dj')}   
                            /></div>
                             {errors.dj && <span  className="text-xs text-nowrap p-1 bg-white border border-red-300 rounded-md "
                             style={{fontSize: '0.5rem'}}   >{errors.dj.message}</span>}

                        </div>

                        <div>
                        <div className="flex items-center mb-1 gap-2">

                            <Label className="leading-none" htmlFor="climatizacao">
                                Climatização
                            </Label>
                            <Input className="w-16" id="climatizacao"  type="number"
                            {...register('climatizacao')}   
                            /></div>
                             {errors.climatizacao && <span className="text-nowrap text-xs p-1 bg-white border border-red-300 rounded-md " style={{fontSize: '0.5rem'}} >{errors.climatizacao.message}</span>}
                            
                        </div>
                        
                        <div>
                        <div className="flex items-center mb-1 gap-2">

                            <Label className="leading-none" htmlFor="churrasqueira">
                                Churrasqueira
                            </Label>
                            <Input className="w-16" id="churrasqueira"  type="number" 
                            {...register('churrasqueira')}   
                            /></div>
                             {errors.churrasqueira && <span className="text-nowrap text-xs p-1 bg-white border border-red-300 rounded-md " style={{fontSize: '0.5rem'}} >{errors.churrasqueira.message}</span>}

                        </div>

                        <div>
                        <div className="flex items-center mb-1 gap-2 ">

                            <Label className="leading-none" htmlFor="telao">
                                Telão
                            </Label>
                            <Input className="w-16" id="telao"  type="number" 
                            {...register('telao')}   
                            /></div>
                             {errors.telao && <span className="text-nowrap text-xs p-1 bg-white border border-red-300 rounded-md " style={{fontSize: '0.5rem'}} >{errors.telao.message}</span>}

                        </div>

                        <div>
                        <div className="flex items-center mb-1 gap-2">

                            <Label className="leading-none" htmlFor="taxa_luz">
                                Taxa de Luz
                            </Label>
                            <Input className="w-16" id="taxa_luz"  type="number" 
                            {...register('taxa_luz')}   
                            /></div>
                             {errors.taxa_luz && <span className="text-nowrap text-xs p-1 bg-white border border-red-300 rounded-md " style={{fontSize: '0.5rem'}} >{errors.taxa_luz.message}</span>}

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
                        <Input id="valor_buffet" placeholder="Entre com valor do buffet R$" type="string"
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
                        <Input id=" valor_sugerido" placeholder=""  type="string"
                            {...register('valor_sugerido', { required: false })}
                            />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="valor_cobrado">Preço final cobrado</Label>
                        <Input id="valor_cobrado" placeholder="Insira o Preço que sera cobrado" type="string"
                            {...register('valor_cobrado')}
                            />
                    </div>
                    <Button  >Enviar</Button>
                </div>
                </form>
                <pre className="text-wrap">{outPut}</pre>
                </div>   
    )
};

export function UserIcon(props: any) {
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
