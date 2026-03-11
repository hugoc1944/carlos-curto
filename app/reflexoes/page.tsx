import type { Metadata } from "next";
import { getAllEcrits } from "@/lib/ecrits";
import EcritsClient from "./EcritsClient";

export const metadata: Metadata = {
  title: "Reflexões | Escritos e partilhas",
  description:
    "Uma seleção de reflexões e textos sobre trajetórias de vida, intuição e compreensão espiritual. Palavras que acompanham e iluminam o caminho interior.",

  openGraph: {
    title: "Reflexões | Carlos Curto",
    description:
      "Reflexões sobre a vida, a intuição e os caminhos invisíveis que orientam o percurso humano.",
  },
};

export default function EcritsPage() {
  const ecrits = getAllEcrits();

  return <EcritsClient ecrits={ecrits} />;
}