"use client";

import { TrustPill } from "@/components/ui/TrustPill";

export function ConsultationsHeader() {
  return (
    <section
      className="
        w-full
        pt-28
        md:pt-36
        pb-25
        md:pb-52
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
          Consultas
          <br />
          Privadas
        </h1>

        {/* ================= SUBTITLE ================= */}
        <p
          className="
            font-title
            text-[#1F2E5A]
            text-[32px]
            md:text-[46px]
            leading-[1]
            max-w-[250px]
            md:max-w-[640px]
            pt-10
          "
        >
          Encontre clareza em questões essenciais através de uma troca
          confidencial e transformadora de uma hora.
        </p>

        {/* ================= TRUST PILLS ================= */}
        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-1
            md:gap-3
            pt-5
            md:pt-5
          "
        >
          <TrustPill>Uma prática amplamente reconhecida</TrustPill>
          <TrustPill>Mais de 40 anos de sabedoria e experiência</TrustPill>
          <TrustPill>Orientação segura e confidencial</TrustPill>
          <TrustPill>Lisboa · Portugal</TrustPill>
        </div>
      </div>
    </section>
  );
}
