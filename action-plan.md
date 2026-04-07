# Plano de Ação — Portfólio WEBGABRIEL

> Documento de referência para execução do projeto. Consultar antes de qualquer implementação.
> Atualizado em: 2026-04-07

---

## Contexto

Portfólio pessoal de desenvolvedor fullstack com posicionamento diferenciado em **IA e Automação**.
Stack: Next.js 16 (App Router) + TypeScript + MUI v7
Referência visual: gabrielmullerdev.com.br (melhorar, não copiar)

---

## Fase 1 — Scaffold do Projeto ✅ CONCLUÍDA

- [x] Criar `frontend/` com Next.js 16 (App Router) + TypeScript
- [x] Configurar MUI v7 com tema dark/premium customizado (`lib/theme.ts`)
- [x] Estrutura de pastas: `app/`, `components/ui/`, `components/sections/`, `lib/`
- [x] Configurar Emotion SSR registry (`lib/registry.tsx`)
- [x] ThemeProvider client component (`components/ui/ThemeProvider.tsx`)

---

## Fase 2 — Fundação SEO ✅ CONCLUÍDA

- [x] `layout.tsx` com Metadata global (title, description, OG, Twitter)
- [x] Palavras-chave estratégicas nos textos:
  - Desenvolvedor Fullstack
  - Desenvolvedor de agentes de IA
  - Automação com inteligência artificial
  - Integração com OpenAI
  - Laravel + IA / Next.js + IA
- [x] `sitemap.xml` via route handler (`app/sitemap.ts`)
- [x] `robots.txt` via route handler (`app/robots.ts`)
- [x] `next/font` Inter otimizada (`app/layout.tsx`)
- [x] `globals.css` limpo, sem Tailwind

---

## Fase 3 — Seções do Portfólio ✅ CONCLUÍDA

- [x] **Navbar** — responsiva com drawer mobile, scroll hide, logo gradiente
- [x] **Hero** — tagline focada em IA + automação, stats, CTAs, blobs de fundo
- [x] **Sobre** — trajetória desde 2021, 4 cards de diferenciais em IA
- [x] **Stack** — 6 categorias com chips, seção IA em destaque visual
- [x] **Serviços** — 6 cards com ícones, tags, hover effects, CTA
- [x] **Projetos** — 6 cases com categoria, tags de tech, ícones GitHub/link
- [x] **Experiência** — timeline vertical desde 2021 com cards animados
- [x] **Contato** — CTAs WhatsApp/email, card de disponibilidade, social links
- [x] **Footer** — simples e limpo

---

## Fase 4 — Performance ✅ CONCLUÍDA

- [x] SSG na home (todas as páginas geradas como static)
- [x] Framer Motion com `useInView` — animações só carregam quando visíveis
- [x] Build limpo sem erros ou warnings de TypeScript
- [ ] `next/image` para foto de perfil (pendente — aguardando asset)
- [ ] Lighthouse 90+ (validar após deploy)

---

## Fase 5 — Animações e Polish ✅ CONCLUÍDA

- [x] Framer Motion em todas as seções (fade in + slide ao entrar na viewport)
- [x] Micro-interações nos cards (hover translateY + border glow)
- [x] Pulse animation no status "disponível" do card de contato
- [x] Gradiente animado no scrollbar
- [x] Mobile-first em todos os componentes (xs → md breakpoints)

---

## Próximos passos (backlog)

- [ ] Adicionar foto de perfil real com `next/image`
- [ ] Criar imagem OG (`public/og-image.png`)
- [ ] Conectar formulário de contato a serviço real (EmailJS, Resend, etc.)
- [ ] Adicionar links reais de GitHub e projetos
- [ ] Configurar deploy (Vercel recomendado)
- [ ] Validar Lighthouse 90+ após deploy

---

## Notas técnicas importantes

- **MUI v7**: Grid não usa mais `item` prop — usar `size={{ xs: 12, md: 6 }}`
- **Framer Motion + MUI**: usar `motion(Box)` em vez de `motion(Typography)` com `component`
- **SSR Emotion**: `lib/registry.tsx` é obrigatório para evitar flash de estilo
- TypeScript obrigatório em todos os arquivos
- Mobile-first em todos os componentes
- Textos com palavras-chave estratégicas (sem keyword stuffing)
- Destacar IA e Automação sempre que relevante
