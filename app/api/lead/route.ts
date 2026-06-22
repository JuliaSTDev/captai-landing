import { NextRequest, NextResponse } from "next/server";

// 🔧 Cole aqui a URL do webhook do seu fluxo n8n
const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL ?? "";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nome, whatsapp, escola } = body;

  if (!nome || !whatsapp || !escola) {
    return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
  }

  // Se não tiver webhook configurado, apenas loga (útil em dev)
  if (!N8N_WEBHOOK_URL) {
    console.log("[LEAD]", { nome, whatsapp, escola, ts: new Date().toISOString() });
    return NextResponse.json({ ok: true, dev: true });
  }

  try {
    const res = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, whatsapp, escola, origem: "landing-page", ts: new Date().toISOString() }),
    });

    if (!res.ok) throw new Error(`n8n respondeu ${res.status}`);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[LEAD ERROR]", err);
    return NextResponse.json({ error: "Erro ao enviar para o n8n." }, { status: 500 });
  }
}
