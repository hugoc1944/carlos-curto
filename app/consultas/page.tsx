import type { Metadata } from "next";
import ConsultationsClient from "@/components/consultations/ConsultationsClient";

export const metadata: Metadata = {
  title: "Consultas privadas | Sessão individual",
  description:
    "Uma consulta confidencial de uma hora para esclarecer uma situação importante, tomar uma decisão ou encontrar maior clareza num momento decisivo da sua vida.",

  openGraph: {
    title: "Consultas privadas | Carlos Curto",
    description:
      "Uma sessão individual e confidencial para compreender uma situação, tomar decisões com maior clareza e atravessar momentos importantes com serenidade.",
  },
};

export default function Page() {
  return <ConsultationsClient />;
}