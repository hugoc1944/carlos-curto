"use client";

import { CardElement } from "@/components/ui/CardElement";
import { CardBadge } from "@/components/ui/card/CardBadge";
import { CardTitle } from "@/components/ui/card/CardTitle";
import { CardFooter } from "@/components/ui/card/CardFooter";
import { Button } from "@/components/ui/Button";
import { PremiumFeatureList } from "@/components/ui/PremiumFeatureList";
import { useBooking } from "@/contexts/BookingContext";

export function SignatureServiceCard() {
  const { openBooking } = useBooking();
  return (
    <CardElement className="w-[520px] p-8 flex flex-col">
      <CardBadge variant="outline">
        SESSÃO SIGNATURE
      </CardBadge>

      <CardTitle className="mt-5">
        Um encontro essencial para a sua jornada
      </CardTitle>

      {/* First paragraph */}
      <p className="font-body text-[18px] leading-[1.6] mt-3">
        Uma sessão única de uma hora, confidencial e profundamente personalizada, guiada por uma pergunta transformadora:&nbsp;
      </p>

      {/* Highlighted question */}
      <p
        className="
          font-body
          font-bold
          text-[18px]
          bg-textHighlightGolden
          bg-clip-text
          text-transparent
        "
      >
        « Como posso ajudá-lo(a)? »
      </p>

      {/* Italic paragraph */}
      <p className="font-body italic text-[18px] leading-[1.6] mt-4">
        Este primeiro encontro é uma oportunidade para explorar com clareza e respeito o caminho que deseja seguir, sem compromissos futuros ou pressões externas.
      </p>

      <PremiumFeatureList
        className="mt-6"
        items={[
          "Troca confidencial e sem julgamentos",
          "Sessão de uma hora",
          "Atendimento por telefone ou presencial (Lisboa / Porto)",
          "Sem obrigação de continuidade",
        ]}
      />

      <div className="flex-1" />

      <Button
        variant="primary"
        size="lg"
        className="w-full text-[18px] leading-[1.2] tracking-[0.08em] font-semibold normal-case py-[18px] mt-10"
        onClick={() => {
          if (typeof window !== "undefined") {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "booking_start",
              service_type: "signature",
              service_category: "coaching",
            });
          }

          openBooking("signature");
        }}
      >
        Reservar a Sessão Signature
      </Button>

      <CardFooter className="mt-5">
        Vagas limitadas, reserve já.
      </CardFooter>
    </CardElement>
  );
}
