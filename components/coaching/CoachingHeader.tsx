"use client";

import { TrustPill } from "@/components/ui/TrustPill";

export function CoachingHeader() {
  return (
    <section
      className="
        w-full
        pt-28
        md:pt-36
      "
    >
      <div
        className="
          max-w-[980px]
          mx-auto
          px-0
          md:px-6
          flex
          flex-col
          items-center
          text-center
        "
      >
        {/* ================= TITLE ================= */}
        <h1
          className="
            font-title
            text-[#1F2E5A]
            text-[56px]
            font-semibold
            md:font-normal
            leading-[1]
            md:text-[80px]
          "
        >
          Coaching Privado
          <br />
          Exclusivo
        </h1>

        {/* ================= SUBTITLE ================= */}
        <p
          className="
            font-title
            text-[#1F2E5A]
            text-[32px]
            md:text-[46px]
            leading-[1]
            pt-10
            px-15
            mb:px-0
          "
        >
          <span className="text-[#C7A36A]">
            Um guia profundo e transformador ao longo do tempo
          </span>
          , para atravessar as jornadas essenciais da sua vida com
          clareza, confiança e um apoio verdadeiramente presente.
        </p>

        {/* ================= TRUST PILLS ================= */}
        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-1
            md:gap-3
            pt-7
            md:pt-5
          "
        >
          <TrustPill>Apoio contínuo e dedicado</TrustPill>
          <TrustPill>Mais de 40 anos de sabedoria e experiência</TrustPill>
          <TrustPill>Construção de uma relação de confiança</TrustPill>
          <TrustPill>Presença verdadeira em cada momento</TrustPill>
          <TrustPill>Transformação através do coaching individual</TrustPill>
          <TrustPill>Disponível em Lisboa · Porto</TrustPill>
        </div>
      </div>
    </section>
  );
}
