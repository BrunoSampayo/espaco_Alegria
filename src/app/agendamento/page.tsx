/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6CjwyfLXypS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export default function Component() {
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
                            <Checkbox id="holiday" />
                            <Label className="leading-none" htmlFor="holiday">
                                Feriado
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="mechanical-bull" />
                            <Label className="leading-none" htmlFor="mechanical-bull">
                                Touro Mecanico
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="photos" />
                            <Label className="leading-none" htmlFor="photos">
                                Cabine Fotos
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="waiter" />
                            <Label className="leading-none" htmlFor="waiter">
                                Garçom
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="dj" />
                            <Label className="leading-none" htmlFor="dj">
                                DJ
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="air-conditioning" />
                            <Label className="leading-none" htmlFor="air-conditioning">
                                Climatização
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="barbecue-grill" />
                            <Label className="leading-none" htmlFor="barbecue-grill">
                                Churrasqueira
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="big-screen" />
                            <Label className="leading-none" htmlFor="big-screen">
                                Telão
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="electricity-fee" />
                            <Label className="leading-none" htmlFor="electricity-fee">
                                Taxa de Luz
                            </Label>
                        </div>
                        
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="buffet-price">Valor Buffet</Label>
                        <Input id="buffet-price" placeholder="Entre com valor do buffet R$" />
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
