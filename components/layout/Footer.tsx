"use client";

import { VeilLink } from "@/components/navigation/VeilLink";

export default function Footer() {
  return (
    <footer className="relative z-[10]">
      {/* RODAPÉ PRINCIPAL */}
      <section className="bg-[#F3F1EC]">
        <div className="mx-auto max-w-[1100px] px-6 py-16">
          {/* Logótipo */}
          <div className="mb-12 text-center">
            <p className="font-brand text-[56px] md:text-[60px] text-[#1F2E5A] leading-none">
              Carlos Curto
            </p>
            <p className="mt-3 text-[13px] tracking-[0.4em] uppercase text-[#1F2E5A]/90">
              Terapeuta · Harmonização · Acompanhamento
            </p>
          </div>

          {/* Conteúdo */}
          <div className="grid gap-12 md:grid-cols-[1.6fr_1.2fr]">
            {/* ESQUERDA — GRUPOS DE NAVEGAÇÃO */}
            <div className="grid gap-10 sm:grid-cols-2">
              <FooterGroup title="Navegação">
                <FooterLink href="/">Início</FooterLink>
                <FooterLink href="/internacional">Internacional</FooterLink>
                <FooterLink href="/reflexoes">Reflexoes</FooterLink>
                <FooterLink href="/contacto">Contacto</FooterLink>
              </FooterGroup>

              <FooterGroup title="Consultas">
                <FooterLink href="/consultas">
                  Consultas Privadas
                </FooterLink>
                <FooterLink href="/coaching">
                  Coaching Exclusivo
                </FooterLink>
                <FooterLink href="/consultas#consultas-modalidades">
                  Urgência
                </FooterLink>
              </FooterGroup>

              <FooterGroup title="Sobre Mim">
                <FooterLink href="/#sobre-carlos-curto">
                  Quem Sou
                </FooterLink>
              </FooterGroup>

              <FooterGroup title="Legal">
                <FooterLink href="/politica-de-privacidade">
                  Política de Privacidade
                </FooterLink>
                <FooterLink href="/politica-de-cookies">
                  Política de Cookies
                </FooterLink>
                <FooterLink
                  onClick={() => {
                    localStorage.removeItem("cc_cookie_consent");
                    location.reload();
                  }}
                >
                  Gestão de Cookies
                </FooterLink>
              </FooterGroup>
            </div>

            {/* DIREITA — CITAÇÃO & CTA */}
            <div className="flex flex-col justify-start">
              <p className="font-title text-[36px] md:text-[40px] leading-[1.2] text-[#1F2E5A]">
                A paz interior
                <br />
                abre sempre o caminho
                <br />
                certo.
              </p>

              <VeilLink
                href="/contacto"
                className="
                  mt-6
                  inline-flex
                  w-fit
                  items-center
                  justify-center
                  bg-[#1F2E5A]
                  px-10
                  py-4
                  text-[14px]
                  tracking-[0.3em]
                  uppercase
                  cursor-pointer
                  text-white
                  transition-all
                  duration-400
                  ease-out
                  hover:opacity-90
                  active:translate-y-[1px]
                  active:opacity-85
                "
              >
                Tem uma pergunta? Entre em contacto
              </VeilLink>
            </div>
          </div>
        </div>
      </section>

      {/* SEPARADOR */}
      <div className="h-[2px] bg-white shadow-[0_2px_5.1px_rgba(0,0,0,0.05)]" />

      {/* REDES SOCIAIS */}
      <section className="bg-[#F3F1EC]">
        <div className="mx-auto max-w-[1100px] px-6 py-16 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <p
            className="
              font-title
              text-[30px]
              md:text-[32px]
              leading-[1.25]
              tracking-[0.08em]
              uppercase
              text-[#1F2E5A]
              text-left
            "
          >
            As <span className="font-semibold">únicas redes oficiais</span>
            <br />
            onde pode encontrar-me
          </p>

          <div className="flex items-center gap-8">
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
      </section>

      {/* SEPARADOR */}
      <div className="h-[2px] bg-white shadow-[0_2px_5.1px_rgba(0,0,0,0.05)]" />

      {/* BARRA INFERIOR */}
      <section className="bg-[#1F2E5A]">
        <div className="mx-auto max-w-[1100px] px-6 py-4">
          <p className="text-center text-[15px] tracking-wide text-white/80">
            © 2026 Carlos Curto. Todos os direitos reservados – Concepção:{" "}
            <a
              href="https://webtogo.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="
                underline
                transition-opacity
                duration-300
                hover:opacity-90
              "
            >
              webtogo
            </a>
          </p>
        </div>
      </section>
    </footer>
  );
}

/* ---------- Subcomponentes ---------- */

function FooterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-1 font-title text-[21px] md:text-[18px] font-semibold tracking-[0.28em] uppercase text-[#1F2E5A]">
        {title}
      </p>
      <div className="flex flex-col gap-1 font-title text-[21px] md:text-[19px] text-[#1F2E5A]">
        {children}
      </div>
    </div>
  );
}

function FooterLink({
  href,
  onClick,
  children,
}: {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const className = `
    relative
    block
    w-fit
    cursor-pointer
    transition-all
    duration-300
    ease-out
    hover:opacity-75
    active:translate-y-[1px]
    active:opacity-70
  `;

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={className}
      >
        {children}
      </button>
    );
  }

  return (
    <VeilLink href={href!} className={className}>
      {children}
    </VeilLink>
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
      width="42"
      height="42"
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
      width="42"
      height="42"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
