# Banco Insights 2.0 - Frontend

Plataforma de inteligência do setor bancário brasileiro com análises e benchmarks de 2.000+ instituições financeiras reguladas pelo BACEN.

## Tecnologias

- **Framework**: Next.js 14 com TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Plotly.js + React Plotly.js
- **Icons**: Lucide React
- **UI Components**: Headless UI

## Estrutura do Projeto

```
src/
├── components/
│   ├── charts/          # Componentes de gráficos
│   ├── forms/           # Formulários
│   ├── layout/          # Layout e navegação
│   └── ui/              # Componentes UI básicos
├── data/                # Dados mock e tipos
├── pages/               # Páginas da aplicação
└── styles/              # Estilos CSS
```

## Desenvolvimento

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse http://localhost:3000

### Build

```bash
npm run build
npm start
```

## Páginas Implementadas

- **Home** (`/`) - Landing page com overview do setor
- **Visão do Mercado** (`/market-overview`) - Análise geral do SFN
- **Busca de Instituições** (`/institution-search`) - Busca e filtros
- **Rankings** (`/rankings`) - Rankings por diferentes critérios
- **Ferramentas de Análise** (`/analysis-tools`) - Análises avançadas

## Componentes de Gráficos

- `LineChart` - Gráficos de linha para séries temporais
- `BarChart` - Gráficos de barras horizontais/verticais
- `PieChart` - Gráficos de pizza e donuts
- `ScatterChart` - Gráficos de dispersão

## Design System

### Cores

- **Navy Primary**: `#1e3a8a`
- **Navy Light**: `#3b82f6`
- **Navy Dark**: `#1e293b`
- **Success**: `#10b981`
- **Warning**: `#f59e0b`
- **Error**: `#ef4444`

### Tipografia

- **Sans**: Inter (principal)
- **Mono**: JetBrains Mono (métricas)

### Componentes

Utilizamos classes CSS customizadas para componentes:

- `.btn-primary`, `.btn-secondary`, `.btn-outline`
- `.card`, `.card-metric`, `.card-metric-large`
- `.input-primary`, `.input-search`
- `.table-header`, `.table-cell`, `.table-row`

## Dados Mock

Os dados mock estão em `src/data/mockData.ts` e incluem:

- Instituições financeiras
- Dados financeiros trimestrais
- Carteiras de crédito
- Market share
- Séries históricas
- Dados setoriais

## Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run start` - Servidor de produção
- `npm run lint` - ESLint

## Próximos Passos

1. Integração com API real do BACEN
2. Implementação de autenticação
3. Funcionalidades de export
4. Análises avançadas com IA
5. Dashboard personalizável