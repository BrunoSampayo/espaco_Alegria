"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <Dialog defaultOpen>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ops, Ocorreu Um Erro</DialogTitle>
          <DialogDescription>
            <h1>Descrição do erro:</h1>
            {error.message}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={()=>reset()}>Confirmar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

