import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://captai.com.br";

const PAGE_TITLE = "Agente de IA no WhatsApp para Escolas de Idiomas | Captaí";
const PAGE_DESCRIPTION =
  "Automatize a matrícula e o atendimento de leads da sua escola de idiomas ou curso no WhatsApp com IA. Caso real: resposta em menos de 2s, funil 100% automatizado. Diagnóstico gratuito.";

export const metadata: Metadata = {
  title: {
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
  keywords: [
    "agente whatsapp escola de idiomas",
    "automatizar matrícula whatsapp",
    "atendimento automático escola de idiomas",
    "chatbot para escola de idiomas",
    "sistema de matrícula automatizado",
    "ia para vender curso pelo whatsapp",
  ],
  alternates: {
    canonical: "/escolas",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/escolas`,
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
    { "@type": "ListItem", position: 2, name: "Escolas de Idiomas e Cursos", item: `${SITE_URL}/escolas` },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quanto custa automatizar a matrícula da minha escola?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Varia conforme o tamanho do funil e as integrações necessárias (sistema de gestão, gateway de pagamento etc.). Fazemos esse levantamento no diagnóstico gratuito e te passamos uma proposta sob medida — não existe pacote fechado.",
      },
    },
    {
      "@type": "Question",
      name: "Funciona pra escola pequena, com poucos leads por mês?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O agente é configurado pro volume e pro funil da sua escola — não existe um mínimo de leads pra fazer sentido. Escolas pequenas costumam sentir o impacto mais rápido, porque cada lead perdido pesa mais no caixa.",
      },
    },
    {
      "@type": "Question",
      name: "Dá pra integrar com o sistema de gestão escolar que eu já uso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, avaliamos a integração durante o diagnóstico. O Captaí registra leads, matrículas e agendamentos em um banco próprio e pode se conectar ao seu sistema de gestão e ao gateway de pagamento existentes.",
      },
    },
    {
      "@type": "Question",
      name: "Funciona só pra idiomas ou também pra outros tipos de curso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O caso real documentado é de uma escola de idiomas, mas a arquitetura do funil (sondagem, apresentação, negociação, matrícula) se adapta a qualquer curso ou escola livre — técnico, preparatório, música, esportes.",
      },
    },
  ],
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

const IconCheck = () => (
  <svg className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#EA580C" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const IconX = () => (
  <svg className="w-5 h-5 text-red-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const IconWA = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const METRICS = [
  { value: "< 2s",  label: "Tempo de resposta ao lead" },
  { value: "100%",  label: "Funil de matrícula automatizado" },
  { value: "0h",    label: "Follow-up manual por semana" },
  { value: "24h",   label: "Atendimento, inclusive à noite" },
];

const PAINS = [
  "Lead manda mensagem à noite, não recebe resposta até o dia seguinte e já escolheu outra escola",
  "Secretaria faz follow-up manual com cada interessado e esquece leads no meio do funil",
  "Sem visibilidade de quantos leads entram, qual curso/idioma querem ou qual é a taxa real de conversão",
  "Contrato e matrícula são gerados manualmente — monta, envia por WhatsApp, espera",
];

const FEATURES = [
  "Sondagem automática: objetivo (carreira, viagem, acadêmico), nível e disponibilidade do aluno",
  "Apresentação personalizada por motivação — foco em carreira ou em autonomia pra quem vai viajar",
  "Negociação: mensalidade, matrícula, código promocional e forma de pagamento (cartão, boleto, PIX)",
  "Confirmação de matrícula só depois do pagamento — nunca antes",
  "Agenda retorno automático quando o aluno pede mais tempo pra decidir",
  "Painel com fase do funil e taxa de conversão de cada lead, em tempo real",
];

const FAQS = [
  { q: "Quanto custa automatizar a matrícula da minha escola?", a: "Varia conforme o tamanho do funil e as integrações necessárias (sistema de gestão, gateway de pagamento etc.). Fazemos esse levantamento no diagnóstico gratuito e te passamos uma proposta sob medida — não existe pacote fechado." },
  { q: "Funciona pra escola pequena, com poucos leads por mês?", a: "Sim. O agente é configurado pro volume e pro funil da sua escola — não existe um mínimo de leads pra fazer sentido. Escolas pequenas costumam sentir o impacto mais rápido, porque cada lead perdido pesa mais no caixa." },
  { q: "Dá pra integrar com o sistema de gestão escolar que eu já uso?", a: "Sim, avaliamos a integração durante o diagnóstico. O Captaí registra leads, matrículas e agendamentos em um banco próprio e pode se conectar ao seu sistema de gestão e ao gateway de pagamento existentes." },
  { q: "Funciona só pra idiomas ou também pra outros tipos de curso?", a: "O caso real documentado é de uma escola de idiomas, mas a arquitetura do funil (sondagem, apresentação, negociação, matrícula) se adapta a qualquer curso ou escola livre — técnico, preparatório, música, esportes." },
];

const WA_LINK = "https://wa.me/5511915032373?text=Ol%C3%A1%2C+tenho+uma+escola%2Fcurso+e+quero+um+diagn%C3%B3stico+gratuito+do+Capta%C3%AD";

// ─── Components ───────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-navy/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <LogoMark size={32} />
          <span className="font-bold text-lg tracking-tight">
            JS <span className="text-teal-light">Soluções</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm text-stone-400">
          <Link href="/captai" className="hover:text-white transition-colors">Case real</Link>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>
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
  );
}

export default function EscolasPage() {
  return (
    <div className="bg-navy min-h-screen text-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Navbar />

      <main className="pt-16">

        <nav aria-label="breadcrumb" className="max-w-5xl mx-auto px-6 pt-6 text-xs text-stone-500">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-stone-300 transition-colors">Início</Link></li>
            <li aria-hidden>/</li>
            <li className="text-stone-300">Escolas de Idiomas e Cursos</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(234,88,12,0.07)" }} />
          <div className="relative max-w-5xl mx-auto px-6">
            <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide" style={{ border: "1px solid rgba(234,88,12,0.3)", background: "rgba(234,88,12,0.1)", color: "#FED7AA" }}>
              ✦ Captaí para escolas de idiomas e cursos
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 max-w-4xl">
              Agente de IA no WhatsApp que{" "}
              <span className="text-gradient">automatiza a matrícula</span> da sua escola.
            </h1>

            <p className="text-lg text-stone-400 max-w-2xl mb-10 leading-relaxed">
              O <strong className="text-white">Captaí</strong> conduz o aluno do primeiro "oi" no WhatsApp até a matrícula assinada —
              sondagem, apresentação do curso, negociação e pagamento — sem secretaria fazendo follow-up manual.
              Já validado em produção numa escola de idiomas real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-teal text-white font-semibold text-lg hover:opacity-90 transition-opacity"
                style={{ boxShadow: "0 8px 32px rgba(234,88,12,0.25)" }}
              >
                <IconWA /> Quero um diagnóstico gratuito
              </a>
              <Link
                href="/captai"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-stone-300 font-medium hover:bg-white/5 transition-colors"
              >
                Ver o caso real completo
              </Link>
            </div>
            <p className="mt-6 text-sm text-stone-500">Gratuito. Sem compromisso.</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14">
              {METRICS.map((m) => (
                <div key={m.label} className="bg-navy-light border border-white/5 rounded-2xl p-5">
                  <div className="text-3xl font-extrabold text-gradient mb-1">{m.value}</div>
                  <div className="text-xs text-stone-400 leading-snug">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pains */}
        <section className="py-20 bg-navy-light/50">
          <div className="max-w-5xl mx-auto px-6">
            <span className="text-teal-light text-xs font-semibold uppercase tracking-widest mb-4 block">O problema</span>
            <h2 className="text-3xl font-bold mb-10">Toda escola perde matrícula sem perceber.</h2>
            <ul className="space-y-4 max-w-3xl">
              {PAINS.map((p, i) => (
                <li key={i} className="flex gap-4 bg-navy border border-white/5 rounded-xl p-5">
                  <IconX />
                  <span className="text-stone-300 text-sm leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Solution */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <span className="text-teal-light text-xs font-semibold uppercase tracking-widest mb-4 block">Como funciona pra escolas</span>
            <h2 className="text-3xl font-bold mb-4">Do primeiro contato à matrícula, sem intervenção manual.</h2>
            <p className="text-stone-400 mb-10 max-w-2xl leading-relaxed">
              O agente segue o mesmo funil de uma secretaria experiente — só que responde em segundos, 24 horas por dia,
              e nunca esquece um lead no meio do caminho.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
              {FEATURES.map((f, i) => (
                <div key={i} className="flex gap-3 bg-navy-light border border-white/5 rounded-xl p-4">
                  <IconCheck />
                  <span className="text-stone-300 text-sm leading-relaxed">{f}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/captai"
                className="inline-flex items-center gap-2 text-sm text-teal-light hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-lg hover:border-white/20"
              >
                Ver os 7 workflows do caso real →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 bg-navy-light/60">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-teal-light text-sm font-semibold uppercase tracking-widest mb-4 block">Perguntas frequentes</span>
              <h2 className="text-3xl sm:text-4xl font-bold">Dúvidas comuns de quem dirige uma escola</h2>
            </div>
            <div className="space-y-3">
              {FAQS.map((f) => (
                <details key={f.q} className="group bg-navy border border-white/5 rounded-xl p-5 open:border-white/10">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer font-semibold text-white list-none marker:content-none">
                    {f.q}
                    <span className="shrink-0 text-teal-light group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <p className="text-stone-400 text-sm leading-relaxed mt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Sua escola pronta pra parar de perder matrícula?</h2>
            <p className="text-stone-400 mb-8 leading-relaxed">
              Diagnóstico gratuito de 30 minutos: mapeamos seu funil atual e mostramos exatamente
              como o Captaí se encaixa na sua escola.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-teal text-white font-semibold text-lg hover:opacity-90 transition-opacity"
              style={{ boxShadow: "0 8px 32px rgba(234,88,12,0.25)" }}
            >
              <IconWA /> Quero meu diagnóstico gratuito
            </a>
            <p className="mt-4 text-sm text-stone-500">Gratuito. Sem compromisso. Respondemos em até 1 hora.</p>
          </div>
        </section>

      </main>

      <footer className="border-t border-white/5 pt-16 pb-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <LogoMark size={24} />
              <span className="text-sm text-stone-400">© {new Date().getFullYear()} JS Soluções · Captaí</span>
            </Link>
            <Link href="/" className="text-sm text-stone-500 hover:text-stone-300 transition-colors">
              ← Voltar pra home
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
