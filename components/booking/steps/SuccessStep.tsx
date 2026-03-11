"use client";

import { Button } from "@/components/ui/Button";
import { useEffect } from "react";

interface SuccessStepProps {
  onClose?: () => void;
}

export function SuccessStep({ onClose }: SuccessStepProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "booking_submit_success",
      });
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
      (window as any).fbq("track", "Lead");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-[420px] mx-auto space-y-6">
      
      {/* Visual anchor */}
      <div className="w-12 h-12 rounded-full bg-[#EDE9DF] flex items-center justify-center">
        <span className="text-[22px] text-[#1F2E5A]">✓</span>
      </div>

      {/* Title */}
      <h2 className="font-title text-[26px] text-[#1F2E5A]">
        O seu pedido foi enviado com sucesso
      </h2>

      {/* Body */}
      <p className="font-body text-[16px] leading-[1.7] text-[#5F5B52]">
        Recebemos o seu pedido e enviámos um email de confirmação para o seu endereço de correio eletrónico.
      </p>

      <p className="font-body text-[16px] leading-[1.7] text-[#5F5B52]">
        Em breve, entraremos em contacto consigo por telefone para confirmar os detalhes da sua consulta e orientá-lo sobre os próximos passos.
      </p>

      {/* Gentle closure */}
      <p className="font-body text-[14px] text-[#8F8A7E] pt-2">
        Agora pode fechar esta janela com total tranquilidade e confiança.
      </p>

      {/* Optional action */}
      {onClose && (
        <div className="pt-4">
          <Button variant="softFilled" size="md" onClick={onClose}>
            Fechar
          </Button>
        </div>
      )}
    </div>
  );
}
