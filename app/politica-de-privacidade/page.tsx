import type { Metadata } from "next";

/* ---------------------------------------------
   Metadata (Server-safe)
---------------------------------------------- */
export const metadata: Metadata = {
  title: "Política de Privacidade | Carlos Curto",
  description:
    "Política de Privacidade do site de Carlos Curto, detalhando a recolha, utilização e proteção dos dados pessoais em conformidade com o RGPD.",
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
            Política de Privacidade
          </h1>

          <p className="mt-6 font-body text-[15px] tracking-[0.18em] uppercase text-[#9A9A9A]">
            Dados Pessoais & RGPD
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
            Esta Política de Privacidade tem como objetivo proporcionar clareza e tranquilidade aos utilizadores do site <strong>Carlos Curto</strong>, explicando como os seus dados pessoais são recolhidos, utilizados e protegidos, em total conformidade com os princípios do Regulamento Geral sobre a Proteção de Dados (RGPD).
          </p>

          <h2>1. Responsável pelo Tratamento</h2>

          <p>O site Carlos Curto é gerido por:</p>

          <ul>
            <li><strong>Hugo Alberto Soares Curto</strong></li>
            <li>ENI sob a designação <strong>WebtoGO</strong></li>
            <li>R. Conselheiro Luís de Magalhães n°31B, 3800-137 Aveiro, Portugal</li>
            <li>Telefone: +351 234 036 491</li>
            <li>Email: hello@webtogo.pt</li>
            <li>
              Website:{" "}
              <a
                href="https://www.webtogo.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  underline
                  underline-offset-4
                  transition-colors
                  hover:text-[#C7A36A]
                "
              >
                https://www.webtogo.pt
              </a>
            </li>
          </ul>

          <h2>2. Dados Recolhidos</h2>

          <p>Os dados pessoais recolhidos podem incluir:</p>

          <ul>
            <li>Nome e apelido</li>
            <li>Endereço de email</li>
            <li>Número de telefone</li>
            <li>Localização (Lisboa, Porto ou outra)</li>
            <li>Informações relacionadas com pedidos de consulta</li>
            <li>Mensagens enviadas através do formulário de contacto</li>
          </ul>

          <h2>3. Finalidades do Tratamento</h2>

          <ul>
            <li>Processamento de pedidos de contacto</li>
            <li>Gestão de pedidos de marcação de consultas</li>
            <li>Envio de emails automáticos relacionados com formulários</li>
            <li>Análise estatística de navegação</li>
            <li>Otimização de campanhas publicitárias</li>
          </ul>

          <h2>4. Ferramentas de Medição e Serviços de Terceiros</h2>

          <ul>
            <li>Google Analytics</li>
            <li>Google Tag Manager</li>
            <li>Google Ads</li>
            <li>Meta Pixel</li>
          </ul>

          <h2>5. Cookies</h2>

          <p>
            Este site utiliza cookies para fins técnicos, analíticos e
            publicitários. Para mais detalhes, consulte a política de cookies disponível numa página separada.
          </p>

          <h2>6. Conservação e Segurança</h2>

          <p>
            Os dados pessoais são guardados apenas pelo período estritamente necessário para cumprir os objetivos indicados e são protegidos por medidas adequadas de segurança, garantindo a sua integridade e confidencialidade.
          </p>

          <h2>7. Direitos dos Utilizadores</h2>

          <ul>
            <li>Direito de acesso</li>
            <li>Direito de retificação</li>
            <li>Direito ao apagamento</li>
            <li>Direito de oposição</li>
            <li>Direito à portabilidade</li>
          </ul>

          <p>
            Para exercer qualquer um destes direitos, envie o seu pedido para: <strong>hello@webtogo.pt</strong>
          </p>

          <h2>8. Atualização</h2>

          <p>
            Esta Política de Privacidade poderá ser ajustada a qualquer momento, refletindo alterações legais ou evoluções tecnológicas, com o objetivo de continuar a proteger os seus dados de forma transparente e responsável.
          </p>

          <p className="mt-12 text-[15px] text-[#6B6B6B]">
            Última atualização: 11/01/2026
          </p>
        </div>
      </article>
    </section>
  );
}
