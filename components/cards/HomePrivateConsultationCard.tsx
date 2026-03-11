"use client";

import { CardElement } from "@/components/ui/CardElement";
import { Button } from "@/components/ui/Button";
import { StarBadge } from "../ui/StarBadge";
import Link from "next/link";

export function HomePrivateConsultationCard() {
  return (
    <CardElement className="p-6 pt-8 md:p-8 pb-5 flex flex-col">
      <div className="flex items-center gap-2">
        <StarBadge />

        <h3 className="font-title text-[36px] leading-[1] md:leading-[1.5] font-semibold text-text">
          Consultas Privadas
        </h3>
      </div>

      <p className="font-body text-[21px] mt-3 md:mt-0 leading-[1.6] text-[#6B6B6B]">
        Telefone · Escritório Lisboa / Porto
      </p>

      <p className="font-body text-[21px] leading-[1.7] text-text">
        Uma oportunidade única para alcançar clareza e harmonia numa sessão de uma hora. 
        Focada em resolver uma preocupação essencial, aliviar tensões familiares ou 
        iluminar o caminho diante de desafios. Permita-se encontrar a paz e as respostas que merece.
      </p>

      <div className="flex flex-col gap-3 mt-auto pt-8">
        {/* Buttons (aligned) */}
        <div className="flex flex-col gap-3">
          <Link href="/consultas" className="inline-block">
            <Button variant="primary" className="w-full text-[19px]">
              Descubra a consulta
            </Button>
          </Link>
          
          <Link href="/consultas#consultas-modalidades">
            <Button variant="soft" className="w-full text-[19px]">
              Modalidades
            </Button>
          </Link>
        </div>

        {/* Helper text placeholder — IMPORTANT */}
        <div className="h-[18px]" />
      </div>
    </CardElement>
  );
}
