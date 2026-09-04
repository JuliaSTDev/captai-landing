import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://captai.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Captaí — Agente de Atendimento com IA no WhatsApp | JS Soluções",
    template: "%s | Captaí · JS Soluções",
  },
  description:
    "Responda leads em segundos e converta mais clientes no WhatsApp — sem operador humano. Agente com IA para qualquer negócio: escolas, clínicas, imobiliárias, academias e mais.",
  keywords: [
    "agente de atendimento whatsapp",
    "automação whatsapp com IA",
    "chatbot whatsapp para empresas",
    "atendimento automático whatsapp",
    "automação de vendas whatsapp",
    "captação de clientes whatsapp",
    "n8n automação whatsapp",
    "JS Soluções automação",
    "Captaí agente IA",
    "whatsapp bot escola",
    "automação matrícula escola idiomas",
    "agente IA vendas",
    "crm whatsapp",
    "crm de whatsapp para empresas",
  ],
  authors: [{ name: "JS Soluções", url: SITE_URL }],
  creator: "JS Soluções",
  publisher: "JS Soluções",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Captaí · JS Soluções",
    title: "Captaí — Seu negócio atendendo e convertendo clientes no WhatsApp",
    description:
      "Agente com IA que responde leads, qualifica e conduz a negociação automaticamente pelo WhatsApp. Para qualquer nicho de negócio.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Captaí — Agente de Atendimento com IA no WhatsApp",
    description:
      "Responda leads em segundos e converta mais clientes no WhatsApp — sem operador humano.",
    creator: "@jssolucoesai",
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "PORKaBQsJJWCvQsYa_2DduXbxSvk45MmsbCuFVKPRRA",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1C1917",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
