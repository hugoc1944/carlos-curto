"use client";

import { Button } from "@/components/ui/Button";

interface PresentialInfoStepProps {
  onNext: () => void;
  onBack: () => void;
}

export function PresentialInfoStep({
  onNext,
  onBack,
}: PresentialInfoStepProps) {
  return (
    <div className="max-w-[520px] mx-auto space-y-8">
      <div className="space-y-3">
        <h2 className="font-title text-[28px] text-[#1F2E5A]">
          Consulta Presencial
        </h2>

        <p className="font-body text-[16px] leading-[1.7] text-[#5F5B52]">
          As consultas presenciais são organizadas pela nossa equipa de forma personalizada, tendo em conta as disponibilidades e o melhor enquadramento para si.        </p>

        <p className="font-body text-[15px] leading-[1.7] text-[#5F5B52]">
          Será contactado(a) num prazo máximo de 24 horas{" "}
          <span className="text-[#8F8A7E]">(na maioria dos casos, dentro de algumas horas) </span> 
           para confirmar o horário que melhor se adapte às suas necessidades.
        </p>
      </div>

      <div className="flex justify-between pt-6">
        <Button variant="softFilled" onClick={onBack}>
          Voltar
        </Button>

        <Button variant="authority" size="lg" onClick={onNext}>
          Continuar
        </Button>
      </div>
    </div>
  );
}
