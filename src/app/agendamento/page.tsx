/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6CjwyfLXypS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"

export default function Component() {

    const {handleSubmit, register} = useForm();


    return (
        <div className="h-\[calc\(100\%\-8rem\)\]">
            <div className="mx-auto  max-w-3xl space-y-8 bg-slate-100 p-10 rounded-sm">
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <UserIcon className="h-6 w-6" />
                        <div>Reserva</div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Entre com as informações da Reserva.</p>
                </div>
                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Nome</Label>
                            <Input id="name" placeholder="Nome do cliente" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Numero do celular</Label>
                            <Input id="phone" placeholder="Telefone do cliente" required type="tel" />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="date">Dia</Label>
                            <Input id="date" required type="date" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="start-time">Horario de Inicio</Label>
                            <Input id="start-time" required type="time" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="end-time">Horario Fim</Label>
                            <Input id="end-time" required type="time" />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex items-center gap-2">
                            
                            <Label className="leading-none" htmlFor="holiday">
                                Feriado
                            </Label>
                            <Input className="" id="holiday" required type="number" />
                        </div>
                        <div className="flex items-center gap-2">

                            <Label className="leading-none" htmlFor="mechanical-bull">
                                Touro Mecânico
                            </Label>
                            <Input className="" id="mechanical-bull" required type="number" />
                        </div>
                        <div className="flex items-center gap-2">
                            
                            <Label className="leading-none" htmlFor="photos">
                                Cabine de Fotos
                            </Label>
                            <Input className="" id="photos" required type="number" />

                        </div>
                       
                        <div className="flex items-center gap-2">
                            
                            <Label className="leading-none" htmlFor="waiter">
                                Garçom
                            </Label>
                            <Input className="" id="waiter" required type="number" />

                        </div>
                        <div className="flex items-center gap-2">
                        
                            <Label className="leading-none" htmlFor="dj">
                                DJ
                            </Label>
                            <Input className="" id="dj" required type="number" />

                        </div>
                        <div className="flex items-center gap-2">

                            <Label className="leading-none" htmlFor="air-conditioning">
                                Climatização
                            </Label>
                            <Input className="" id="air-conditioning" required type="number" />
                            
                        </div>
                        <div className="flex items-center gap-2">

                            <Label className="leading-none" htmlFor="barbecue-grill">
                                Churrasqueira
                            </Label>
                            <Input className="" id="barbecue-grill" required type="number" />

                        </div>
                        <div className="flex items-center gap-2">

                            <Label className="leading-none" htmlFor="big-screen">
                                Telão
                            </Label>
                            <Input className="" id="big-screen" required type="number" />

                        </div>
                        <div className="flex items-center gap-2">

                            <Label className="leading-none" htmlFor="electricity-fee">
                                Taxa de Luz
                            </Label>
                            <Input className="" id="electricity-fee" required type="number" />
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
                        <Label htmlFor="buffet-price">Valor Buffet</Label>
                        <Input id="buffet-price" placeholder="Entre com valor do buffet R$" />
                    </div>
                    <div className="space-y-2 ">
                        <p>Observação:</p>
                        <textarea placeholder="Digite aqui." className="w-full rounded-md shadow-sm border p-1 border-gray-200"/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="suggested-price">Preço sugerido Pelo sistema</Label>
                        <Input id="suggested-price" placeholder="" disabled />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="charged-price">Preço final cobrado</Label>
                        <Input id="charged-price" placeholder="Insira o Preço que sera cobrado" />
                    </div>
                    <Button>Enviar</Button>
                </div>
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
