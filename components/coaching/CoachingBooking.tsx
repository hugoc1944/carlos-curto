"use client";

import { SectionSeparator } from "@/components/ui/SectionSeparator";
import { InfoNotice } from "@/components/ui/InfoNotice";
import { SignatureServiceCard } from "@/components/cards/SignatureServiceCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function CoachingBooking() {
  return (
    <section className="w-full py-2 md:py-24">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6">

        <SectionSeparator />

        {/* Intro */}
        <div className="text-center mt-10 md:mt-15 mb-15 md:mb-20">
          <h2 className="font-title leading-[1] text-[38px] md:text-[72px] text-[#1F2E5A] font-semibold">
            Reserve a sua sessão de acompanhamento com Carlos Curto
          </h2>

          <p className="font-body text-[18px] font-light md:font-normal md:text-[22px] mt-4 max-w-[90%] md:max-w-[85%] mx-auto">
            Cada jornada começa com um primeiro passo. Esta sessão inicial não é apenas um encontro, mas uma oportunidade para criar uma base sólida e explorar a harmonia de um trabalho contínuo. É o momento de alinhar intenções e estabelecer o caminho que irá nutrir o seu crescimento pessoal.
          </p>
        </div>

        {/* Overline */}
        <p className="text-center font-body text-[#777] tracking-[0.26em] uppercase text-[14px] md:text-[18px] mb-2">
          Consulta Privada
        </p>

        <h3 className="text-center leading-[1] md:leading-[1.5] font-title text-[32px] text-[#1F2E5A] md:text-[48px] mb-10">
          Sessão de Signature
        </h3>

        {/* Card */}
        <div className="flex justify-center mb-6">
          <SignatureServiceCard />
        </div>

        {/* Micro line */}
        <p className="
          text-center
          font-body
          font-light
          text-[#6B6B6B]
          text-[16px]
          md:text-[16px]
          tracking-[0.17em]
          mt-12
          mb-8
        ">
          Esta primeira sessão marca o início de um processo profundo e transformador, desenhado especialmente para si.
        </p>

        {/* Info box */}
        <InfoNotice>
          O número de acompanhamentos é cuidadosamente limitado para assegurar uma relação dedicada, estável e profundamente conectada, permitindo um espaço genuíno para a sua evolução.
        </InfoNotice>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-4 mt-10 leading-[1] md:leading-[1.5]">
          <Link href="/contacto" className="inline-block">
            <Button variant="softFilled" size="lg">
              Tem alguma dúvida antes de reservar? Fale connosco
            </Button>
          </Link>

          <a
              href="https://www.instagram.com/charlescurto.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              aria-label="Aceda aos recursos gratuitos de Carlos Curto no Instagram"
            >
              <Button variant="authority" size="lg">
                Recursos Gratuitos — Instagram
              </Button>
          </a>
        </div>

        {/* Testimonials */}
        <h3 className="font-title text-[48px] text-center mt-20 mb-3">
          Testemunhos
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-20">
          <TestimonialCard
            quote="Um acompanhamento que se desenvolve ao longo do tempo, com enorme precisão e atenção."
            author="Anne S., Paris"
          />
          <TestimonialCard
            quote="A relação foi sendo construída com paciência, criando confiança e clareza sem promessas vazias."
            author="Claire B., Nice"
          />
          <TestimonialCard
            quote="Uma presença estável e serena, que nos guia com foco e sem dispersão."
            author="Hélène M., Genebra"
          />
          <TestimonialCard
            quote="Este trabalho trouxe não apenas mudanças, mas uma coerência duradoura no meu caminho."
            author="Sophie L., Lyon"
          />
          <TestimonialCard
            quote="A palavra certa, no momento certo, transformando pequenos instantes em grandes avanços."
            author="Isabelle R., Madrid"
          />
          <TestimonialCard
            quote="Uma relação de confiança construída no ritmo que eu precisava, sem pressa ou pressão."
            author="Marion C., Lisboa"
          />
        </div>

        <SectionSeparator />

      </div>
    </section>
  );
}
