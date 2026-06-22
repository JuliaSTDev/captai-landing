# Captaí — Landing Page

Landing page do **Captaí**, agente de atendimento com IA para WhatsApp da [JS Soluções](https://github.com/JuliaSTDev).

Responde leads em segundos, qualifica o interesse e conduz a negociação automaticamente — para qualquer nicho de negócio.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript
- Deploy: [Vercel](https://vercel.com/)

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Homepage — posicionamento genérico, CTA WhatsApp |
| `/captai` | Case study — MVP escola de idiomas, 7 workflows n8n |

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Variáveis de ambiente

Crie um arquivo `.env.local` na raiz:

```env
NEXT_PUBLIC_SITE_URL=https://captai.com.br
```

Em produção, configure essa variável no painel do Vercel.

## Deploy

O projeto está configurado para deploy automático no Vercel. Cada push na branch `main` dispara um novo deploy.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/JuliaSTDev/captai-landing)

## Projeto relacionado

O MVP técnico que originou o Captaí está em [`n8n-matricula-whatsapp`](https://github.com/JuliaSTDev/n8n-matricula-whatsapp) — agente de matrículas com 7 workflows n8n, Groq Llama 4 Scout, Evolution API e PostgreSQL.

---

Desenvolvido por **Julia Maria dos Santos** · [JS Soluções](https://wa.me/5511915032373)
