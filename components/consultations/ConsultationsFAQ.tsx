"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionSeparator } from "@/components/ui/SectionSeparator";
import { motion as motionTokens } from "@/styles/motion";

const faqItems = [
  {
    question: "Que tipos de situações podem ser abordadas numa consulta?",
    answer:
      "Nas consultas, podemos explorar situações familiares, decisões importantes, períodos de bloqueio, relações pessoais, padrões repetitivos, orientação espiritual ou profissional, bem como desequilíbrios emocionais ou energéticos. O foco está sempre no seu bem-estar e na sua harmonia.",
  },
  {
    question: "Como decorre uma primeira consulta?",
    answer:
      "A primeira consulta dura cerca de uma hora e decorre num ambiente calmo e isento de julgamentos. Começamos com uma conversa para compreender melhor a sua situação. Em seguida, ofereço uma orientação personalizada, adaptada às suas necessidades e ao momento que está a viver.",
  },
  {
    question:
      "Qual é a diferença entre uma consulta privada e um acompanhamento exclusivo?",
    answer:
      "Uma consulta privada foca-se numa questão ou desafio específico do momento. O acompanhamento exclusivo, por outro lado, é um processo contínuo e mais profundo que apoia a sua evolução ao longo do tempo, promovendo transformações mais amplas na sua vida.",
  },
  {
    question: "As consultas podem ser realizadas à distância?",
    answer:
      "Sim, as consultas podem ser realizadas por telefone ou videochamada. A qualidade da atenção e da orientação mantém-se exatamente igual à de uma consulta presencial, garantindo sempre um espaço de confiança e conexão.",
  },
  {
    question: "Propõe consultas em situações de urgência?",
    answer:
      "Sim, existem opções específicas para situações urgentes que requerem uma resposta rápida. O atendimento está sujeito à disponibilidade, mas farei o possível para estar presente no momento em que mais precisar.",
  },
  {
    question: "É necessário preparar-se antes de uma consulta?",
    answer:
      "Não é necessária nenhuma preparação específica. Basta chegar com mente aberta e sinceridade, permitindo que o processo flua de forma natural e autêntica.",
  },
  {
    question: "As consultas são confidenciais?",
    answer:
      "Sim, todas as consultas são absolutamente confidenciais. Todo o processo é conduzido com o máximo respeito pela sua privacidade, garantindo um espaço seguro e acolhedor.",
  },
];

export function ConsultationsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="w-full py-10 mb-24">
      <div className="max-w-[900px] mx-auto px-6">
        {/* Title */}
        <h2 className="font-title text-[48px] leading-[1] md:leading-[1.5] md:text-[64px] text-[#1F2E5A] text-center mb-6 md:mb-10">
          Antes da sua consulta
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
