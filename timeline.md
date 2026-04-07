# Timeline de Desenvolvimento — WEBGABRIEL

> Registro cronológico de tudo que foi implementado, ajustado ou melhorado no projeto.
> Toda alteração relevante deve ser registrada aqui com data, descrição e arquivos afetados.

---

## Formato de entrada

```
### [AAAA-MM-DD] — Título da alteração
- **Tipo:** Implementação | Ajuste | Melhoria | Correção | Refatoração
- **Descrição:** O que foi feito e por quê
- **Arquivos afetados:** lista de arquivos
- **Observações:** notas adicionais (opcional)
```

---

## Histórico

### [2026-04-07] — Inicialização do projeto
- **Tipo:** Implementação
- **Descrição:** Criação da estrutura base do monorepo, definição do AGENTS.md com regras e diretrizes, criação do plano de ação, timeline e README do projeto.
- **Arquivos afetados:**
  - `AGENTS.md`
  - `action-plan.md`
  - `timeline.md`
  - `README.md`
- **Observações:** Projeto ainda sem `frontend/`. Próximo passo: scaffold do Next.js.

---

### [2026-04-07] — Implementação completa do frontend (Fases 1 a 5)
- **Tipo:** Implementação
- **Descrição:** Scaffold do projeto Next.js 16 + TypeScript + MUI v7, fundação SEO, todas as seções do portfólio, performance SSG e animações com Framer Motion. Build limpo sem erros.
- **Arquivos criados:**
  - `frontend/` — projeto Next.js completo
  - `frontend/lib/theme.ts` — tema dark premium MUI v7
  - `frontend/lib/registry.tsx` — Emotion SSR registry
  - `frontend/components/ui/ThemeProvider.tsx` — provider client
  - `frontend/components/ui/Navbar.tsx` — navbar responsiva com drawer mobile
  - `frontend/components/ui/Footer.tsx` — footer
  - `frontend/components/sections/Hero.tsx` — hero com stats e CTAs
  - `frontend/components/sections/Sobre.tsx` — sobre com cards de diferenciais IA
  - `frontend/components/sections/Stack.tsx` — stack por categorias, IA em destaque
  - `frontend/components/sections/Servicos.tsx` — 6 serviços com ícones e tags
  - `frontend/components/sections/Projetos.tsx` — 6 cases com badges de tech
  - `frontend/components/sections/Experiencia.tsx` — timeline vertical 2021-presente
  - `frontend/components/sections/Contato.tsx` — CTAs + card de disponibilidade
  - `frontend/app/layout.tsx` — metadata SEO completo (OG, Twitter, keywords)
  - `frontend/app/page.tsx` — home montando todas as seções
  - `frontend/app/globals.css` — CSS base sem Tailwind
  - `frontend/app/sitemap.ts` — sitemap.xml automático
  - `frontend/app/robots.ts` — robots.txt automático
- **Observações:**
  - MUI v7: Grid usa `size={{ xs, md }}` — sem prop `item`
  - Framer Motion + MUI: usar `motion(Box)` para evitar conflito de tipos com `component`
  - Todas as páginas SSG (static) — build confirmado ✅

---

### [2026-04-07] — Foto de perfil integrada ao Hero
- **Tipo:** Implementação
- **Descrição:** Adicionada foto `eu.jpeg` ao Hero com layout de duas colunas (texto + foto). Foto renderizada com `next/image` (otimizada, lazy, responsive). Anel de gradiente animado e glow em torno da foto.
- **Arquivos afetados:**
  - `frontend/public/eu.jpeg` — foto copiada de `assets/` para `public/`
  - `frontend/components/sections/Hero.tsx` — refatorado para Grid 2 colunas com foto
  - Framer Motion + MUI: usar `motion(Box)` para evitar conflito de tipos com `component`
  - Todas as páginas SSG (static) — build confirmado ✅
  - Pendente: foto de perfil real, OG image, links reais, deploy

---

### [2026-04-07] — Suporte a múltiplos idiomas (PT-BR / EN)
- **Tipo:** Implementação
- **Descrição:** Adicionado sistema de internacionalização (i18n) sem roteamento de URL. PT-BR como padrão, inglês acessível via botão na Navbar. Todo o conteúdo das seções traduzido.
- **Arquivos criados:**
  - `frontend/lib/i18n/translations.ts` — textos PT-BR e EN de todas as seções
  - `frontend/lib/i18n/context.tsx` — LangContext + useLang hook
- **Arquivos atualizados:**
  - `frontend/components/ui/ThemeProvider.tsx` — adicionado LangProvider
  - `frontend/components/ui/Navbar.tsx` — botão PT/EN com ícone Translate (desktop e mobile)
  - `frontend/components/ui/Footer.tsx` — texto traduzido
  - Todas as sections: Hero, Sobre, Stack, Serviços, Projetos, Experiência, Contato
- **Observações:** Troca de idioma em tempo real sem reload. Arquitetura via React Context — ideal para SPA/portfólio.
