
import { ValuesType } from "@/types"


type fieldsType = {
    churrasqueira: number,
    climatizacao: number,
    dj: number,
    feriado: boolean,
    fotos: number,
    garcom: number,
    taxa_luz: number,
    telao: number,
    touro_mecanico: number,
    valor_buffet: number
}


const getValues = async () => {
    const values = await fetch("http://localhost:3000/api/values", { cache: 'force-cache', next: { revalidate: 3600 } })
    const data: Promise<ValuesType> = await values.json()
    return data
}


export const pricing = async (fields:fieldsType) => {

    const { values, extra } = await getValues()
    






}