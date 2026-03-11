"use client";

import { Button } from "@/components/ui/Button";

interface ContactStepProps {
  data: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    location?: "lisboa" | "porto" | "other";
  };
  onUpdate: (data: Partial<ContactStepProps["data"]>) => void;
  onNext: () => void;
}

export function ContactStep({
  data,
  onUpdate,
  onNext,
}: ContactStepProps) {
  const isValid =
    data.firstName &&
    data.lastName &&
    data.email &&
    data.phone &&
    data.location;

  return (
    <div className="max-w-[520px] mx-auto space-y-8">
      {/* Title */}
      <div className="space-y-2">
        <h2 className="font-title text-[28px] text-[#1F2E5A]">
          As suas informações de contacto
        </h2>

        <p className="font-body text-[15px] text-[#6B6B6B]">
          Estas informações permitem-nos entrar em contacto consigo e confirmar
          a sua consulta, garantindo um acompanhamento claro e personalizado.
        </p>
      </div>

      {/* Fields */}
      <div className="space-y-5">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field
            label="Primeiro nome"
            name="given-name"
            autoComplete="given-name"
            value={data.firstName || ""}
            onChange={(v) => onUpdate({ firstName: v })}
          />

          <Field
            label="Apelido"
            name="family-name"
            autoComplete="family-name"
            value={data.lastName || ""}
            onChange={(v) => onUpdate({ lastName: v })}
          />
        </div>

        <Field
          label="Endereço de e-mail"
          type="email"
          name="email"
          autoComplete="email"
          value={data.email || ""}
          onChange={(v) => onUpdate({ email: v })}
        />

        {/* Location */}
        <div className="space-y-1">
          <label className="font-body text-[14px] text-[#5F5B52]">
            Local pretendido para a consulta
          </label>

          <select
            name="address-level2"
            autoComplete="address-level2"
            value={data.location || ""}
            onChange={(e) =>
              onUpdate({
                location: e.target.value as "lisboa" | "porto" | "other",
              })
            }
            className="
              w-full
              rounded-[14px]
              px-4
              py-3
              bg-white
              border
              border-[#E5E2DA]
              focus:outline-none
              focus:border-[#C7A36A]
              text-[#1F2E5A]
            "
          >
            <option value="" disabled>
              Escolha uma opção
            </option>

            <option value="lisboa">Lisboa</option>
            <option value="porto">Porto</option>
            <option value="other">Outra região / telefone</option>
          </select>

          <p className="font-body text-[13px] text-[#8F8A7E]">
            As consultas presenciais estão disponíveis apenas em Lisboa e no
            Porto. Para outras regiões poderá optar por consulta por telefone.
          </p>
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <Field
            label="Telefone"
            type="tel"
            name="tel"
            autoComplete="tel"
            value={data.phone || ""}
            onChange={(v) => onUpdate({ phone: v })}
          />

          <p className="font-body text-[13px] text-[#8F8A7E]">
            Utilizaremos este número apenas para confirmar a sua consulta e
            garantir uma comunicação simples e direta consigo.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="pt-4">
        <Button
          variant="authority"
          size="lg"
          className="w-full"
          disabled={!isValid}
          onClick={onNext}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
}


/* -------------------------------------------------------
   Field component
------------------------------------------------------- */

function Field({
  label,
  value,
  onChange,
  type = "text",
  name,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  name?: string;
  autoComplete?: string;
}) {
  return (
    <div className="space-y-1">
      <label className="font-body text-[14px] text-[#5F5B52]">
        {label}
      </label>

      <input
        type={type}
        name={name}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          rounded-[14px]
          px-4
          py-3
          bg-white
          border
          border-[#E5E2DA]
          focus:outline-none
          focus:border-[#C7A36A]
        "
      />
    </div>
  );
}