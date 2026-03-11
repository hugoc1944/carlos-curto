"use client";

import { Button } from "@/components/ui/Button";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactClient() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const successRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sent && successRef.current) {
      successRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [sent]);

  return (
    <section className="w-full py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* =========================================================
             ESQUERDA — INFORMAÇÃO DE CONTACTO
          ========================================================== */}
          <div>
            <h1 className="
              font-title
              text-[59px]
              md:text-[82px]
              leading-[1]
              text-[#1F2E5A]
            ">
              Contacto
            </h1>

            <p className="
              mt-3
              md:mt-6
              font-body
              text-[18px]
              leading-[1.6]
              max-w-[420px]
              text-[#1B1E23]
            ">
              Para qualquer dúvida, pedido especial ou mensagem pessoal, sinta-se à vontade para entrar em contacto com Carlos e a sua equipa pelos canais abaixo.
            </p>

            {/* E-mail */}
            <div className="mt-10">
              <h3
                className="
                  font-body
                  font-semibold
                  text-[20px]
                  mb-1
                "
              >
                Por e-mail
              </h3>

              <a
                href="mailto:geral@carloscurto.pt"
                className="
                  font-body
                  text-[17px]
                  text-[#1B1E23]
                  underline
                  underline-offset-4
                  decoration-[#1B1E23]/30
                  transition-all
                  duration-300
                  ease-out
                  hover:decoration-[#1B1E23]/70
                  hover:opacity-80
                "
              >
                geral@carloscurto.pt
              </a>
            </div>

            {/* Redes sociais */}
            <div className="mt-8">
              <h3 className="
                font-body
                font-semibold
                text-[20px]
                mb-3
              ">
                Através das redes sociais oficiais
              </h3>

              <div className="flex gap-1">
                <SocialLink
                  href="https://www.instagram.com/charlescurto.fr"
                  label="Instagram"
                >
                  <InstagramIcon />
                </SocialLink>

                <SocialLink
                  href="https://www.facebook.com/profile.php?id=61586301611184"
                  label="Facebook"
                >
                  <FacebookIcon />
                </SocialLink>
              </div>
            </div>
          </div>

          {/* =========================================================
             DIREITA — FORMULÁRIO
          ========================================================== */}
          <div>
            <h2
              className="
                font-title
                text-[36px]
                md:text-[42px]
                leading-[1.1]
                text-[#1F2E5A]
                mb-3
              "
            >
              Envie a sua mensagem
            </h2>
            <AnimatePresence mode="wait">

              {!sent ? (
                <motion.form
                  className="space-y-3"
                  key="contact-form"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setLoading(true);
                    setError(null);

                    const formData = new FormData(e.currentTarget);

                    const payload = {
                      firstName: formData.get("firstName"),
                      lastName: formData.get("lastName"),
                      email: formData.get("email"),
                      phone: formData.get("phone"),
                      message: formData.get("message"),
                    };

                    try {
                      const res = await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(payload),
                      });

                      if (!res.ok) throw new Error();

                      setSent(true);
                      (e.currentTarget as HTMLFormElement).reset();
                    } catch {
                      setError("Algo correu mal. Por favor, tente novamente.");
                    } finally {
                      setLoading(false);
                    }
                  }}
                >
                  {/* NOME */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-[15px]">Primeiro Nome*</label>
                      <input
                        name="firstName"
                        type="text"
                        required
                        className="mt-1 w-full rounded-md px-4 py-3 bg-white border border-[#E5E2DA] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="font-body text-[15px]">Último Nome*</label>
                      <input
                        name="lastName"
                        type="text"
                        required
                        className="mt-1 w-full rounded-md px-4 py-3 bg-white border border-[#E5E2DA] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* E-MAIL / TELEFONE */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-[15px]">Endereço de E-mail*</label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="mt-1 w-full rounded-md px-4 py-3 bg-white border border-[#E5E2DA] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="font-body text-[15px]">
                        Telefone{" "}
                        <span className="text-[13px] text-[#6B6B6B]">(opcional)</span>
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        className="mt-1 w-full rounded-md px-4 py-3 bg-white border border-[#E5E2DA] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* MENSAGEM */}
                  <div>
                    <label className="font-body text-[15px]">A sua mensagem*</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="mt-1 w-full rounded-md px-4 py-3 bg-white border border-[#E5E2DA] focus:outline-none resize-none"
                    />
                  </div>

                  {/* CONSENTIMENTO */}
                  <div className="flex items-start gap-3">
                    <input type="checkbox" required className="mt-1" />
                    <p className="font-body text-[14px] text-[#6B6B6B] leading-[1.5]">
                      Concordo que os meus dados sejam usados exclusivamente no âmbito deste contacto, conforme a{" "}
                      <a
                        href="/politica-de-privacidade"
                        className="underline hover:opacity-80 transition"
                      >
                        política de privacidade
                      </a>.
                    </p>
                  </div>

                  {/* SUBMETER */}
                  <div className="pt-4">
                    <Button variant="authority" type="submit">
                      {loading ? "A enviar…" : "Enviar mensagem"}
                    </Button>

                    {error && (
                      <p className="font-body text-[15px] text-red-600 mt-4">
                        {error}
                      </p>
                    )}
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  ref={successRef}
                  className="
                      mt-12
                      max-w-[420px]
                      font-body
                      text-[#1F2E5A]
                      space-y-4
                  "
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <p className="text-[20px] font-medium">
                    A sua mensagem foi enviada com sucesso.
                  </p>

                  <p className="text-[17px] leading-[1.6]">
                    O secretariado de <strong>Carlos Curto</strong> recebeu o seu pedido. Será tratado com atenção, e uma resposta será enviada o mais breve possível.
                  </p>

                  <p className="text-[16px] text-[#6B6B6B]">
                    Pode fechar esta página em total tranquilidade.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        text-[#1F2E5A]
        transition-all
        duration-300
        ease-out
        hover:opacity-70
        active:translate-y-[1px]
        active:opacity-60
      "
    >
      {children}
    </a>
  );
}

/* ---------- Ícones ---------- */

function InstagramIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 1 1-7.87 1.17" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
