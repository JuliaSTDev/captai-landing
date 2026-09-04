import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://captai.com.br";

const PAGE_TITLE = "Captaí — Caso Real: Escola de Idiomas | JS Soluções";
const PAGE_DESCRIPTION =
  "Como o agente 'Alex' automatizou 100% do funil de vendas de uma escola de idiomas — do lead ao contrato — via WhatsApp, n8n e Groq Llama 4 Scout, respondendo em menos de 2 segundos.";

export const metadata: Metadata = {
  title: {
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/captai",
  },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/captai`,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Case: Escola de Idiomas", item: `${SITE_URL}/captai` },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Captaí — Do \"Oi\" no WhatsApp à matrícula assinada",
  description: PAGE_DESCRIPTION,
  author: { "@type": "Person", name: "Julia Maria dos Santos" },
  publisher: { "@type": "Organization", name: "JS Soluções" },
  datePublished: "2026-06-01",
  dateModified: "2026-08-06",
  mainEntityOfPage: `${SITE_URL}/captai`,
};

function LogoMark({ size = 32 }: { size?: number }) {
  const r = Math.round(size * 0.22);
  const dot = Math.round(size * 0.26);
  return (
    <div style={{ width: size, height: size, position: "relative", flexShrink: 0 }}>
      <div style={{
        width: size, height: size, background: "#EA580C",
        borderRadius: r, display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <span style={{ fontSize: size * 0.38, fontWeight: 800, color: "#fff", letterSpacing: "-0.5px", fontFamily: "system-ui" }}>JS</span>
      </div>
      <div style={{
        position: "absolute", bottom: -2, right: -2,
        width: dot, height: dot, background: "#0369A1",
        borderRadius: "50%", border: `${Math.max(1.5, size * 0.04)}px solid #1C1917`,
      }} />
    </div>
  );
}

const IconWA = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const IconLinkedIn = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const IconInstagram = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const METRICS = [
  { value: "< 2s",   label: "Tempo de resposta ao lead" },
  { value: "7 WFs",  label: "Workflows n8n independentes" },
  { value: "100%",   label: "Funil de vendas automatizado" },
  { value: "0h",     label: "Follow-up manual por semana" },
];

const STACK = [
  { name: "n8n (self-hosted)",        desc: "Orquestração dos 7 workflows" },
  { name: "Groq Llama 4 Scout",       desc: "LLM dos agentes e classificador" },
  { name: "Google Gemini 2.5 Flash",  desc: "Transcrição de mensagens de áudio" },
  { name: "Evolution API",            desc: "WhatsApp (Docker self-hosted)" },
  { name: "PostgreSQL",               desc: "Leads, matrículas, unidades, agendamentos" },
  { name: "Redis",                    desc: "Buffer anti-debounce 15s + memória de conversa" },
];

const FLOW_STEPS = [
  {
    wf: "WF1", title: "Orquestrador",
    desc: "Recebe o webhook da Evolution API, normaliza texto e áudio (Gemini transcribe), bufferiza 15s para anti-debounce e classifica a intenção do lead com Groq Llama 4 Scout antes de rotear para o agente correto.",
    tags: ["Webhook", "Redis buffer 15s", "Groq classifier", "Evolution API"],
  },
  {
    wf: "WF2", title: "Sondagem",
    desc: "O agente Alex coleta objetivo (Carreira / Viagem / Acadêmico), nível, unidade, disponibilidade e dados pessoais (nome, CPF, e-mail). Salva incrementalmente no PostgreSQL via JSONB merge. Nunca avança sem e-mail válido.",
    tags: ["Groq Llama 4 Scout", "Redis Chat Memory", "PostgreSQL JSONB"],
  },
  {
    wf: "WF3", title: "Pitch",
    desc: "Apresentação personalizada por motivação e nível acadêmico. Foco em carreira para quem quer crescer profissionalmente, em autonomia para quem vai viajar. Usa gatilho de escassez (vagas limitadas na unidade).",
    tags: ["Personalização por motivação", "Groq", "Redis Memory"],
  },
  {
    wf: "WF4", title: "Negociação",
    desc: "Apresenta mensalidade e matrícula, verifica código promocional/convênio, coleta forma de pagamento (Cartão VISA/MAST/AMEX até 12x, Boleto ou PIX) e confirma CPF e endereço antes do resumo final.",
    tags: ["Cartão / Boleto / PIX", "Groq", "PostgreSQL"],
  },
  {
    wf: "WF5", title: "Matrícula",
    desc: "Confirma todos os dados com o lead, chama o workflow de processamento e informa que o link de pagamento foi enviado por e-mail. Matrícula só é confirmada após o pagamento — nunca antes.",
    tags: ["Confirmação explícita", "Link de pagamento", "PostgreSQL"],
  },
  {
    wf: "WF6", title: "Retorno Automático",
    desc: "Quando o lead quer pausar e retomar depois, o agente agenda uma remarcação. O scheduler roda a cada minuto e dispara a mensagem exata no horário combinado — sem nenhuma intervenção humana.",
    tags: ["Scheduler n8n", "Redis", "Evolution API"],
  },
  {
    wf: "WF7", title: "Processamento de Matrícula",
    desc: "Gera protocolo único (CI-{ano}-{6 dígitos}), link de pagamento e registra a pré-matrícula. Em produção será integrado ao CRM e gateway de pagamento real.",
    tags: ["Protocolo automático", "Link de pagamento", "Em integração"],
  },
];

const PROBLEMS = [
  "Leads que mandavam mensagem à noite não tinham resposta até o dia seguinte — e já haviam escolhido outra escola",
  "A secretária precisava fazer follow-up manualmente com cada interessado e esquecia leads no meio do funil",
  "Sem visibilidade de quantos leads entravam, qual idioma queriam ou qual era a taxa de conversão real",
  "Processo de geração do contrato era manual: montar, enviar por WhatsApp, esperar — tudo dependia de uma pessoa",
];

const ALEX_CAPABILITIES = [
  "Atende texto e áudio — transcreve áudio automaticamente via Gemini",
  "Roteia entre fases dinamicamente: lead em Sondagem pergunta preço → vai direto para Negociação",
  "Usa a mesma memória de conversa entre todos os workflows (Redis Chat Memory, chave = WhatsApp do lead)",
  "Divide respostas em partes de até 150 caracteres com 4s de intervalo — comportamento natural",
  "Nunca inventa unidades — consulta o banco antes de confirmar disponibilidade",
  "Agenda retorno automático quando lead precisa de mais tempo",
];

const WA_LINK = "https://wa.me/5511915032373?text=Ol%C3%A1%2C+vim+pelo+site+e+quero+um+diagn%C3%B3stico+gratuito+do+Capta%C3%AD";
const LINKEDIN_LINK = "https://www.linkedin.com/in/js-solu%C3%A7%C3%B5es-9a22b9426/";
const INSTAGRAM_LINK = "https://www.instagram.com/jssolucoes.ia/";

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CaptaiCaseStudy() {
  return (
    <div className="bg-navy min-h-screen text-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-navy/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <LogoMark size={32} />
            <span className="font-bold text-lg tracking-tight">
              JS <span className="text-teal-light">Soluções</span>
            </span>
          </Link>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg gradient-teal text-white hover:opacity-90 transition-opacity"
          >
            Diagnóstico gratuito
          </a>
        </div>
      </header>

      <main className="pt-16">

        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="max-w-5xl mx-auto px-6 pt-6 text-xs text-stone-500">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-stone-300 transition-colors">Início</Link></li>
            <li aria-hidden>/</li>
            <li className="text-stone-300">Case: Escola de Idiomas</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="relative py-16 overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-3xl pointer-events-none"
            style={{ background: "rgba(234,88,12,0.07)" }}
          />
          <div className="relative max-w-5xl mx-auto px-6">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-light">Case Study</span>
              <span className="text-stone-600">·</span>
              <span className="text-xs text-stone-500">MVP v3.0 · Junho 2026</span>
              <span className="text-stone-600">·</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(234,88,12,0.15)", color: "#FB923C", border: "1px solid rgba(234,88,12,0.3)" }}>
                Escola de Idiomas
              </span>
              <span className="text-stone-600">·</span>
              <a
                href="https://github.com/JuliaSTDev/n8n-matricula-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-stone-400 hover:text-teal-light transition-colors flex items-center gap-1"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Ver código
              </a>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 max-w-4xl">
              Captaí —{" "}
              <span className="text-gradient">Do &quot;Oi&quot; no WhatsApp à matrícula assinada.</span>
            </h1>

            <p className="text-lg text-stone-400 max-w-2xl mb-12 leading-relaxed">
              O agente <strong className="text-white">Alex</strong> conduz leads por todo o funil de vendas de uma escola de idiomas
              — Sondagem → Pitch → Negociação → Matrícula — respondendo em menos de 2 segundos,
              sem nenhum operador humano.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
              {METRICS.map((m) => (
                <div key={m.label} className="bg-navy-light border border-white/5 rounded-2xl p-5">
                  <div className="text-3xl font-extrabold text-gradient mb-1">{m.value}</div>
                  <div className="text-xs text-stone-400 leading-snug">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Demo video */}
            <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-navy-light">
              <video
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full rounded-2xl"
                style={{ maxHeight: 600 }}
              >
                <source src="/demo-flowkit.mp4" type="video/mp4" />
              </video>
              <div className="px-5 py-3 border-t border-white/5 flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-stone-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <p className="text-xs text-stone-500">Demo em ambiente de cliente parceiro — nome da escola preservado por acordo de confidencialidade.</p>
              </div>
            </div>
          </div>
        </section>

        {/* O Problema */}
        <section className="py-20 bg-navy-light/50">
          <div className="max-w-5xl mx-auto px-6">
            <span className="text-teal-light text-xs font-semibold uppercase tracking-widest mb-4 block">O Problema</span>
            <h2 className="text-3xl font-bold mb-4">Uma escola perdendo matrículas todo dia sem saber.</h2>
            <p className="text-stone-400 mb-10 max-w-2xl leading-relaxed">
              A escola atendia bem quem aparecia presencialmente. Os leads digitais eram o ponto cego —
              interessados que mandavam mensagem no WhatsApp e não recebiam resposta rápida o suficiente
              para continuar interessados.
            </p>
            <ul className="space-y-4 max-w-3xl">
              {PROBLEMS.map((p, i) => (
                <li key={i} className="flex gap-4 bg-navy border border-white/5 rounded-xl p-5">
                  <span className="text-red-400 font-bold text-sm mt-0.5 shrink-0">✗</span>
                  <span className="text-stone-300 text-sm leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Alex */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <span className="text-teal-light text-xs font-semibold uppercase tracking-widest mb-4 block">A Solução</span>
            <h2 className="text-3xl font-bold mb-4">Conheça Alex — o agente de vendas da escola.</h2>
            <p className="text-stone-400 mb-10 max-w-2xl leading-relaxed">
              Alex é um personagem construído com <strong className="text-white">Groq Llama 4 Scout</strong>, experiente
              em vendas educacionais. Ele conduz o lead por todas as fases do funil com memória compartilhada
              entre workflows — o lead nunca precisa repetir nenhuma informação.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
              {ALEX_CAPABILITIES.map((c, i) => (
                <div key={i} className="flex gap-3 bg-navy-light border border-white/5 rounded-xl p-4">
                  <span className="text-teal-light mt-0.5 shrink-0 text-sm">✓</span>
                  <span className="text-stone-300 text-sm leading-relaxed">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflows */}
        <section className="py-20 bg-navy-light/50">
          <div className="max-w-5xl mx-auto px-6">
            <span className="text-teal-light text-xs font-semibold uppercase tracking-widest mb-4 block">Arquitetura</span>
            <h2 className="text-3xl font-bold mb-4">7 workflows. Do &quot;Oi&quot; ao contrato.</h2>
            <p className="text-stone-400 mb-12 max-w-2xl leading-relaxed">
              Cada etapa é um workflow independente no n8n — testável, monitorável e reaproveitável
              para qualquer negócio. O classificador de intenção garante que o lead sempre vá para o agente
              certo, mesmo que mude de assunto no meio da conversa.
            </p>
            <div className="space-y-3">
              {FLOW_STEPS.map((step, i) => (
                <div key={step.wf} className="flex gap-5 bg-navy border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors">
                  <div className="shrink-0 flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-xl gradient-teal flex flex-col items-center justify-center">
                      <span className="text-white font-bold text-xs">{step.wf}</span>
                    </div>
                    {i < FLOW_STEPS.length - 1 && (
                      <div className="w-px flex-1 bg-white/8 min-h-[8px]" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white mb-1.5">{step.title}</h3>
                    <p className="text-stone-400 text-sm leading-relaxed mb-3">{step.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-lg border border-white/8 text-stone-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://github.com/JuliaSTDev/n8n-matricula-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-lg hover:border-white/20"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Ver código no GitHub
              </a>
              <a
                href="https://github.com/JuliaSTDev/n8n-matricula-whatsapp/blob/main/docs/arquitetura.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-lg hover:border-white/20"
              >
                Documentação técnica →
              </a>
            </div>
          </div>
        </section>

        {/* Stack */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <span className="text-teal-light text-xs font-semibold uppercase tracking-widest mb-4 block">Stack Técnica</span>
            <h2 className="text-3xl font-bold mb-10">Tecnologias utilizadas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {STACK.map((s) => (
                <div key={s.name} className="bg-navy-light border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors">
                  <p className="font-semibold text-white mb-1">{s.name}</p>
                  <p className="text-stone-500 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resultados */}
        <section className="py-20 bg-navy-light/50">
          <div className="max-w-5xl mx-auto px-6">
            <span className="text-teal-light text-xs font-semibold uppercase tracking-widest mb-4 block">Resultados</span>
            <h2 className="text-3xl font-bold mb-10">O que o sistema entrega</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Resposta em < 2 segundos",        desc: "Leads que mandam mensagem recebem resposta antes de pensar em ir para outra escola. Buffer de 15s agrupa mensagens antes de processar." },
                { title: "Zero leads esquecidos",           desc: "WF6 agenda retorno automático quando o lead quer pausar. Scheduler dispara a mensagem no horário exato combinado." },
                { title: "Equipe só fecha deals",           desc: "Alex coleta todos os dados, qualifica, apresenta e negocia. A equipe entra só quando o lead está pronto para assinar." },
                { title: "Funil 100% rastreável",           desc: "Cada lead tem fase_atual, metadados JSONB e log de interações no PostgreSQL — taxa de conversão visível em tempo real." },
              ].map((r) => (
                <div key={r.title} className="bg-navy border border-white/5 rounded-2xl p-6">
                  <div className="w-2 h-2 rounded-full mb-4" style={{ background: "#EA580C" }} />
                  <h3 className="font-semibold text-white mb-2">{r.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Quer o Captaí no seu negócio?</h2>
            <p className="text-stone-400 mb-8 leading-relaxed">
              O Captaí é configurado para o funil de vendas do seu negócio — não é um produto genérico.
              Agende um diagnóstico gratuito de 30 minutos e mostramos exatamente como
              implementar na sua operação.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-teal text-white font-semibold text-lg hover:opacity-90 transition-opacity"
              style={{ boxShadow: "0 8px 32px rgba(234,88,12,0.25)" }}
            >
              Quero meu diagnóstico gratuito
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
            <p className="mt-4 text-sm text-stone-500">Gratuito. Sem compromisso. Respondemos em até 1 hora.</p>
            <p className="mt-8 text-sm text-stone-500">
              Tem uma escola de idiomas ou curso?{" "}
              <Link href="/escolas" className="text-teal-light hover:text-white transition-colors">
                Veja a página dedicada pra esse nicho →
              </Link>
            </p>
          </div>
        </section>

      </main>

      <footer className="border-t border-white/5 pt-16 pb-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <Link href="/" className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
                <LogoMark size={28} />
                <span className="font-bold text-lg tracking-tight">
                  JS <span className="text-teal-light">Soluções</span>
                </span>
              </Link>
              <p className="text-sm text-stone-500 leading-relaxed">
                Agente de atendimento com IA no WhatsApp para negócios que não podem perder leads.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-4">Produto</p>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#como-funciona" className="text-stone-400 hover:text-white transition-colors">Como funciona</Link></li>
                <li><Link href="/#faq" className="text-stone-400 hover:text-white transition-colors">Perguntas frequentes</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-4">Empresa</p>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#quem-somos" className="text-stone-400 hover:text-white transition-colors">Quem somos</Link></li>
                <li>
                  <a href="https://github.com/JuliaSTDev/n8n-matricula-whatsapp" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-4">Contato</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors">
                    (11) 91503-2373
                  </a>
                </li>
                <li>
                  <a href="mailto:devjuliama@gmail.com" className="text-stone-400 hover:text-white transition-colors">
                    devjuliama@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-sm text-stone-500">© {new Date().getFullYear()} JS Soluções · Captaí</span>
            <div className="flex items-center gap-5">
              <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-stone-500 hover:text-white transition-colors">
                <IconLinkedIn />
              </a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-stone-500 hover:text-white transition-colors">
                <IconInstagram />
              </a>
              <a
                href="https://github.com/JuliaSTDev/n8n-matricula-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-stone-500 hover:text-stone-300 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
