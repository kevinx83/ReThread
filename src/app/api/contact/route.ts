// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

// Log once at module load to confirm env present
console.log("[contact] RESEND_API_KEY present:", Boolean(process.env.RESEND_API_KEY));

function json(status: number, body: any) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function escapeHtml(s: string) {
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return json(500, { error: "RESEND_API_KEY is missing (.env.local) — restart dev server after adding." });
    }

    const { name, email, subject = "New Contact Form Message", message } = await req.json().catch(e => {
      throw new Error("Invalid JSON body: " + (e?.message || e));
    });

    if (!name || !email || !message) {
      return json(400, { error: "Missing required fields (name, email, message)." });
    }

    const resend = new Resend(apiKey);
    const to = process.env.EMAIL_TO || "rethreadfoundation@gmail.com";
    const from = process.env.EMAIL_FROM || "Re:Thread <onboarding@resend.dev>";

    const html = `
      <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial">
        <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:12px 0"/>
        <pre style="white-space:pre-wrap;font-family:ui-monospace, SFMono-Regular, Menlo, monospace">${escapeHtml(message)}</pre>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email, // camelCase
      subject: `[Re:Thread] ${subject}`,
      html,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return json(500, { error: error.message || String(error) });
    }

    return json(200, { ok: true, id: data?.id || null });
  } catch (e: any) {
    console.error("[contact] API exception:", e);
    return json(500, { error: e?.message || String(e) || "Send failed (exception)" });
  }
}

export async function GET() {
  return json(200, { ok: true, health: "contact api ready" });
}
