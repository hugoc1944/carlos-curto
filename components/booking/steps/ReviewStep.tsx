"use client";


import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { format } from "date-fns";
import { pt } from "date-fns/locale";


interface ReviewStepProps {
  data: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    mode?: "presential" | "phone" | "visio";
    date?: string;
    timeSlot?: "morning" | "afternoon" | "night";
  };
  onBack: () => void;
  onSubmit: () => void;
  loading?: boolean;
  error?: string | null;
}


const MODE_LABELS = {
  presential: "Em gabinete",
  phone: "Por telefone",
  visio: "Por videoconferência",
};


const TIME_LABELS = {
  morning: "Manhã (07h – 12h)",
  afternoon: "Tarde (14h – 18h)",
  night: "Noite (20h – 22h)",
};


const TBD_LABEL = "A definir";



export function ReviewStep({
  data,
  onBack,
  onSubmit,
  loading = false,
  error = null,
}: ReviewStepProps) {
  const [accepted, setAccepted] = useState(false);


  return (
    <div className="space-y-8 max-w-[520px]">
      {/* Header */}
      <div>
        <h2 className="font-title text-[26px] text-[#1F2E5A]">
          Confirmação do seu Pedido
        </h2>
        <p className="mt-2 font-body text-[15px] text-[#6B6B6B]">
          Reveja atentamente as informações abaixo antes de finalizar o seu pedido.
        </p>
      </div>


      {/* Summary card */}
      <div className="rounded-[18px] bg-white border border-[#E5E2DA] p-6 space-y-4">
        <SummaryRow
          label="Nome"
          value={`${data.firstName} ${data.lastName}`}
        />
        <SummaryRow label="Email" value={data.email} />
        <SummaryRow label="Telefone" value={data.phone} />
        <SummaryRow
          label="Tipo de consulta"
          value={data.mode ? MODE_LABELS[data.mode] : ""}
        />
        <SummaryRow
          label="Data"
          value={
              data.mode === "presential"
              ? TBD_LABEL
              : data.date
              ? format(new Date(data.date), "EEEE, d 'de' MMMM 'de' yyyy", {
                  locale: pt,
                  })
              : ""
          }
        />
        <SummaryRow
          label="Horário"
          value={
              data.mode === "presential"
              ? TBD_LABEL
              : data.timeSlot
              ? TIME_LABELS[data.timeSlot]
              : ""
          }
        />
      </div>


      {/* Info reassurance */}
      <div className="text-[14px] leading-[1.6] text-[#6B6B6B]">
        Após enviar o pedido, entraremos em contacto consigo por telefone para confirmar todos os detalhes da consulta.
        <br />
        <strong>Não será necessário qualquer pagamento nesta fase.</strong>
      </div>


      {/* Privacy */}
      <label className="flex items-start gap-3 text-[13px] text-[#6B6B6B] cursor-pointer">
        <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            className="mt-1"
        />
        <span>
            Confirmo que aceito o uso das minhas informações exclusivamente para este pedido, em conformidade com a{" "}
            <a
            href="/politica-de-privacidade"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-[#1F2E5A] transition"
            >
            política de privacidade
            </a>.
        </span>
       </label>


    {error && (
    <div className="rounded-[12px] bg-red-50 border border-red-200 px-4 py-3 text-[14px] text-red-700">
        {error}
    </div>
    )}


      {/* Actions */}
      <div className="flex items-center justify-between pt-4">
        <button
          onClick={onBack}
          className="text-[14px] text-[#6B6B6B] cursor-pointer hover:text-[#1F2E5A]"
        >
          ← Modificar
        </button>


        <Button
          variant="authority"
          size="md"
          disabled={!accepted || loading}
          onClick={onSubmit}
        >
          {loading ? "A enviar..." : "Finalizar Pedido"}
        </Button>
      </div>
    </div>
  );
}


/* ---------- Subcomponent ---------- */


function SummaryRow({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  return (
    <div className="flex justify-between gap-6 text-[14px]">
      <span className="text-[#8F8A7E]">{label}</span>
      <span className="text-[#1F2E5A] text-right font-medium">
        {value}
      </span>
    </div>
  );
}
