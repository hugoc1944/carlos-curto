"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionSeparator } from "@/components/ui/SectionSeparator";
import { motion as motionTokens } from "@/styles/motion";

const faqItems = [
  {
    question: "Em que consiste o coaching privado exclusivo?",
    answer:
      "O coaching privado exclusivo oferece um acompanhamento individual e profundo, cuidadosamente adaptado às suas necessidades e ao seu ritmo de vida. É um espaço sagrado de suporte contínuo, criado para ajudá-lo a atravessar momentos transformadores com clareza, equilíbrio e propósito.",
  },
  {
    question: "Como começa um acompanhamento?",
    answer:
      "Cada acompanhamento inicia-se com uma Sessão Assinatura. Este encontro inicial é uma oportunidade para estabelecer um entendimento claro do caminho a seguir, avaliar as suas necessidades e decidir, em conjunto, se o coaching contínuo é o mais indicado para si.",
  },
  {
    question: "Qual é a diferença em relação a uma consulta privada?",
    answer:
      "Enquanto uma consulta privada aborda uma questão ou situação específica, o coaching exclusivo é um processo contínuo e profundo. Envolve um acompanhamento regular, no qual cada sessão se constrói sobre a anterior, criando uma relação de trabalho significativa e transformadora.",
  },
  {
    question: "Com que frequência ocorrem as sessões?",
    answer:
      "A frequência das sessões é personalizada e ajustada à sua situação atual, ciclos de vida e ritmo pessoal, respeitando sempre a sua jornada. Este ritmo pode ser redefinido à medida que o processo evolui.",
  },
  {
    question: "Existe um compromisso de longa duração?",
    answer:
      "Não, o coaching baseia-se numa relação livre e respeitosa. O processo ajusta-se ao seu caminho e é construído sessão a sessão, sem compromissos rígidos ou imposições. O foco está sempre no seu crescimento e bem-estar.",
  },
  {
    question: "O coaching pode ser feito à distância?",
    answer:
      "Sim, o coaching pode ser realizado à distância, seja por telefone ou vídeo. Este formato assegura a mesma qualidade de presença, escuta e orientação que numa sessão presencial, permitindo que o trabalho aconteça onde quer que esteja.",
  },
  {
    question: "Os encontros são confidenciais?",
    answer:
      "Sim, absolutamente. O coaching exclusivo baseia-se numa relação de confiança profunda. Todas as sessões são estritamente confidenciais, garantindo a total proteção da sua privacidade e do espaço seguro necessário para o seu crescimento.",
  },
];

export function CoachingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="w-full py-10 mb-24">
      <div className="max-w-[900px] mx-auto px-6">
        {/* Title */}
        <h2 className="font-title text-[48px] leading-[1] md:leading-[1.5] md:text-[64px] text-center mb-6 md:mb-10">
          Antes do seu acompanhamento
        </h2>

        {/* Accordion */}
        <div className="space-y-10">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index}>
                {/* Question row */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left cursor-pointer"
                >
                  <span className="font-title text-[22px] md:text-[24px]">
                    {item.question}
                  </span>

                  {/* Arrow */}
                  <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{
                      duration: motionTokens.duration.base,
                      ease: motionTokens.ease.calm,
                    }}
                    className="ml-4 text-[#1F2E5A]"
                  >
                    →
                  </motion.span>
                </button>

                {/* Separator */}
                <div className="mt-4">
                  <SectionSeparator />
                </div>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: motionTokens.duration.slow,
                        ease: motionTokens.ease.calm,
                      }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        initial={{ y: -6 }}
                        animate={{ y: 0 }}
                        exit={{ y: -6 }}
                        transition={{
                          duration: motionTokens.duration.base,
                          ease: motionTokens.ease.calm,
                        }}
                        className="
                          mt-6
                          font-body
                          text-[17px]
                          leading-[1.7]
                          text-[#6B6B6B]
                        "
                      >
                        {item.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
