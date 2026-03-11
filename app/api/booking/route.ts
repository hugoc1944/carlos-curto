import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/* =========================================================
Helpers
========================================================= */

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

const SERVICE_LABELS: Record<string, string> = {
  classic: "Consulta Clássica",
  signature: "Sessão Assinatura",
  urgent: "Consulta Urgente",
};

const MODE_LABELS: Record<string, string> = {
  presential: "Presencial",
  phone: "Por telefone",
};

const TIME_LABELS: Record<string, string> = {
  morning: "Manhã (07h - 12h)",
  afternoon: "Tarde (14h - 18h)",
  night: "Noite (20h - 22h)",
};

/* =========================================================
POST
========================================================= */

export async function POST(req: Request) {
  try {
    const body = await req.json();

    let {
      firstName,
      lastName,
      email,
      phone,
      availability,
      serviceType,
      mode,
      date,
      timeSlot,
      company,
      elapsedTime,
    } = body;

    /* ---------- Spam protection ---------- */

    if (company && company.length > 0) {
      return NextResponse.json({ success: true });
    }

    if (typeof elapsedTime === "number" && elapsedTime < 3000) {
      return NextResponse.json({ success: true });
    }

    /* ---------- Normalize ---------- */

    firstName = firstName?.trim();
    lastName = lastName?.trim();
    email = email?.trim();
    phone = phone?.trim();
    availability = availability?.trim();

    /* ---------- Validation ---------- */

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !serviceType ||
      !mode ||
      (mode !== "presential" && (!date || !timeSlot))
    ) {
      return NextResponse.json(
        { error: "Por favor preencha todos os campos obrigatórios." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Endereço de email inválido." },
        { status: 400 }
      );
    }

    const serviceLabel = SERVICE_LABELS[serviceType] ?? serviceType;
    const modeLabel = MODE_LABELS[mode] ?? mode;
    const timeLabel = TIME_LABELS[timeSlot] ?? timeSlot;

    const formattedDate = date
      ? new Date(date).toLocaleDateString("pt-PT", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : null;

    /* =========================================================
    1. EMAIL PARA SECRETARIA
    ========================================================== */

    const adminResult = await resend.emails.send({
      from: "Site Carlos Curto <no-reply@consultas.carloscurto.pt>",
      to: [process.env.CONTACT_EMAIL!],
      replyTo: email,
      subject: `Pedido de Consulta - ${serviceLabel}`,
      html: `
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f6f2;padding:32px 0;">
<tr>
<td align="center">

<table width="520" cellpadding="0" cellspacing="0" style="background:#ffffff;padding:32px;font-family:Georgia,serif;color:#1B1E23;">

<tr>
<td style="font-size:20px;font-weight:600;padding-bottom:24px;">
Novo pedido de consulta
</td>
</tr>

<tr>
<td style="font-size:15px;line-height:1.7;">
<strong>Tipo:</strong> ${serviceLabel}<br/>
<strong>Modo:</strong> ${modeLabel}<br/>
<strong>Data:</strong> ${
        mode === "presential" ? "A definir" : formattedDate
      }<br/>
<strong>Horário:</strong> ${
        mode === "presential" ? "A definir" : timeLabel
      }<br/><br/>

<strong>Nome:</strong> ${firstName} ${lastName}<br/>
<strong>Email:</strong> ${email}<br/>
<strong>Telefone:</strong> ${phone}
</td>
</tr>

${
  availability
    ? `
<tr>
<td style="padding-top:20px;font-size:15px;line-height:1.7;">
<strong>Disponibilidades adicionais:</strong><br/>
${escapeHtml(availability).replace(/\n/g, "<br />")}
</td>
</tr>
`
    : ""
}

<tr>
<td style="padding-top:28px;">
<hr style="border:none;border-top:1px solid #E5E2DA;" />
</td>
</tr>

<tr>
<td style="font-size:13px;color:#6B6B6B;padding-top:12px;">
Mensagem gerada automaticamente através do site.
</td>
</tr>

</table>

</td>
</tr>
</table>
`,
    });

    if (adminResult.error || !adminResult.data?.id) {
      console.error("Resend admin error:", adminResult.error);
      throw new Error("Falha no envio do email para a secretaria.");
    }

    /* =========================================================
    2. CONFIRMAÇÃO PARA CLIENTE
    ========================================================== */

    await resend.emails.send({
      from: "Secretaria | Carlos Curto <geral@consultas.carloscurto.pt>",
      to: [email],
      subject: "O seu pedido de consulta foi recebido",
      html: `
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f6f2;padding:32px 0;">
<tr>
<td align="center">

<table width="520" cellpadding="0" cellspacing="0" style="background:#ffffff;padding:32px;font-family:Georgia,serif;color:#1B1E23;">

<tr>
<td style="font-size:18px;padding-bottom:20px;">
Olá ${firstName},
</td>
</tr>

<tr>
<td style="font-size:15px;line-height:1.7;padding-bottom:18px;">
Recebemos o seu pedido de consulta com sucesso.
A secretaria de <strong>Carlos Curto</strong> irá analisá-lo com atenção.
</td>
</tr>

<tr>
<td style="font-size:15px;line-height:1.7;padding-bottom:24px;">
Entraremos em contacto consigo por telefone muito em breve
para confirmar os detalhes da consulta.
</td>
</tr>

<tr>
<td style="background:#f7f6f2;border-radius:12px;padding:20px 22px;font-size:14px;line-height:1.7;">

<strong style="display:block;font-size:15px;margin-bottom:10px;">
Resumo do seu pedido
</strong>

<strong>Tipo de consulta:</strong> ${serviceLabel}<br/>
<strong>Modo:</strong> ${modeLabel}<br/>

${
  mode === "presential"
    ? `
<strong>Data:</strong> A definir<br/>
<strong>Horário:</strong> A definir
`
    : `
<strong>Data:</strong> ${formattedDate}<br/>
<strong>Horário:</strong> ${timeLabel}
`
}

</td>
</tr>

<tr>
<td style="font-size:14px;line-height:1.7;padding-top:22px;">
Não é necessária qualquer ação da sua parte neste momento.
Os detalhes finais serão confirmados pela nossa equipa.
</td>
</tr>

<tr>
<td style="font-size:15px;line-height:1.7;padding-top:22px;">
Com os melhores cumprimentos,<br/>
<strong>Secretaria de Carlos Curto</strong>
</td>
</tr>

<tr>
<td style="padding-top:28px;">
<hr style="border:none;border-top:1px solid #E5E2DA;" />
</td>
</tr>

<tr>
<td style="font-size:12px;color:#6B6B6B;padding-top:12px;">
Esta é uma mensagem automática de confirmação.
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
    console.error("Erro ao processar marcação:", error);

    return NextResponse.json(
      { error: "Erro ao enviar o pedido de consulta." },
      { status: 500 }
    );
  }
}