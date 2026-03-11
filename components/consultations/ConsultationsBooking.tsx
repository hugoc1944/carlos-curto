"use client";

import { SectionSeparator } from "@/components/ui/SectionSeparator";
import { InfoNotice } from "@/components/ui/InfoNotice";
import { UrgentServiceCard } from "@/components/cards/UrgentServiceCard";
import { ClassicServiceCard } from "@/components/cards/ClassicServiceCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function ConsultationsBooking() {
  return (
    <section className="w-full py-2 md:py-24">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6">

        <SectionSeparator id="consultas-modalidades" />

        {/* Intro */}
        <div className="text-center mt-10 md:mt-15 mb-15 md:mb-20">
          <h2 className="font-title leading-[1] text-[38px] md:text-[72px] text-[#1F2E5A] font-semibold">
            Reserve a sua sessão com Carlos Curto
          </h2>

          <p className="font-body text-[18px] font-light md:font-normal md:text-[22px] mt-4 max-w-[90%] md:max-w-[85%] mx-auto">
            Esta sessão inicial de uma hora é um momento de clareza. Revela a sua situação atual e orienta o caminho que Carlos poderá percorrer consigo. Existe também uma opção específica para questões urgentes.
          </p>
        </div>

        {/* Overline */}
        <p className="text-center font-body text-[#777] tracking-[0.26em] uppercase text-[14px] md:text-[18px] mb-2">
          Consultas Privadas
        </p>

        <h3 className="text-center leading-[1] md:leading-[1.5] font-title text-[32px] text-[#1F2E5A] md:text-[48px] mb-6">
          Escolha a sua sessão
        </h3>

        {/* Cards */}
        <div className="md:max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center mb-14">
          <UrgentServiceCard />
          <ClassicServiceCard />
        </div>

        {/* Info box */}
        <InfoNotice>
          As consultas são limitadas para garantir um espaço de calma e total presença em cada sessão. A disponibilidade pode variar, ajustando-se para manter esta qualidade de atenção.
        </InfoNotice>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-4 mt-10 leading-[1] md:leading-[1.5]">
          <Link href="/contacto" className="inline-block">
            <Button variant="softFilled" size="lg">
              Tem dúvidas antes de reservar? Envie-nos uma mensagem
            </Button>
          </Link>
          <a
            href="https://www.instagram.com/charlescurto.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
            aria-label="Aceder aos recursos gratuitos de Carlos Curto no Instagram"
          >
            <Button variant="authority" size="lg">
              Recursos gratuitos — Instagram
            </Button>
          </a>
        </div>

        {/* Testimonials */}
        <h3 className="font-title text-[48px] text-center mt-20 mb-3">
          Testemunhos
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-20">
          <TestimonialCard
            quote="Em apenas uma hora, tudo ficou claro. Pude tomar uma decisão sem ansiedade."
            author="Anne L., Paris (telefone)"
          />
          <TestimonialCard
            quote="Uma escuta precisa e direta. O que realmente importava tornou-se evidente."
            author="Claire M., Nice (vídeo)"
          />
          <TestimonialCard
            quote="Saí em paz, com uma decisão segura e simples."
            author="Sophie R., Lyon (telefone)"
          />
          <TestimonialCard
            quote="Sem julgamentos, sem projeções. Uma leitura clara do meu momento."
            author="Élise D., Paris (presencial)"
          />
          <TestimonialCard
            quote="O espaço proporcionou clareza onde antes tudo estava confuso."
            author="Isabelle P., Genebra (vídeo)"
          />
          <TestimonialCard
            quote="Sobriedade, precisão, eficácia. Tudo o que precisava, sem excessos."
            author="Marion T., Toronto (telefone)"
          />
        </div>

        <SectionSeparator />

      </div>
    </section>
  );
}
