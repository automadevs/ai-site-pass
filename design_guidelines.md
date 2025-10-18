# Design Guidelines: Automa - Agência de Automação Empresarial

## Design Approach: Reference-Based (Modern Tech Agency)

**Primary References:** Stripe (professional polish) + Linear (sharp typography) + Webflow (creative layouts)

**Justification:** As a B2B automation agency, Automa needs to project technical expertise while remaining approachable. The design should inspire confidence through clean professionalism and demonstrate innovation through modern interactions.

---

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary Blue: 217 91% 60% (Azul tecnológico confiável)
- Secondary Orange: 25 95% 53% (Laranja vibrante para CTAs e acentos)
- Background: 0 0% 100% (Branco puro)
- Surface: 220 13% 97% (Cinza muito claro para cards)
- Text Primary: 220 20% 15% (Quase preto azulado)
- Text Secondary: 220 10% 45% (Cinza médio)

**Dark Mode:**
- Primary Blue: 217 91% 65%
- Secondary Orange: 25 95% 58%
- Background: 222 47% 11%
- Surface: 217 33% 17%
- Text Primary: 0 0% 98%
- Text Secondary: 220 9% 70%

**Usage Strategy:**
- Blue: Headers, links, primary buttons, section accents
- Orange: CTAs principais, destaques importantes, hover states
- Never combine orange and blue in same element (maintain contrast)

### B. Typography

**Font Families:**
```
Primary: 'Inter', sans-serif (body, UI elements)
Display: 'Plus Jakarta Sans', sans-serif (headlines, hero)
Mono: 'JetBrains Mono', monospace (código, métricas técnicas)
```

**Scale:**
- Hero Headline: text-6xl md:text-7xl lg:text-8xl font-bold
- Section Titles: text-4xl md:text-5xl font-bold
- Subsection Titles: text-2xl md:text-3xl font-semibold
- Body Large: text-lg md:text-xl
- Body Regular: text-base
- Caption: text-sm

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Component padding: p-6, p-8
- Section spacing: py-16 md:py-24 lg:py-32
- Element gaps: gap-4, gap-6, gap-8
- Container margins: mx-auto max-w-7xl px-6 lg:px-8

**Grid Strategy:**
- Hero: Single column, centered, max-w-4xl
- Services: 3-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Cases: 2-column alternating layout
- Benefits: 2-column split (content + visual)
- Footer: 4-column grid

---

## Component Library

### Navigation
- Fixed transparent header with blur backdrop on scroll
- Logo esquerda, menu centro, CTA direita
- Mobile: Hamburger menu com slide-in sidebar
- Sticky behavior com shadow-sm após scroll

### Hero Section
**Layout:** Full viewport height (min-h-screen), centered content
**Content:**
- Headline poderosa em português: "Automatize. Escale. Domine."
- Subheadline explicativa (2 linhas máx)
- Dual CTA: Primary orange "Agendar Demonstração" + Secondary outline "Nossos Casos"
- Hero image: Ilustração isométrica de automação/robôs trabalhando ou dashboard com métricas em tempo real
- Gradient overlay: Subtle blue-to-purple gradient no background

### Services Cards
**Design:** Elevated cards com hover lift effect
- Icon/illustration no topo (64x64px)
- Título do serviço (text-xl font-semibold)
- Descrição breve (3-4 linhas, text-gray-600)
- Link "Saiba mais" com arrow icon
- Border-l-4 colorido por categoria de serviço
- Grid com gap-8

**Categorias sugeridas:**
1. Automação de Processos (RPA)
2. Integração de Sistemas
3. Workflows Inteligentes

### Success Cases
**Layout:** Alternating two-column (imagem esquerda/direita)
- Case image/screenshot à esquerda
- Content à direita: Logo do cliente, quote, métricas de impacto
- Metrics boxes: Cards pequenos com número grande + label
- Exemplo: "70% redução de tempo" em card destacado

### Benefits Section
**Design:** Split layout com ilustração
- Lado esquerdo: Lista de benefícios com checkmarks
- Lado direito: Ilustração ou animação sutil
- Cada benefício: Icon + título + descrição curta
- Background com subtle pattern ou gradient

### Contact Form
**Layout:** Centered, max-w-2xl
- Campos: Nome, Email, Empresa, Telefone, Mensagem
- Input style: Bordered com focus ring azul
- Submit button: Large, orange, full-width
- Informações de contato sidebar: Email, telefone, endereço

### Footer
**Structure:** Rich footer com 4 colunas
- Col 1: Logo + tagline + social icons
- Col 2: Serviços (links)
- Col 3: Empresa (Sobre, Blog, Carreira)
- Col 4: Contato (endereço, email, telefone)
- Bottom bar: Copyright + Privacy/Terms links

---

## Animations & Interactions

**Scroll Animations:**
- Fade-in-up nas seções ao entrar no viewport
- Counter animations nos números de impacto
- Parallax sutil no hero background

**Micro-interactions:**
- Card hover: translateY(-4px) + shadow-lg
- Button hover: Slight scale + brightness increase
- Link hover: Underline slide-in animation

**Performance:** Use IntersectionObserver, limit to 2-3 animated sections

---

## Images

**Hero Image:** 
- Descrição: Dashboard moderno mostrando fluxos de automação, robôs trabalhando, ou visualização abstrata de processos conectados
- Posição: Right side do hero ou background com overlay
- Estilo: Isométrico, gradientes azul/roxo, moderno

**Service Icons:**
- Utilizar Heroicons ou custom illustrations
- Estilo: Outline, cor primária azul

**Case Studies:**
- Screenshots de dashboards reais (ou mockups profissionais)
- Logos de clientes em grayscale, coloridos no hover

**Benefits Section:**
- Ilustração de equipe colaborando com automação
- Gráficos de crescimento, métricas positivas

---

## Accessibility & Portuguese Localization

- All content in Brazilian Portuguese (pt-BR)
- Alt text descriptivo em português
- ARIA labels em português
- Form validation messages em português
- Date/number formatting brasileiro

**CTA Copy Examples:**
- "Agendar Demonstração Gratuita"
- "Fale com um Especialista"
- "Ver Cases de Sucesso"
- "Comece a Automatizar Hoje"