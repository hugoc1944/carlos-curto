import type { Metadata } from "next";
import CoachingClient from "@/components/coaching/CoachingClient";

export const metadata: Metadata = {
  title: "Coaching exclusivo — Acompanhamento contínuo",
  description:
    "Um acompanhamento individual e contínuo, construído na confiança, na clareza e na estabilidade. Um espaço de orientação e reflexão para atravessar momentos importantes da sua vida com maior discernimento.",

  openGraph: {
    title: "Coaching exclusivo — Carlos Curto",
    description:
      "Um acompanhamento individual e confidencial, desenvolvido ao longo do tempo para avançar com maior clareza, estabilidade e consciência.",
  },
};

export default function Page() {
  return <CoachingClient />;
}