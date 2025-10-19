# Automa - Soluções em Automação Empresarial

Site institucional da Automa, empresa especializada em automação de processos empresariais.

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 18+
- npm

### Instalação
```bash
# Instalar dependências
npm install --legacy-peer-deps

# Executar servidor de desenvolvimento
npx tsx server/index.ts
```

### Acesso
- **Local:** http://localhost:5000

## 🌐 Deploy no GitHub Pages

O site é automaticamente deployado no GitHub Pages quando há push na branch `main`.

### URL do Site
- **GitHub Pages:** https://automadevs.github.io/TeamPerfMonitor/

## 🛠️ Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção (servidor)
- `npm run build:gh-pages` - Build para GitHub Pages
- `npm run preview` - Preview do build
- `npm run start` - Servidor de produção

## 📁 Estrutura do Projeto

```
├── client/          # Frontend React
├── server/          # Backend Express
├── shared/          # Código compartilhado
├── attached_assets/ # Imagens e assets
└── .github/         # GitHub Actions
```

## 🎨 Tecnologias

- **Frontend:** React, TypeScript, Tailwind CSS, Vite
- **Backend:** Express, Node.js
- **Deploy:** GitHub Pages, GitHub Actions