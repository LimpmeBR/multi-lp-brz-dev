# Multi LP BRZ Dev — Guia de Instalação

## O que é

Sistema completo de Landing Pages com CMS visual. Inclui:
- 19 seções configuráveis (hero, planos, FAQ, formulário, etc.)
- Editor admin com preview em tempo real
- Sistema de design com presets e cores customizáveis
- Conversão: countdown, exit intent, social proof, cupom
- Menu global, WhatsApp flutuante, sticky CTA
- Template universal (gabarito) — toda LP nova nasce idêntica

---

## Passo a Passo

### 1. Instalar no projeto

```bash
npm install github:LimpmeBR/multi-lp-brz-dev
```

### 2. Criar projeto no Supabase

1. Acesse [supabase.com](https://supabase.com) e crie um projeto novo
2. No SQL Editor, execute o conteúdo do arquivo `setup.sql`
3. Copie a URL e a Anon Key do projeto

### 3. Configurar variáveis de ambiente

Crie um `.env` na raiz do projeto:

```env
VITE_SUPABASE_URL=https://SEU-PROJETO.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...sua-key-aqui
```

### 4. Importar CSS

No seu `main.tsx` ou `App.tsx`, importe os estilos:

```tsx
import 'multi-lp-brz-dev/src/styles/themes/landing/tokens.css';
import 'multi-lp-brz-dev/src/styles/themes/landing/components.css';
```

### 5. Configurar rotas

```tsx
import { LandingPageV2, LandingPagesV2, LPEditorV2 } from 'multi-lp-brz-dev';

// No seu router:
<Route path="/l/:slug" element={<LandingPageV2 />} />
<Route path="/admin/lps" element={<LandingPagesV2 />} />
<Route path="/admin/lps/:lpKey" element={<LPEditorV2 />} />
```

### 6. Criar a primeira LP

1. Acesse `/admin/lps`
2. Clique em "Nova LP"
3. Preencha nome, slug e lp_key
4. A LP nasce com o template universal — preencha o conteúdo no editor

---

## Dependências do projeto consumidor

O projeto que instalar este pacote precisa ter:

```json
{
  "react": ">=18",
  "react-dom": ">=18",
  "react-router-dom": ">=6",
  "@supabase/supabase-js": ">=2",
  "tailwindcss": ">=3",
  "lucide-react": ">=0.400",
  "framer-motion": ">=12",
  "sonner": ">=1",
  "embla-carousel-react": ">=8",
  "clsx": ">=2",
  "tailwind-merge": ">=2",
  "class-variance-authority": ">=0.7",
  "date-fns": ">=3",
  "browser-image-compression": ">=2",
  "react-hook-form": ">=7",
  "zod": ">=3",
  "@hookform/resolvers": ">=3"
}
```

Componentes Radix UI (shadcn):
```json
{
  "@radix-ui/react-accordion": "*",
  "@radix-ui/react-alert-dialog": "*",
  "@radix-ui/react-aspect-ratio": "*",
  "@radix-ui/react-checkbox": "*",
  "@radix-ui/react-collapsible": "*",
  "@radix-ui/react-dialog": "*",
  "@radix-ui/react-dropdown-menu": "*",
  "@radix-ui/react-label": "*",
  "@radix-ui/react-popover": "*",
  "@radix-ui/react-scroll-area": "*",
  "@radix-ui/react-select": "*",
  "@radix-ui/react-separator": "*",
  "@radix-ui/react-slider": "*",
  "@radix-ui/react-slot": "*",
  "@radix-ui/react-switch": "*",
  "@radix-ui/react-tabs": "*",
  "@radix-ui/react-toast": "*"
}
```

Drag and Drop:
```json
{
  "@dnd-kit/core": "*",
  "@dnd-kit/sortable": "*",
  "@dnd-kit/utilities": "*"
}
```

---

## Estrutura de Arquivos

```
src/
├── components/
│   ├── landing-v2/      # 31 componentes de renderização
│   ├── admin/
│   │   ├── sections-v2/ # 29 editores de seção
│   │   ├── preview-v2/  # Preview drawer
│   │   └── shared-v2/   # Componentes compartilhados
│   └── ui/              # shadcn/ui components
├── lib/
│   └── cms-v2/          # Core: types, API, template, provider
├── hooks/
│   └── cms/             # Hooks do editor
├── pages/               # Páginas (LP, Admin, Editor)
├── styles/
│   └── themes/landing/  # CSS tokens e componentes
└── index.ts             # Barrel export
```

---

## Banco de Dados

### Tabela obrigatória: `bd_cms_lp_v2`

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | PK auto-gerado |
| lp_key | TEXT | Identificador único (ex: "lp01") |
| name | TEXT | Nome interno |
| slug | TEXT | URL slug (ex: "minha-oferta") |
| status | TEXT | 'active', 'draft', 'archived' |
| content | JSONB | Todo o conteúdo da LP |
| created_at | TIMESTAMPTZ | Data criação |
| updated_at | TIMESTAMPTZ | Data atualização |

### RLS (Row Level Security)

- **Admin**: acesso total (precisa de auth + role)
- **Público**: leitura apenas de LPs com `status = 'active'`

> ⚠️ Ajuste a policy de admin conforme a autenticação do seu projeto.

---

## Atualizando o pacote

Quando houver melhorias no pacote:

```bash
npm update multi-lp-brz-dev
```

Isso puxa a versão mais recente do GitHub automaticamente.
