import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://captai.com.br";

export const metadata: Metadata = {
  title: "Captaí — Agente de Atendimento com IA no WhatsApp",
  description:
    "Seu negócio respondendo leads e convertendo clientes no WhatsApp de forma automática. Agente com IA para escolas, clínicas, imobiliárias, academias e mais. Diagnóstico gratuito.",
  alternates: {
    canonical: "/",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "JS Soluções — Captaí",
  description:
    "Agente de atendimento com IA para WhatsApp. Automatizamos a captação e conversão de clientes para qualquer negócio.",
  url: SITE_URL,
  telephone: "+5511915032373",
  email: "devjuliama@gmail.com",
  founder: {
    "@type": "Person",
    name: "Julia Maria dos Santos",
  },
  sameAs: [
    "https://github.com/JuliaSTDev",
    "https://www.linkedin.com/in/js-solu%C3%A7%C3%B5es-9a22b9426/",
    "https://www.instagram.com/jssolucoes.ia/",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
    addressRegion: "SP",
  },
  serviceType: "Automação de atendimento WhatsApp com Inteligência Artificial",
  areaServed: "Brasil",
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
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "Sob consulta",
          priceCurrency: "BRL",
        },
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

const TRUST_STACK = ["n8n", "Groq Llama 4 Scout", "Google Gemini 2.5", "Evolution API (WhatsApp)", "PostgreSQL", "Redis"];

const FAQS = [
  {
    q: "Quanto custa o Captaí?",
    a: "O valor é calculado conforme a necessidade do seu negócio — complexidade do funil, número de etapas e integrações envolvidas. Não existe um pacote fechado: fazemos esse levantamento no diagnóstico gratuito e te passamos uma proposta sob medida.",
  },
  {
    q: "Quanto tempo leva para implementar?",
    a: "Até 7 dias úteis após o diagnóstico e o acesso ao WhatsApp do seu negócio, incluindo configuração do funil, testes e ajustes finais.",
  },
  {
    q: "O Captaí funciona para qualquer tipo de negócio?",
    a: "Sim. O agente é configurado especificamente para o funil de vendas de cada negócio — já implementamos para escola de idiomas e a arquitetura se adapta a clínicas, imobiliárias, academias, pet shops e serviços B2B.",
  },
  {
    q: "Preciso trocar meu número de WhatsApp?",
    a: "Não. O Captaí se conecta ao número que sua empresa já usa, via Evolution API (WhatsApp self-hosted), sem precisar migrar de número ou perder histórico de conversas.",
  },
  {
    q: "O Captaí substitui minha equipe de vendas?",
    a: "Não substitui — libera. O agente cuida da resposta inicial, qualificação e negociação. Sua equipe entra só quando o lead está pronto para fechar, com todo o contexto já coletado.",
  },
  {
    q: "Como funciona a integração com meu sistema atual?",
    a: "O Captaí registra leads, matrículas e agendamentos em um banco PostgreSQL próprio e pode ser integrado a CRMs e gateways de pagamento existentes durante a implementação.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const WA_LINK = "https://wa.me/5511915032373?text=Ol%C3%A1%2C+vim+pelo+site+e+quero+um+diagn%C3%B3stico+gratuito+do+Capta%C3%AD";
const LINKEDIN_LINK = "https://www.linkedin.com/in/js-solu%C3%A7%C3%B5es-9a22b9426/";
const INSTAGRAM_LINK = "https://www.instagram.com/jssolucoes.ia/";

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
        <nav className="hidden lg:flex items-center gap-8 text-sm text-stone-400">
          <a href="#como-funciona" className="hover:text-white transition-colors">Como funciona</a>
          <Link href="/captai" className="hover:text-white transition-colors">Case</Link>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="#quem-somos" className="hover:text-white transition-colors">Quem somos</a>
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

function TrustBar() {
  return (
    <section className="py-10 border-y border-white/5 bg-navy-light/30">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-widest text-stone-500 mb-6">Tecnologia por trás do Captaí</p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {TRUST_STACK.map((t) => (
            <span key={t} className="text-sm font-medium text-stone-400">{t}</span>
          ))}
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

function About() {
  return (
    <section id="quem-somos" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1">
            <span className="text-teal-light text-sm font-semibold uppercase tracking-widest mb-4 block">Quem está por trás</span>
            <h2 className="text-2xl sm:text-3xl font-bold">JS Soluções</h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-stone-400 leading-relaxed mb-6">
              O Captaí é desenvolvido pela <strong className="text-white">JS Soluções</strong>, agência especializada
              em automação de atendimento com Inteligência Artificial fundada por{" "}
              <strong className="text-white">Julia Maria dos Santos</strong>. O MVP técnico que originou o produto
              está documentado e disponível publicamente no GitHub — arquitetura, workflows n8n e decisões de
              projeto, sem caixa-preta.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/captai" className="text-sm font-medium px-4 py-2 rounded-lg border border-white/10 text-stone-300 hover:border-white/20 hover:text-white transition-colors">
                Ver case completo →
              </Link>
              <a
                href="https://github.com/JuliaSTDev/n8n-matricula-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium px-4 py-2 rounded-lg border border-white/10 text-stone-300 hover:border-white/20 hover:text-white transition-colors"
              >
                Código no GitHub →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-24 bg-navy-light/60">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-teal-light text-sm font-semibold uppercase tracking-widest mb-4 block">Perguntas frequentes</span>
          <h2 className="text-3xl sm:text-4xl font-bold">Tudo que você precisa saber antes de começar</h2>
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
    <footer className="border-t border-white/5 pt-16 pb-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <LogoMark size={28} />
              <span className="font-bold text-lg tracking-tight">
                JS <span className="text-teal-light">Soluções</span>
              </span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">
              Agente de atendimento com IA no WhatsApp para negócios que não podem perder leads.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-4">Produto</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#como-funciona" className="text-stone-400 hover:text-white transition-colors">Como funciona</a></li>
              <li><Link href="/captai" className="text-stone-400 hover:text-white transition-colors">Case de sucesso</Link></li>
              <li><a href="#faq" className="text-stone-400 hover:text-white transition-colors">Perguntas frequentes</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-4">Empresa</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#quem-somos" className="text-stone-400 hover:text-white transition-colors">Quem somos</a></li>
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
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-stone-500 hover:text-stone-300 transition-colors flex items-center gap-2">
              <IconWA /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Pains />
        <Solution />
        <HowItWorks />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
