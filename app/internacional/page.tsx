import type { Metadata } from "next";
import InternationalClient from "./InternationalClient";

export const metadata: Metadata = {
  title: "Presença internacional | Consultas à distância",
  description:
    "Carlos Curto acompanha pessoas em diferentes países através de consultas à distância. Uma presença acessível internacionalmente, mantendo a mesma atenção, confidencialidade e profundidade.",

  openGraph: {
    title: "Presença internacional | Carlos Curto",
    description:
      "Consultas disponíveis para Portugal e outros países. Um acompanhamento espiritual acessível internacionalmente.",
  },
};

export default function Page() {
  return <InternationalClient />;
}