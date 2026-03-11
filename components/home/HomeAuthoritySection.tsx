"use client";

import { FullBleed } from "@/components/layout/FullBleed";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function HomeAuthoritySection() {
  return (
    <FullBleed>
      <section className="w-full pt-55 pb-35 md:pt-58 px-4">
        <div className="max-w-[920px] mx-auto flex flex-col items-center gap-7">
          
          {/* =========================================================
             Title & subtitle (centered)
          ========================================================== */}
          <div className="text-center space-y-6">
            <h2 className="font-title text-[#1F2E5A] font-semibold text-[42px] md:text-[48px] leading-[1.1]">
              Carlos Curto | Orientação Espiritual &<br />
              Acompanhamento Energético
            </h2>

            <p className="font-body font-light text-[24px] text-[#6B6B6B]">
              Consultas em Portugal e no estrangeiro – por telefone ou presencialmente
            </p>
          </div>

          {/* =========================================================
             Authority text (left aligned)
          ========================================================== */}
          <div className="max-w-[760px] text-left space-y-6">
            <p className="font-body font-light text-[24px] md:text-[26px] leading-[1.6] text-text">
              Reconhecido pela sua <span className="font-normal">profunda sabedoria espiritual </span> 
              e pela sua <span className="font-normal">escuta acolhedora</span>, Carlos tem
              acompanhado, há mais de quarenta anos, pessoas de <span className="font-normal">Portugal,
              Europa e além-fronteiras</span>. As suas consultas, realizadas{" "}
              <span className="font-normal">por telefone ou presencialmente em Lisboa e no Porto</span>,
              oferecem uma orientação clara e reconfortante, profundamente direcionada à 
              <span className="font-normal"> resolução das questões essenciais</span> de cada pessoa.
            </p>
          </div>

          {/* =========================================================
             CTA
          ========================================================== */}
          <Link href="/consultations" className="inline-block">
            <Button variant="authority">
              Descubra as consultas
            </Button>
          </Link>
        </div>
      </section>
    </FullBleed>
  );
}
