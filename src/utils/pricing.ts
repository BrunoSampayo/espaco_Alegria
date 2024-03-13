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

const calcularPrecoServico = (servico: string, horas: number) => {
    switch (servico) {
        case "churrasqueira":
            const precoHoraChurrasqueira = 150
            return precoHoraChurrasqueira
          
        case "climatizacao":    
            const limiteClimatizacao = 4; 
            const precoHoraClimatizacao = 140; 
            const precoHoraExtraCliamtizacao = 30; 
            if (horas <= limiteClimatizacao) {
                return precoHoraClimatizacao;
            } else {
                const horasExtrasGarcom = horas - limiteClimatizacao;
                return precoHoraClimatizacao + (horasExtrasGarcom * precoHoraExtraCliamtizacao);
            }           
          
        case "dj":
            const limitteDj = 4;
            const precoHoraDj = 600;
            const precoHoraExtraDj = 150;
            if(horas <= limitteDj) {
                return precoHoraDj;
            }else {
                const horasExtrasDj = horas - limitteDj;
                return precoHoraDj + (horasExtrasDj * precoHoraExtraDj);
            }
          
        case "fotos":
            const precoHoraFotos = 200;
            return precoHoraFotos;
          
        case "garcom":
            const limiteGarcom = 4; 
            const precoHoraGarcom = 140; 
            const precoHoraExtraGarcom = 35; 
            if (horas <= limiteGarcom) {
                return precoHoraGarcom;
            } else {
                const horasExtrasGarcom = horas - limiteGarcom;
                return precoHoraGarcom + (horasExtrasGarcom * precoHoraExtraGarcom);
            }           
          
        case "taxa_luz":
            const precoHoraTaxaLuz = 70;
            return precoHoraTaxaLuz;
          
        case "telao":
            const limiteTelao = 4;
            const precoHoraTelao = 70;
            const precoHoraExtraTelao =45;
            if(horas <= limiteTelao){
                return precoHoraTelao
            }else{
                const horasExtrasTelao = horas - limiteTelao;
                return precoHoraTelao + (horasExtrasTelao * precoHoraExtraTelao);
            }
          
        case "touro_mecanico":
            const precoHoraTouroMecanico = 120;
            return precoHoraTouroMecanico;
            
        default:
            return 0; 
    }
};

const getValues = async () => {
    const values = await fetch("http://localhost:3000/api/values", { cache: 'force-cache', next: { revalidate: 3600 } });
    const data: Promise<ValuesType> = await values.json();
    return data;
};

export const pricing = async (fields: fieldsType) => {
    const { values, extra } = await getValues();
    
    values.churrasqueira = calcularPrecoServico("churrasqueira", fields.churrasqueira);
    values.climatizacao = calcularPrecoServico("climatizacao", fields.climatizacao);
    values.dj = calcularPrecoServico("dj", fields.dj);
    values.fotos = calcularPrecoServico("fotos", fields.fotos)
    values.garcom = calcularPrecoServico("garcom", fields.garcom);
    values.taxa_luz = calcularPrecoServico("taxa_luz", fields.taxa_luz);
    values.telao = calcularPrecoServico("telao", fields.telao);
    values.touro_mecanico = calcularPrecoServico("touro_mecanico", fields.touro_mecanico);

    

    console.log(values)
}
