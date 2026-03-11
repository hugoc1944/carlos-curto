"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function InternationalClosingNote() {
  return (
    <section className="w-full py-13 md:py-28">
      <div
        className="
          max-w-[880px]
          mx-auto
          px-6
          text-center
        "
      >
        <p
          className="
            font-title
            text-[26px]
            md:text-[36px]
            leading-[1.2]
            font-light
            text-left
          "
        >
          Se a sua situação não se enquadrar num país específico ou se 
          residir noutro local, as consultas continuam possíveis à distância. 
          Este formato garante o mesmo cuidado, atenção e confidencialidade 
          que merece. Cada pedido será analisado com profunda dedicação 
          e respeito, sempre considerando os horários e a disponibilidade 
          para melhor o atender.
        </p>

        <div className="mt-7 md:mt-10">
          <Link href="/contacto">
            <Button variant="softFilled" size="md" className="text-[18px]">
              Uma questão antes de reservar&nbsp;?
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
