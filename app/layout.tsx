import type { Metadata } from "next";
import "./globals.css";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans">{children}</body>
    </html>
  );
}
