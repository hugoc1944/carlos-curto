import type { Metadata } from "next";

/* ---------------------------------------------
   Metadata (Server-safe)
---------------------------------------------- */
export const metadata: Metadata = {
  title: "Política de Cookies | Carlos Curto",
  description:
    "Política de cookies do site Carlos Curto, explicando a utilização de cookies e rastreadores em conformidade com o RGPD e as recomendações da CNIL.",
};

/* ---------------------------------------------
   Page component
---------------------------------------------- */
export default function Page() {
  return (
    <section className="w-full pt-32 pb-40">
      <article className="max-w-[780px] mx-auto px-6">
        {/* Header */}
        <header className="mb-20">
          <h1 className="font-title text-[#1F2E5A] text-[40px] md:text-[56px] leading-[1.1]">
            Política de Cookies
          </h1>

          <p className="mt-6 font-body text-[15px] tracking-[0.18em] uppercase text-[#9A9A9A]">
            Informação & gestão de rastreadores
          </p>
        </header>

        {/* Content */}
        <div
          className="
            font-body
            text-[17px]
            md:text-[18px]
            leading-[1.65]
            md:leading-[1.7]
            text-[#2A2A2A]

            [&>h2]:mt-20
            [&>h2]:mb-6
            [&>h2]:font-title
            [&>h2]:text-[28px]
            [&>h2]:md:text-[32px]
            [&>h2]:text-[#1F2E5A]

            [&>p]:mb-4
            [&>ul]:mb-6
            [&>ul]:pl-6
            [&>ul>li]:mb-2
            [&>ul>li]:list-disc
          "
        >
          <p>
            Esta política de cookies é um guia essencial para compreender como o site de <strong>Carlos Curto</strong> utiliza cookies e rastreadores, em total conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) e as orientações da CNIL. O nosso propósito é oferecer-lhe clareza e tranquilidade ao navegar connosco.
          </p>

          <h2>1. O que é um cookie?</h2>

          <p>
            Um cookie é um pequeno ficheiro de texto armazenado no seu
            dispositivo (computador, tablet ou telemóvel) quando visita um site.
            Ele funciona como uma chave que nos ajuda a reconhecê-lo, analisar a navegação no site e oferecer uma experiência mais fluida e intuitiva.
          </p>

          <h2>2. Cookies estritamente necessários</h2>

          <p>
            Estes cookies são indispensáveis para que o site funcione corretamente. Eles garantem:
          </p>

          <ul>
            <li>A navegação eficiente pelo site</li>
            <li>O acesso a funcionalidades essenciais</li>
            <li>O envio e processamento de pedidos de consulta</li>
            <li>A proteção e segurança da sua experiência</li>
          </ul>

          <p>
            Como estes cookies são fundamentais, não exigem o seu consentimento e não podem ser desativados.
          </p>

          <h2>3. Cookies de medição de audiência</h2>

          <p>
            Mediante o seu consentimento, utilizamos cookies de medição de
            audiência através do <strong>Google Analytics</strong>. Estes cookies são uma ferramenta valiosa para entendermos melhor o tráfego no site e melhorar continuamente o conteúdo e a experiência que oferecemos.
          </p>

          <p>
            Os dados recolhidos são sempre anónimos e nunca permitem a sua identificação pessoal.
          </p>

          <p>
            Duração máxima de armazenamento: <strong>14 meses</strong>.
          </p>

          <h2>4. Cookies de marketing</h2>

          <p>
            Com o seu consentimento, também podemos utilizar cookies de marketing, usados para fins de medição publicitária através do <strong>Meta (Facebook / Instagram)</strong>.
          </p>

          <p>Estes cookies ajudam-nos a:</p>

          <ul>
            <li>Medir a eficácia das nossas campanhas de comunicação</li>
            <li>Criar públicos-alvo anónimos</li>
            <li>Evitar conteúdos irrelevantes ou inadequados</li>
          </ul>

          <p>
            Garantimos que nenhuma informação sensível ou pessoal é partilhada com terceiros.
          </p>

          <h2>5. Gestão das suas preferências</h2>

          <p>
            Na sua primeira visita ao site, um banner informativo permite-lhe aceitar, recusar ou personalizar os cookies não essenciais de acordo com as suas preferências.
          </p>

          <p>
            Pode ajustar as suas escolhas a qualquer momento clicando no link <strong>« Gestão de cookies »</strong> disponível no rodapé do site.
          </p>

          <h2>6. Contacto</h2>

          <p>
            Para qualquer dúvida ou informação adicional sobre a nossa política de cookies, não hesite em entrar em contacto connosco através da página <strong>Contacto</strong>.
          </p>

          <p className="mt-12 text-[15px] text-[#6B6B6B]">
            Última atualização: 16/01/2026
          </p>
        </div>
      </article>
    </section>
  );
}
