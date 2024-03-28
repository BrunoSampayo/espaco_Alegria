'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'
import { z } from 'zod'
import { valideFormSchema } from '@/lib/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { pricing } from '@/utils/pricing'
import { Schedule } from '@prisma/client'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { editSchedule } from '../action'
import { toast } from '@/components/ui/use-toast'

type FormData = z.infer<typeof valideFormSchema>

export const EditFormComponent = ({ schedule }: { schedule: Schedule }) => {
  dayjs.extend(utc)
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    watch,
    setValue,
  } = useForm<FormData>({
    mode: 'onBlur',
    resolver: zodResolver(valideFormSchema),
  })

  const watchFields = {
    feriado: watch('feriado'),
    touro_mecanico: Number(watch('touro_mecanico')),
    fotos: Number(watch('fotos')),
    garcom: Number(watch('garcom')),
    dj: Number(watch('dj')),
    climatizacao: Number(watch('climatizacao')),
    churrasqueira: Number(watch('churrasqueira')),
    telao: Number(watch('telao')),
    taxa_luz: Number(watch('taxa_luz')),
    valor_buffet: Number(watch('valor_buffet')),
  }

  useEffect(() => {
    const dados = Object.entries(watchFields)
    for (const i in dados) {
      if (isNaN(Number(dados[i][1])) || dados[i][1] === undefined) return
    }
    async function fetchPrice() {
      const valor = await pricing(watchFields)
      setValue('valor_sugerido', String(valor))
      setValue('valor_cobrado', String(valor))
    }
    fetchPrice()
  }, [watchFields])

  async function action(data: FormData) {
    const edited = await editSchedule(schedule.id, data)

    if (edited.id) {
      return toast({
        title: 'Agendamento Editado',
        variant: 'default',
        description: (
          <>
            <span className="block">id:{edited.id} </span>
            <span className="block">nome: {edited.nome_cliente} </span>
          </>
        ),
      })
    } else {
      return toast({
        title: 'Agendamento Editado',
        variant: 'destructive',
        description: (
          <>
            <span className="block">erro:{edited.error} </span>
          </>
        ),
      })
    }
  }

  return (
    <div>
      <h1 className="text-center mb-8 font-bold ">
        Editar Agendamento de {schedule.nome_cliente}
      </h1>
      <form onSubmit={handleSubmit((data) => action(data))}>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="nome_cliente">Nome</Label>
              <Input
                placeholder="Nome do cliente"
                type="text"
                {...register('nome_cliente')}
                defaultValue={schedule.nome_cliente}
              />
              {errors.nome_cliente?.message && (
                <p className="text-sm text-red-700">
                  *{errors.nome_cliente?.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor=" numero_celular">Numero do celular</Label>
              <Input
                placeholder="Telefone do cliente"
                type="tel"
                {...register('numero_celular')}
                defaultValue={schedule.numero_celular}
              />
              {errors.numero_celular?.message && (
                <p className="text-sm text-red-700">
                  *{errors.numero_celular?.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 justify-center items-center md:grid-cols-4 gap-10">
            <div className="space-y-2">
              <Label htmlFor="data">Dia</Label>
              <Input
                required
                type="date"
                defaultValue={dayjs.utc(schedule.data).format('YYYY-MM-DD')}
                {...register('data')}
              />
              {errors.data?.message && (
                <p className="text-sm text-red-700">*{errors.data?.message}</p>
              )}
            </div>
            <div className="">
              <Label className="leading-none text-nowrap" htmlFor="feriado">
                Feriado/Fim de semana
              </Label>
              <Input
                type="checkbox"
                defaultChecked={schedule.feriado}
                className=" mx-16 border border-gray-400 bg-background h-7 w-7 rounded-full mt-2"
                {...register('feriado')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hora_inicio">Horario de Inicio</Label>
              <Input
                className=" w-24"
                required
                type="time"
                {...register('hora_inicio')}
                defaultValue={dayjs.utc(schedule.hora_inicio).format('HH:mm')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantidade_de_horas">Tempo a ser Alugado</Label>
              <Input
                className=" w-24"
                required
                type="time"
                defaultValue={dayjs
                  .utc(schedule.hora_fim)
                  .subtract(dayjs.utc(schedule.hora_inicio).get('hour'), 'hour')
                  .format('HH:mm')}
                {...register('hora_fim')}
              />
            </div>
          </div>
          <h1 className="text-center font-bold ">
            Numero de Horas a serem usados por serviços
          </h1>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
            <div>
              <div className="flex items-center mb-1 gap-2 justify-center">
                <Label
                  className="leading-none w-1/3 md:w-full"
                  htmlFor="touro_mecanico"
                >
                  Touro Mecânico
                </Label>

                <Input
                  className="w-16"
                  type="number"
                  min={0}
                  defaultValue={schedule.touro_mecanico}
                  {...register('touro_mecanico')}
                />
              </div>
              {errors.touro_mecanico?.message && (
                <p className="text-xs text-red-700">
                  *{errors.touro_mecanico?.message}
                </p>
              )}
            </div>

            <div>
              <div className="flex items-center mb-1 gap-2 justify-center">
                <Label className="leading-none w-1/3 md:w-full" htmlFor="fotos">
                  Cabine de fotos
                </Label>
                <Input
                  className="w-16"
                  type="number"
                  min={0}
                  defaultValue={schedule.fotos}
                  {...register('fotos')}
                />
              </div>
              {errors.fotos?.message && (
                <p className="text-xs text-red-700">*{errors.fotos?.message}</p>
              )}
            </div>

            <div>
              <div className="flex items-center mb-1 gap-2  justify-center">
                <Label
                  className="leading-none w-1/3 md:w-full"
                  htmlFor="garcom"
                >
                  Garçom
                </Label>
                <Input
                  className="w-16"
                  type="number"
                  min={0}
                  defaultValue={schedule.garcom}
                  {...register('garcom')}
                />
              </div>
              {errors.garcom?.message && (
                <p className="text-xs text-red-700">
                  *{errors.garcom?.message}
                </p>
              )}
            </div>

            <div>
              <div className="flex items-center mb-1 gap-2 justify-center">
                <Label className="leading-none w-1/3 md:w-full" htmlFor="dj">
                  DJ
                </Label>
                <Input
                  className="w-16"
                  type="number"
                  min={0}
                  defaultValue={schedule.dj}
                  {...register('dj')}
                />
              </div>
              {errors.dj?.message && (
                <p className="text-xs text-red-700">*{errors.dj?.message}</p>
              )}
            </div>

            <div>
              <div className="flex items-center mb-1 gap-2 justify-center">
                <Label
                  className="leading-none w-1/3 md:w-full"
                  htmlFor="climatizacao"
                >
                  Climatização
                </Label>
                <Input
                  className="w-16"
                  type="number"
                  min={0}
                  defaultValue={schedule.climatizacao}
                  {...register('climatizacao')}
                />
              </div>
              {errors.climatizacao?.message && (
                <p className="text-xs text-red-700">
                  *{errors.climatizacao?.message}
                </p>
              )}
            </div>

            <div>
              <div className="flex items-center mb-1 gap-2 justify-center">
                <Label
                  className="leading-none w-1/3 md:w-full"
                  htmlFor="churrasqueira"
                >
                  Churrasqueira
                </Label>
                <Input
                  className="w-16"
                  type="number"
                  min={0}
                  defaultValue={schedule.churrasqueira}
                  {...register('churrasqueira')}
                />
              </div>
              {errors.churrasqueira?.message && (
                <p className="text-xs text-red-700">
                  *{errors.churrasqueira?.message}
                </p>
              )}
            </div>

            <div>
              <div className="flex items-center mb-1 gap-2 justify-center ">
                <Label className="leading-none w-1/3 md:w-full" htmlFor="telao">
                  Telão
                </Label>
                <Input
                  className="w-16"
                  type="number"
                  min={0}
                  defaultValue={schedule.telao}
                  {...register('telao')}
                />
              </div>
              {errors.telao?.message && (
                <p className="text-xs text-red-700">*{errors.telao?.message}</p>
              )}
            </div>

            <div>
              <div className="flex items-center mb-1 gap-2 justify-center">
                <Label
                  className="leading-none w-1/3 md:w-full"
                  htmlFor="taxa_luz"
                >
                  Taxa de Luz
                </Label>
                <Input
                  className="w-16"
                  type="number"
                  min={0}
                  defaultValue={schedule.taxa_luz}
                  {...register('taxa_luz')}
                />
              </div>
              {errors.taxa_luz?.message && (
                <p className="text-xs text-red-700">
                  *{errors.taxa_luz?.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="valor_buffet">Valor Buffet R$</Label>
            <Input
              placeholder="Entre com valor do buffet R$"
              type="number"
              min={0}
              className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              defaultValue={schedule.valor_buffet}
              {...register('valor_buffet')}
            />
            {errors.valor_buffet?.message && (
              <p className="text-sm text-red-700">
                *{errors.valor_buffet?.message}
              </p>
            )}
          </div>
          <div className="space-y-2 ">
            <p>Observação:</p>
            <textarea
              placeholder="Digite aqui."
              className="w-full rounded-md shadow-sm border p-1 border-gray-200"
              {...register('observacao')}
            />
            {errors.observacao?.message && (
              <p className="text-sm text-red-700">
                *{errors.observacao?.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor=" valor_sugerido">
              Preço sugerido Pelo sistema R$
            </Label>
            <Input
              placeholder=""
              type="number"
              min={0}
              disabled
              defaultValue={schedule.observacao}
              {...register('valor_sugerido')}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="valor_cobrado">Preço final cobrado</Label>
            <Input
              placeholder="Insira o Preço que sera cobrado"
              min={0}
              type="number"
              {...register('valor_cobrado')}
            />
          </div>
          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? 'Enviando' : 'Enviar'}
          </Button>
        </div>
      </form>
    </div>
  )
}
