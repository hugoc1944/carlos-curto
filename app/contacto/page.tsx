import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Informações de contacto e formulário para entrar em contacto com Carlos Curto e a sua equipa. Todos os pedidos são tratados com atenção e confidencialidade.",
};

export default function Page() {
  return <ContactClient />;
}