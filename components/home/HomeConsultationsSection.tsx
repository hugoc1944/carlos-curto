"use client";


import { HomePrivateConsultationCard } from "@/components/cards/HomePrivateConsultationCard";
import { HomeExclusiveCoachingCard } from "@/components/cards/HomeExclusiveCoachingCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";


export function HomeConsultationsSection() {
  return (
    <section
      className="
        bg-white
        px-3
        md:px-4
        md:pt-7
        pb-20
        mt-5
      "
    >
      <div className="flex flex-col gap-12">
        {/* =========================================================
           Header
        ========================================================== */}
        <div className="text-center max-w-[910px] mx-auto space-y-5 md:space-y-10 pt-10">
          <h2 className="font-title leading-[1] text-[48px] md:text-[64px] font-semibold text-[#C7A36A]">
            Consultas Privadas,
            <br />
            Acompanhamento Espiritual Exclusivo
          </h2>


          <p className="font-body px-5 md:px-0 font-light text-[24px] leading-[1.3] text-[#1B1E23]">
            Orientação espiritual para clarificar o teu caminho, libertar bloqueios internos e fortalecer as decisões que transformam o teu destino.
          </p>
        </div>


        {/* =========================================================
           Cards
        ========================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-[45fr_55fr] gap-6 max-w-[960px] mx-auto">
          <HomePrivateConsultationCard />
          <HomeExclusiveCoachingCard />
        </div>


        {/* =========================================================
           Testimonials
        ========================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
          <TestimonialCard
            quote="Em apenas 30 minutos, tudo ficou claro. Tomei uma decisão que adiava há tanto tempo."
            author="Anne S., Paris (telefone)"
          />
          <TestimonialCard
            quote="Uma interação precisa e direta. A compreensão imediata do que estava a bloquear foi transformadora."
            author="Claire M., Lyon (vídeo)"
          />
          <TestimonialCard
            quote="Não era o que eu achava que precisava, mas foi exatamente o que fazia sentido para mim."
            author="Élise P., Genebra (vídeo)"
          />
        </div>


        {/* =========================================================
           Bottom CTAs
        ========================================================== */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-full max-w-[420px] flex flex-col gap-4">
            <Link href="/contacto" className="block w-full">
              <Button
                variant="softFilled"
                size="lg"
                className="w-full"
              >
                Tem alguma questão antes de reservar?
              </Button>
            </Link>


            <Button
              variant="authority"
              size="lg"
              className="w-full"
              onClick={() => scrollToId("sobre-carlos-curto")}
            >
              Sobre Carlos Curto
            </Button>
          </div>
        </div>


      </div>
    </section>
  );
}


export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;


  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
