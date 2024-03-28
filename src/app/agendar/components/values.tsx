import prisma from "@/lib/prisma"
import dayjs from "dayjs"
import { ValuesType } from "@/types"
const getValues = async () => {
    const values = await fetch("http://localhost:3000/api/values")
    const  data:Promise<ValuesType>= await values.json()
    return data
}


export default async function Values() {
   const {values,extra} = await getValues();
    
    return (
        <div className="  grid grid-cols-1 md:grid-cols-2 gap-2 p-2 bg-white rounded-lg border border-gray-200 text-black">
            <div className="mx-auto shadow-md p-6 w-full">
                <h2 className="text-center text-xl font-semibold">Valores</h2>
                <ul className="text-sm list-disc">
                    <li className="my-1">Valor dia de semana: <strong>R$ {values?.valor_padrao.toFixed(2)}</strong> </li>
                    <li className="my-1">Valor final Semana/feriado: <strong>R$ {values?.valor_feriado.toFixed(2)}</strong> </li>
                    <li className="my-1">Touro mecânico: <strong>R$ {values?.touro_mecanico.toFixed(2)}</strong> (1h)</li>
                    <li className="my-1">Cabine de fotos: <strong>R$ {values?.fotos.toFixed(2)}</strong> (1h)</li>
                    <li className="my-1">Garçom e/ou copeira: <strong>R$ {values?.garcom.toFixed(2)}</strong> (4h)</li>
                    <li className="my-1">Dj com pista completa: <strong>R$ {values?.dj.toFixed(2)}</strong> (4h)</li>
                    <li className="my-1">Climatização: <strong>R$ {values?.climatizacao.toFixed(2)}</strong> (4h)</li>
                    <li className="my-1">Churrasqueira: <strong>R$ {values?.churrasqueira.toFixed(2)}</strong> (4h)</li>
                    <li className="my-1">Telão: <strong>R$ {values?.telao.toFixed(2)}</strong> (4h)</li>
                    <li className="my-1">Taxa de luz:<strong> R$ {values?.taxa_luz.toFixed(2)}</strong> (4h)</li>
                </ul>
                <h1 className="font-bold text-xs text-center ">Data Modificação valores normais: {dayjs(values?.data_modificacao).format('DD/MM/YYYY')}</h1>
            </div>
            <div className="mx-auto shadow-md p-6 w-full">
                <h2 className="text-center text-xl font-semibold">Horas Extras</h2>
                <ul className="text-sm list-disc">
                    <li className="my-1">Salão: <strong>R$ {extra?.salao.toFixed(2)}</strong></li>
                    <li className="my-1">Monitores: <strong>R$ {extra?.Monitores.toFixed(2)}</strong></li>
                    <li className="my-1">Garçom e/ou copeira: <strong>R$ {extra?.garcom.toFixed(2)}</strong></li>
                    <li className="my-1">Climatização: <strong>R$ {extra?.climatizacao.toFixed(2)}</strong></li>
                    <li className="my-1">Dj: <strong>R$ {extra?.dj.toFixed(2)}</strong></li>
                    <li className="my-1">Telão: <strong>R$ {extra?.telao.toFixed(2)}</strong></li>
                    
                </ul>
                <h1 className="font-bold text-xs  text-center">Data Modificação valores extra: {dayjs(extra?.data_modificacao).format('DD/MM/YYYY')}</h1>
            </div>
              
                
        </div>
    )
}