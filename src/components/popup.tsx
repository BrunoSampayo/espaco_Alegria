
"use client"

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";

export const PopUpButton = () => {
  const [errorMessage, setErrorMessage] = useState("");

  

  const handleCheckError = async () => {
    try {
      const response = await axios.get("./api/schedule");
      setErrorMessage("");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage("Erro ao comunicar com a API: " + error.response?.data.error);
      } else {
        setErrorMessage("Erro ao comunicar com a API. Tente novamente mais tarde.");
      }
    }
  };

  return (
    <div className="bg-background border border-gray-600 text-sm p-1 w-24 rounded-lg m-2">
      <Dialog>
        <DialogTrigger onClick={handleCheckError}>Verificar Erro</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Mensagem de Erro</DialogTitle>
            {errorMessage && <DialogDescription>{errorMessage}</DialogDescription>}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
