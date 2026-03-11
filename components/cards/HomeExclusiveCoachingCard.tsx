"use client";

import { CardElement } from "@/components/ui/CardElement";
import { Button } from "@/components/ui/Button";
import { StarBadge } from "../ui/StarBadge";
import Link from "next/link";

export function HomeExclusiveCoachingCard() {
  return (
    <CardElement className="p-6 pt-8 md:p-8 pb-5 flex flex-col">
          <div className="flex items-center gap-2">
              <StarBadge />
      
              <h3 className="font-title text-[36px] leading-[1] md:leading-[1.5] font-semibold text-text">
                Coaching Exclusivo
              </h3>
          </div>

      <p className="font-body text-[21px] leading-[1.6] mt-3 md:mt-0 text-[#6B6B6B]">
        Telefone · Escritório Lisboa / Porto
      </p>

      <p className="font-body text-[21px] leading-[1.7] text-text">
        Um acompanhamento profundamente transformador para desbloquear barreiras, realinhar os seus caminhos internos e permitir que a harmonia flua de forma autêntica e duradoura. Este suporte personalizado oferece total confidencialidade e um passo a passo cuidadoso para resolver questões familiares, emocionais e energéticas que afetam o seu equilíbrio e bem-estar.
      </p>

      <div className="flex flex-col mt-auto gap-3 pt-8">
        {/* Buttons (aligned) */}
        <div className="flex flex-col gap-3">
          <Link href="/coaching" className="inline-block">
            <Button variant="primary" className="w-full text-[19px]">
              Descobrir o acompanhamento
            </Button>
          </Link>
          <Link href="/coaching#saber-mais-coaching">
            <Button variant="soft" className="w-full text-[19px]">
              Compreender o coaching exclusivo
            </Button>
          </Link>
        </div>

        {/* Helper text */}
        <div className="h-[18px] flex items-center justify-center">
          <span className="text-[20px] md:text-[18px] text-[#6B6B6B] font-light">
            Primeira sessão
          </span>
        </div>
      </div>
    </CardElement>
  );
}
