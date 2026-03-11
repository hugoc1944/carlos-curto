import type { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "Carlos Curto | Orientação espiritual e consultas privadas",
  description:
    "Carlos Curto oferece consultas espirituais privadas e acompanhamento individual. Um espaço de escuta profunda, clareza e orientação para momentos importantes da vida.",

  openGraph: {
    title: "Carlos Curto | Orientação espiritual",
    description:
      "Consultas privadas e acompanhamento espiritual com Carlos Curto. Um trabalho de escuta, clareza e orientação para atravessar momentos essenciais da vida.",
  },
};

export default function Page() {
  return <HomeClient />;
}