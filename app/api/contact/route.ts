import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    let {
      firstName,
      lastName,
      email,
      phone,
      message,
    } = body;

    // Normalize
    firstName = firstName?.trim();
    lastName = lastName?.trim();
    email = email?.trim();
    phone = phone?.trim();
    message = message?.trim();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Faltam campos obrigatórios. Por favor, preencha todos os campos indicados." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "O endereço de e-mail fornecido não é válido. Por favor, verifique e tente novamente." },
        { status: 400 }
      );
    }

    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    /* =========================================================
       1. EMAIL PARA O ADMINISTRADOR (PRIVADO, DETALHADO)
    ========================================================== */
    const adminResult = await resend.emails.send({
      from: "Site Carlos Curto <no-reply@consultas.carloscurto.pt>",
      to: [process.env.CONTACT_EMAIL!],
      replyTo: email,
      subject: "Nova mensagem recebida - Site Carlos Curto",
      html: `
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f6f2;padding:32px 0;">
          <tr>
            <td align="center">
              <table width="520" cellpadding="0" cellspacing="0" style="background:#ffffff;padding:32px;font-family:Georgia,serif;color:#1B1E23;">
                <tr>
                  <td style="font-size:20px;font-weight:600;padding-bottom:24px;">
                    Uma nova mensagem chegou
                  </td>
                </tr>

                <tr>
                  <td style="font-size:15px;line-height:1.6;">
                    <strong>Nome:</strong> ${firstName} ${lastName}<br />
                    <strong>Email:</strong> ${email}<br />
                    ${phone ? `<strong>Telefone:</strong> ${phone}<br />` : ""}
                  </td>
                </tr>

                <tr>
                  <td style="padding:24px 0;">
                    <hr style="border:none;border-top:1px solid #E5E2DA;" />
                  </td>
                </tr>

                <tr>
                  <td style="font-size:15px;line-height:1.7;">
                    ${safeMessage}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      `,
    });

    if (adminResult.error || !adminResult.data?.id) {
      throw new Error("Falha no envio do email para o administrador.");
    }

    /* =========================================================
       2. CONFIRMAÇÃO PARA O UTILIZADOR (ELEGANTE E HUMANO)
    ========================================================== */
    await resend.emails.send({
      from: "Carlos Curto - Secretaria <no-reply@consultas.carloscurto.pt>",
      to: [email],
      subject: "A sua mensagem foi recebida com sucesso",
      html: `
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f6f2;padding:32px 0;">
          <tr>
            <td align="center">
              <table width="520" cellpadding="0" cellspacing="0" style="background:#ffffff;padding:32px;font-family:Georgia,serif;color:#1B1E23;">
                
                <tr>
                  <td style="font-size:18px;padding-bottom:20px;">
                    Caro(a) ${firstName},
                  </td>
                </tr>

                <tr>
                  <td style="font-size:15px;line-height:1.7;padding-bottom:16px;">
                    A sua mensagem foi enviada para a Secretaria de
                    <strong>Carlos Curto</strong>. 
                  </td>
                </tr>

                <tr>
                  <td style="font-size:15px;line-height:1.7;padding-bottom:16px;">
                    Garantimos que será lida com a máxima atenção e faremos os possíveis para responder com brevidade, respeitando a ordem das mensagens recebidas.
                  </td>
                </tr>

                <tr>
                  <td style="font-size:15px;line-height:1.7;">
                    Com profunda gratidão,<br />
                    <strong>A Secretaria de Carlos Curto</strong>
                  </td>
                </tr>

                <tr>
                  <td style="padding-top:28px;">
                    <hr style="border:none;border-top:1px solid #E5E2DA;" />
                  </td>
                </tr>

                <tr>
                  <td style="font-size:12px;color:#6B6B6B;padding-top:12px;">
                    Esta é uma mensagem automática para confirmar o recebimento. 
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Erro no formulário de contacto:", error);
    return NextResponse.json(
      { error: "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde." },
      { status: 500 }
    );
  }
}
