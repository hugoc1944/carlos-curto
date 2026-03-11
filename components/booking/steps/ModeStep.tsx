"use client";

import { Button } from "@/components/ui/Button";
import { ModeCard } from "./ModeCard";
import { BOOKING_MODES, BookingMode } from "@/lib/bookingModes";

interface ModeStepProps {
  value?: BookingMode;
  location?: "lisboa" | "porto" | "other";
  onChange: (mode: BookingMode) => void;
  onNext: () => void;
  onBack: () => void;
}

export function ModeStep({
  value,
  location,
  onChange,
  onNext,
  onBack,
}: ModeStepProps) {
  const isValid = Boolean(value);

  const canDoPresential =
    location === "lisboa" || location === "porto";

  return (
    <div className="space-y-8 max-w-[420px] mx-auto">
      {/* Title */}
      <div className="space-y-2">
        <h2 className="font-title text-[28px] text-[#1F2E5A]">
          Escolha o modo de consulta
        </h2>

        <p className="font-body text-[16px] text-[#5F5B52]">
          Selecione a forma de consulta que melhor se adapta à sua situação
          e ao momento da sua jornada espiritual.
        </p>
      </div>

      {/* Options */}
      <div className="space-y-4">
        {BOOKING_MODES.map((mode) => {
          const isPresential = mode.id === "presential";

          const isAvailable =
            isPresential ? canDoPresential : mode.available;

          return (
            <ModeCard
              key={mode.id}
              label={mode.label}
              description={mode.description}
              note={
                !isAvailable && isPresential
                  ? "Disponível apenas para consultas presenciais em Lisboa ou no Porto."
                  : mode.note
              }
              disabled={!isAvailable}
              selected={value === mode.id}
              onClick={() => isAvailable && onChange(mode.id)}
            />
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <Button variant="softFilled" onClick={onBack}>
          Voltar
        </Button>

        <Button
          variant="authority"
          size="lg"
          disabled={!isValid}
          onClick={onNext}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
}