import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Captaí — Agente de Atendimento com IA no WhatsApp",
  description:
    "Seu negócio respondendo leads e convertendo clientes no WhatsApp de forma automática. Agente com IA para escolas, clínicas, imobiliárias, academias e mais. Diagnóstico gratuito.",
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "JS Soluções — Captaí",
  description:
    "Agente de atendimento com IA para WhatsApp. Automatizamos a captação e conversão de clientes para qualquer negócio.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://captai.com.br",
  telephone: "+5511915032373",
  email: "devjuliama@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
    addressRegion: "SP",
  },
  serviceType: "Automação de atendimento WhatsApp com Inteligência Artificial",
  areaServed: "Brasil",
  priceRange: "R$1200 implementação + R$600/mês",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Captaí — Agente IA WhatsApp",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Implementação do Captaí",
          description: "Agente de atendimento com IA configurado para o funil do seu negócio. Resposta em menos de 30 segundos, qualificação e condução da negociação pelo WhatsApp.",
        },
        price: "1200",
        priceCurrency: "BRL",
      },
    ],
  },
};

// ─── Logo mark ────────────────────────────────────────────────────────────────
function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size, position: "relative", flexShrink: 0 }}>
      <div style={{
        width: size, height: size,
        background: "#EA580C",
        borderRadius: Math.round(size * 0.22),
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <span style={{ fontSize: size * 0.38, fontWeight: 800, color: "#fff", letterSpacing: "-0.5px", fontFamily: "system-ui" }}>JS</span>
      </div>
      <div style={{
        position: "absolute", bottom: -2, right: -2,
        width: size * 0.26, height: size * 0.26,
        background: "#0369A1",
        borderRadius: "50%",
        border: `${Math.max(1.5, size * 0.04)}px solid #1C1917`,
      }} />
    </div>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────
const IconX = () => (
  <svg className="w-5 h-5 text-red-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const IconCheck = () => (
  <svg className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#EA580C" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const IconArrow = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
  </svg>
);

const IconWA = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const PAINS = [
  {
    label: "Leads somem porque a resposta demorou",
    desc: "O cliente manda mensagem, você demora para responder e ele já fechou com o concorrente. Isso acontece várias vezes por semana sem você perceber.",
  },
  {
    label: "Follow-up que depende da memória da equipe",
    desc: "Ligar, mandar mensagem, enviar proposta... tudo manual. Leads esfriam e somem antes de virar venda porque ninguém lembrou de dar retorno.",
  },
  {
    label: "Sem visibilidade de onde estão os leads",
    desc: "Você não sabe quantos interessados entraram, quantos viraram clientes nem onde exatamente está perdendo dinheiro no funil.",
  },
];

const FEATURES = [
  "Resposta automática no WhatsApp em menos de 30 segundos",
  "Qualificação automática: separa curioso de pronto para comprar",
  "Conduz a negociação seguindo o funil do seu negócio",
  "Notificação para sua equipe quando o lead está pronto para fechar",
  "Painel com taxa de conversão de leads em vendas",
];

const STEPS = [
  { n: "1", title: "Lead entra em contato", desc: "Via WhatsApp. O agente responde automaticamente com a mensagem certa para o seu negócio." },
  { n: "2", title: "Agente qualifica e conduz", desc: "Coleta dados, entende a necessidade, apresenta a solução e conduz até o momento de decisão." },
  { n: "3", title: "Você fecha o negócio", desc: "Sua equipe recebe uma notificação quando o lead está pronto. Sem esforço operacional." },
];

const NICHOS = [
  { icon: "🎓", name: "Escolas e cursos", badge: "Case real" },
  { icon: "🏥", name: "Clínicas e consultórios" },
  { icon: "🏠", name: "Imobiliárias" },
  { icon: "💪", name: "Academias e studios" },
  { icon: "🐾", name: "Pet shops e clínicas vet" },
  { icon: "⚖️", name: "Serviços B2B" },
];

const WA_LINK = "https://wa.me/5511915032373?text=Ol%C3%A1%2C+vim+pelo+site+e+quero+um+diagn%C3%B3stico+gratuito+do+Capta%C3%AD";

// ─── Components ───────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-navy/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LogoMark size={32} />
          <span className="font-bold text-lg tracking-tight">
            JS <span className="text-teal-light">Soluções</span>
          </span>
        </div>
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

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(234,88,12,0.08)" }} />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(3,105,161,0.06)" }} />

      <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide" style={{ border: "1px solid rgba(234,88,12,0.3)", background: "rgba(234,88,12,0.1)", color: "#FED7AA" }}>
          ✦ Captaí — Agente de atendimento com IA
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Seu negócio atendendo e{" "}
          <span className="text-gradient block sm:inline">convertendo clientes no WhatsApp.</span>
        </h1>

        <p className="text-lg text-stone-400 max-w-2xl mx-auto mb-10">
          O <strong className="text-white">Captaí</strong> é um agente com IA que responde leads, qualifica o interesse
          e conduz a negociação automaticamente — para <strong className="text-white">qualquer negócio</strong>,
          sem precisar de operador humano para cada conversa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-teal text-white font-semibold text-lg hover:opacity-90 transition-opacity"
            style={{ boxShadow: "0 8px 32px rgba(234,88,12,0.25)" }}
          >
            <IconWA /> Quero meu diagnóstico gratuito
          </a>
          <a href="#como-funciona" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-stone-300 font-medium hover:bg-white/5 transition-colors">
            Como funciona
          </a>
        </div>

        <p className="mt-6 text-sm text-stone-500">Gratuito. Sem compromisso.</p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/captai"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
            style={{ background: "rgba(3,105,161,0.12)", border: "1px solid rgba(3,105,161,0.35)", color: "#38BDF8" }}
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-full" style={{ background: "rgba(3,105,161,0.25)" }}>
              <svg className="w-3.5 h-3.5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5.14v14l11-7-11-7z" />
              </svg>
            </span>
            Ver o MVP em ação — caso real: escola de idiomas
            <IconArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Pains() {
  return (
    <section className="py-24 bg-navy-light/60">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Seu negócio perde clientes todos os dias.</h2>
          <p className="text-stone-400 max-w-xl mx-auto">Não por falta de esforço — por falta de processo automatizado.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {PAINS.map((p) => (
            <div key={p.label} className="bg-navy border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
              <div className="flex gap-3 mb-4">
                <IconX />
                <span className="font-semibold text-white">{p.label}</span>
              </div>
              <p className="text-stone-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-teal-light text-sm font-semibold uppercase tracking-widest mb-4 block">A solução</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Captaí — seu agente de atendimento com IA
            </h2>
            <p className="text-stone-400 mb-8 leading-relaxed">
              Um agente configurado especificamente para o funil de vendas do seu negócio.
              Implementação em até 7 dias úteis. Você só precisa nos dar acesso ao WhatsApp.
            </p>
            <ul className="space-y-4">
              {FEATURES.map((f) => (
                <li key={f} className="flex gap-3">
                  <IconCheck />
                  <span className="text-stone-300 text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-navy-light border border-white/5 rounded-3xl p-8">
            <p className="text-teal-lighter text-xs font-semibold uppercase tracking-widest mb-8 text-center">Funciona para qualquer nicho</p>
            <div className="grid grid-cols-2 gap-3">
              {NICHOS.map((n) => (
                <div
                  key={n.name}
                  className="rounded-xl p-4 text-center"
                  style={{
                    background: n.badge ? "rgba(234,88,12,0.08)" : "rgba(255,255,255,0.03)",
                    border: n.badge ? "1px solid rgba(234,88,12,0.25)" : "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {n.badge && (
                    <span className="block text-xs font-bold mb-1" style={{ color: "#EA580C" }}>{n.badge}</span>
                  )}
                  <div className="text-xl mb-1">{n.icon}</div>
                  <div className="text-xs font-medium text-stone-300">{n.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-navy-light/60">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">3 passos. Zero trabalho manual.</h2>
          <p className="text-stone-400">Do primeiro contato ao cliente pronto para fechar, sem intervenção da equipe.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 relative">
          {STEPS.map((step, i) => (
            <div key={step.n} className="relative bg-navy border border-white/5 rounded-2xl p-7 hover:border-white/10 transition-colors">
              {i < 2 && (
                <div className="hidden md:block absolute top-10 -right-3 w-6 h-[2px] z-10" style={{ background: "rgba(234,88,12,0.4)" }} />
              )}
              <div className="w-10 h-10 gradient-teal rounded-full flex items-center justify-center font-bold text-white mb-5 text-lg">
                {step.n}
              </div>
              <h3 className="font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="diagnostico" className="py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <span className="text-teal-light text-sm font-semibold uppercase tracking-widest mb-4 block">Comece com zero risco</span>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Diagnóstico gratuito de 30 minutos
        </h2>
        <p className="text-stone-400 mb-4 leading-relaxed">
          Mostramos exatamente onde seu negócio está perdendo clientes e como o Captaí resolve — sem custo, sem compromisso.
        </p>
        <ul className="text-left inline-flex flex-col gap-3 mb-10">
          {[
            "Mapeamento do seu processo de atendimento atual",
            "Identificação dos pontos de perda de leads",
            "Proposta personalizada com o Captaí para o seu nicho",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <IconCheck />
              <span className="text-stone-300 text-sm">{item}</span>
            </li>
          ))}
        </ul>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl gradient-teal text-white font-semibold text-lg hover:opacity-90 transition-opacity"
          style={{ boxShadow: "0 8px 32px rgba(234,88,12,0.25)" }}
        >
          <IconWA /> Quero meu diagnóstico gratuito
        </a>
        <p className="mt-4 text-sm text-stone-500">Gratuito · Sem compromisso · Respondemos em até 1 hora</p>

        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-xs text-stone-500 uppercase tracking-widest mb-2">Programa beta — vagas limitadas</p>
          <p className="text-stone-400 text-sm">Estamos selecionando os primeiros clientes com condições especiais de implementação.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <LogoMark size={24} />
          <span className="text-sm text-stone-400">© {new Date().getFullYear()} JS Soluções · Captaí</span>
        </div>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-stone-500 hover:text-stone-300 transition-colors flex items-center gap-2"
        >
          <IconWA /> (11) 91503-2373
        </a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Pains />
        <Solution />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
