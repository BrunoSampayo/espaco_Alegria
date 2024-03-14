"use server"

type arrayField = [string, number | boolean];

import { ValuesType } from "@/types";
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

};


const getValues = async () => {
    const values = await fetch("http://localhost:3000/api/values", { cache: 'force-cache' });
    const data: Promise<ValuesType> = await values.json();
    return data;
};

let total = 0;
const calcularPrecoServico = async (array: arrayField) => {

    const { values, extra } = await getValues();

    switch (array[0]) {
        case "churrasqueira":
            if (Number(array[1]) > 0) {
                total += values.churrasqueira
            }

            break

        case "climatizacao":
            if (Number(array[1]) > 0) {
                if (Number(array[1]) > 4) {
                    total += values.climatizacao + (Number(array[1]) - 4) * extra.climatizacao
                }
                total += values.climatizacao
            }
            break

        case "dj":
            if (Number(array[1]) > 0) {
                if (Number(array[1]) > 4) {
                    total += values.dj + (Number(array[1]) - 4) * extra.dj
                }
                total += values.dj
            }
            break;

        case "fotos":
            if (Number(array[1]) > 0) {
                total += (Number(array[1]) * values.fotos)
            }
            break;

        case "garcom":
            if (Number(array[1]) > 0) {
                if (Number(array[1]) > 4) {
                    total += values.garcom + (Number(array[1]) - 4) * extra.garcom
                }
                total += values.garcom
            }
            break;
        case "taxa_luz":
            if (Number(array[1]) > 0) {
                total += values.taxa_luz
            }
            break;

        case "telao":
            if (Number(array[1]) > 0) {
                if (Number(array[1]) > 4) {
                    total += values.telao + (Number(array[1]) - 4) * extra.telao
                }
                total += values.telao
            }
            break;

        case "touro_mecanico":
            if (Number(array[1]) > 0) {
                total += (Number(array[1]) * values.touro_mecanico)
            }
            break;
        case "feriado":
            if (Boolean(array[1])) {
                total += values.valor_feriado
            } else {
                total += values.valor_padrao
            }

            break
    }

};



export const pricing = async (fields: fieldsType) => {

    const data = Object.entries(fields)

    await Promise.all(data.map(async (entry) => {
        if (entry[1] !== 0) {
            await calcularPrecoServico(entry);

        }
    }));
    const resultado = total;
    total = 0;
    return resultado;

}
