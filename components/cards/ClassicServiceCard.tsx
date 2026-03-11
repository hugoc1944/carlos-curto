"use client";

import { CardElement } from "@/components/ui/CardElement";
import { CardBadge } from "@/components/ui/card/CardBadge";
import { CardTitle } from "@/components/ui/card/CardTitle";
import { CardDescription } from "@/components/ui/card/CardDescription";
import { CardFeatureList } from "@/components/ui/card/CardFeatureList";
import { CardFooter } from "@/components/ui/card/CardFooter";
import { Button } from "@/components/ui/Button";
import { useBooking } from "@/contexts/BookingContext";

export function ClassicServiceCard() {
  const { openBooking } = useBooking();

  return (
    <CardElement className="p-6 pt-8 md:p-8 flex flex-col h-full">
      <CardBadge variant="outline">CONSULTA CLÁSSICA</CardBadge>

      <CardTitle className="mt-6 text-[30px] font-semibold leading-[1.1]">
        A partir de 72h
      </CardTitle>

      <CardDescription className="mt-3 font-body text-[16px] leading-[1.6] text-[#6B6B6B]">
        <strong>Uma abordagem tranquila e profundamente acolhedora.</strong><br />
        Esta consulta destina-se a situações que podem aguardar alguns dias.
        Oferece um espaço sereno e seguro, propício à escuta, à compreensão
        e à clarificação da sua situação.
      </CardDescription>

      <CardFeatureList
        className="mt-4 text-[15px]"
        items={[
          "Sessão de uma hora",
          "Telefone ou presencial (Lisboa / Porto)",
          "Troca confidencial e sem julgamentos",
          "A escolha ideal entre serenidade e qualidade premium",
        ]}
      />

      <div className="flex-1" />

      <Button
        variant="primary"
        size="lg"
        className="w-full text-[18px] normal-case mt-8 leading-[1]"
        onClick={() => {
          if (typeof window !== "undefined") {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "booking_start",
              service_type: "classic",
              service_category: "consultation",
            });
          }

          openBooking("classic");
        }}
      >
        Reservar uma consulta — telefone / presencial
      </Button>

      <CardFooter className="mt-4 text-[14px] text-[#6B6B6B]">
        Disponibilidade limitada
      </CardFooter>
    </CardElement>
  );
}