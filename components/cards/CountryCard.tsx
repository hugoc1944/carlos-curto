"use client";

import { CardElement } from "@/components/ui/CardElement";
import { CardBadge } from "@/components/ui/card/CardBadge";
import { CardTitle } from "@/components/ui/card/CardTitle";
import { CardDescription } from "@/components/ui/card/CardDescription";
import { Button } from "@/components/ui/Button";

interface CountryCardProps {
  country: string;
  title: string;
  description: string;
  domain: string;
}

export function CountryCard({
  country,
  title,
  description,
  domain,
}: CountryCardProps) {
  return (
    <CardElement className="p-8 flex flex-col h-full">
      <CardBadge variant="outline">{country}</CardBadge>

      <CardTitle className="mt-5 text-[28px]">
        {title}
      </CardTitle>

      <CardDescription className="mt-3 text-[17px] leading-[1.6]">
        {description}
      </CardDescription>

      {/* Espaçador para alinhar em baixo */}
      <div className="flex-1" />

      {/* Domínio */}
      <div className="flex items-center gap-2 text-[#6B6B6B] mb-6 mt-3">
        <span className="bg-goldenLinear bg-clip-text text-transparent text-[20px] leading-[1]">
          ✦
        </span>
        <span className="italic font-body text-[16px] font-bold">
          {domain}
        </span>
      </div>

      {/* Botão de link externo */}
      <a
        href={`https://${domain}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir o site ${domain} numa nova aba`}
        className="block"
      >
        <Button
          variant="primary"
          size="md"
          className="w-full text-[16px] tracking-[0.08em]"
        >
          <span className="flex items-center justify-center gap-2">
            Visite o site
            <span
              className="
                text-[14px]
                opacity-40
                translate-y-[1px]
              "
              aria-hidden
            >
              ↗
            </span>
          </span>
        </Button>
      </a>
    </CardElement>
  );
}
