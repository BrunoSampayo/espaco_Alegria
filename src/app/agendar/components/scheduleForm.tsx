
"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { addSchedule } from "@/app/_actions"
import { object, z } from "zod"
import { valideFormSchema } from "@/lib/schema"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { pricing } from "@/utils/pricing"

type FormData = z.infer<typeof valideFormSchema>

export const _formComponent = () => {

    const { handleSubmit, register, formState: { errors }, watch,setValue } = useForm<FormData>({ mode: "onBlur", resolver: zodResolver(valideFormSchema) })

    //const watchFields =watch(['touro_mecanico','fotos','garcom','dj','climatizacao','churrasqueira','telao','taxa_luz','valor_buffet','feriado'])
    const watchFields = {
        'feriado': watch('feriado'),
        'touro_mecanico': Number(watch('touro_mecanico')),
        'fotos': Number(watch('fotos')),
        'garcom': Number(watch('garcom')),
        'dj': Number(watch('dj')),
        'climatizacao': Number(watch('climatizacao')),
        'churrasqueira': Number(watch('churrasqueira')),
        'telao': Number(watch('telao')),
        'taxa_luz': Number(watch('taxa_luz')),
        'valor_buffet': Number(watch('valor_buffet'))
    }

   useEffect( () =>{
    let dados = Object.entries(watchFields)
    for(let i in dados){
        if(isNaN(Number(dados[i][1])) || dados[i][1]===undefined) return
    }
    async function fetchPrice(){
        const valor = await pricing(watchFields)
       
         
        setValue('valor_sugerido',String(valor) + " R$")   
        
    }
    fetchPrice()
   
   },[watchFields])



    async function action(data: any) {
        const result = await addSchedule(data)

    }

    return (
        <div>
            <form onSubmit={handleSubmit((data) => console.log('result', data))}  >
                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="nome_cliente">Nome</Label>
                            <Input
                                placeholder="Nome do cliente"
                                type="text"
                                {...register('nome_cliente')}
                            />
                            {errors.nome_cliente?.message && <p className="text-sm text-red-700">*{errors.nome_cliente?.message}</p>}

                        </div>
                        <div className="space-y-2">
                            <Label htmlFor=" numero_celular">Numero do celular</Label>
                            <Input
                                placeholder="Telefone do cliente"
                                type="tel"
                                {...register("numero_celular")}
                            />
                            {errors.numero_celular?.message && <p className="text-sm text-red-700">*{errors.numero_celular?.message}</p>}
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-10">
                        <div className="space-y-2">
                            <Label htmlFor="data">Dia</Label>
                            <Input
                                required type="date"
                                {...register("data")}
                            />
                            {errors.data?.message && <p className="text-sm text-red-700">*{errors.data?.message}</p>}
                        </div>
                        <div className="" >
                            <Label className="leading-none text-nowrap" htmlFor="feriado">
                                Feriado/Fim de semana
                            </Label>
                            <Input
                                type="checkbox"
                                className=" mx-16 border border-gray-400 bg-background h-7 w-7 rounded-full mt-2"
                                {...register("feriado")}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="hora_inicio">Horario de Inicio</Label>
                            <Input
                                className=" w-24"
                                required type="time"
                                {...register("hora_inicio")}

                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="quantidade_de_horas">Tempo a ser Alugado</Label>
                            <Input
                                className=" w-24"
                                required type="time"
                                defaultValue={"00:00"}
                                {...register("hora_fim")}
                            />
                        </div>
                    </div>
                    <h1 className="text-center font-bold ">Numero de Horas a serem usados por serviços</h1>

                    <div className="grid grid-cols-4 gap-4">
                        <div>
                            <div className="flex items-center mb-1 gap-2">

                                <Label className="leading-none" htmlFor="touro_mecanico">
                                    Touro Mecânico
                                </Label>

                                <Input
                                    className="w-16"
                                    type="number"
                                    defaultValue={0}
                                    {...register("touro_mecanico")}
                                />
                            </div>
                            {errors.touro_mecanico?.message && <p className="text-xs text-red-700">*{errors.touro_mecanico?.message}</p>}

                        </div>

                        <div>
                            <div className="flex items-center mb-1 gap-2">

                                <Label className="leading-none" htmlFor="fotos">
                                    Cabine de fotos
                                </Label>
                                <Input
                                    className="w-16"
                                    type="number"
                                    defaultValue={0}
                                    {...register("fotos")}

                                />
                            </div>
                            {errors.fotos?.message && <p className="text-xs text-red-700">*{errors.fotos?.message}</p>}

                        </div>

                        <div>
                            <div className="flex items-center mb-1 gap-2">

                                <Label className="leading-none" htmlFor="garcom">
                                    Garçom
                                </Label>
                                <Input
                                    className="w-16"
                                    type="number"
                                    min={0}
                                    defaultValue={0}
                                    {...register("garcom")}
                                />
                            </div>
                            {errors.garcom?.message && <p className="text-xs text-red-700">*{errors.garcom?.message}</p>}

                        </div>

                        <div>
                            <div className="flex items-center mb-1 gap-2">

                                <Label className="leading-none" htmlFor="dj">
                                    DJ
                                </Label>
                                <Input
                                    className="w-16"
                                    type="number"
                                    defaultValue={0}
                                    {...register("dj")}
                                />
                            </div>
                            {errors.dj?.message && <p className="text-xs text-red-700">*{errors.dj?.message}</p>}

                        </div>

                        <div>
                            <div className="flex items-center mb-1 gap-2">

                                <Label className="leading-none" htmlFor="climatizacao">
                                    Climatização
                                </Label>
                                <Input
                                    className="w-16"
                                    type="number"
                                    defaultValue={0}
                                    {...register("climatizacao")}
                                />
                            </div>
                            {errors.climatizacao?.message && <p className="text-xs text-red-700">*{errors.climatizacao?.message}</p>}

                        </div>

                        <div>
                            <div className="flex items-center mb-1 gap-2">

                                <Label className="leading-none" htmlFor="churrasqueira">
                                    Churrasqueira
                                </Label>
                                <Input
                                    className="w-16"
                                    type="number"
                                    defaultValue={0}
                                    {...register("churrasqueira")}
                                />
                            </div>
                            {errors.churrasqueira?.message && <p className="text-xs text-red-700">*{errors.churrasqueira?.message}</p>}
                        </div>

                        <div>
                            <div className="flex items-center mb-1 gap-2 ">

                                <Label className="leading-none" htmlFor="telao">
                                    Telão
                                </Label>
                                <Input
                                    className="w-16"
                                    type="number"
                                    defaultValue={0}
                                    {...register("telao")}
                                />

                            </div>
                            {errors.telao?.message && <p className="text-xs text-red-700">*{errors.telao?.message}</p>}


                        </div>

                        <div>
                            <div className="flex items-center mb-1 gap-2">

                                <Label className="leading-none" htmlFor="taxa_luz">
                                    Taxa de Luz
                                </Label>
                                <Input
                                    className="w-16"

                                    type="number"
                                    defaultValue={0}
                                    {...register("taxa_luz")}
                                />
                            </div>
                            {errors.taxa_luz?.message && <p className="text-xs text-red-700">*{errors.taxa_luz?.message}</p>}
                        </div>


                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="valor_buffet">Valor Buffet</Label>
                        <Input
                            placeholder="Entre com valor do buffet R$"
                            type="string"
                            defaultValue={0}
                            {...register("valor_buffet")}
                        />
                        {errors.valor_buffet?.message && <p className="text-sm text-red-700">*{errors.valor_buffet?.message}</p>}
                    </div>
                    <div className="space-y-2 ">
                        <p>Observação:</p>
                        <textarea
                            placeholder="Digite aqui."
                            className="w-full rounded-md shadow-sm border p-1 border-gray-200"
                            {...register("observacao")}
                        />
                        {errors.observacao?.message && <p className="text-sm text-red-700">*{errors.observacao?.message}</p>}

                    </div>
                    <div className="space-y-2">
                        <Label htmlFor=" valor_sugerido">Preço sugerido Pelo sistema</Label>
                        <Input
                            placeholder=""
                            type="string"
                            disabled
                            value={0}
                            {...register("valor_sugerido")}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="valor_cobrado">Preço final cobrado</Label>
                        <Input
                            placeholder="Insira o Preço que sera cobrado"
                            type="string"
                            {...register("valor_cobrado")}
                        />
                    </div>
                    <Button type="submit" >Enviar</Button>

                </div>
            </form>

        </div>
    )
};


