import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { 
  TrendingUp, 
  Building2, 
  PieChart, 
  BarChart3,
  Search,
  ArrowRight,
  Users,
  DollarSign,
  Calendar,
  Percent
} from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Banco Insights 2.0 - Inteligência Bancária Brasileira</title>
        <meta name="description" content="Plataforma de inteligência do setor bancário brasileiro com análises e benchmarks de 2.000+ instituições financeiras reguladas pelo BACEN." />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="gradient-background text-white py-20">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
                Inteligência do Setor
                <span className="block text-blue-200">Bancário Brasileiro</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                Análises avançadas e benchmarks de 2.000+ instituições financeiras 
                com dados oficiais do BACEN desde 2013
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/institution-search" className="group inline-flex items-center justify-center px-8 py-4 bg-white text-navy-primary rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg">
                  <Search className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
                  Buscar Instituições
                  <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/market-overview" className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-navy-primary transition-all duration-300 hover:scale-105">
                  <TrendingUp className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform" />
                  Visão do Mercado
                  <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Snapshot do Mercado */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Snapshot do Mercado
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Indicadores em tempo real do Sistema Financeiro Nacional
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Ativos Totais do Sistema */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center icon-blue-shadow">
                      <TrendingUp className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 font-medium">T4 2024</div>
                      <div className="text-xs text-success font-bold">+3.8% trim</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900">Ativos Totais do Sistema</h3>
                    <div className="text-3xl font-black text-blue-600">R$ 11.2 tri</div>
                    <p className="text-sm text-gray-600">Sistema Financeiro Nacional</p>
                  </div>
                </div>
              </div>

              {/* Carteira de Crédito Total */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center icon-blue-shadow">
                      <DollarSign className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 font-medium">T4 2024</div>
                      <div className="text-xs text-success font-bold">+4.2% trim</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900">Carteira de Crédito Total</h3>
                    <div className="text-3xl font-black text-green-600">R$ 5.8 tri</div>
                    <p className="text-sm text-gray-600">Todas as modalidades</p>
                  </div>
                </div>
              </div>

              {/* Número de Instituições */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center icon-blue-shadow">
                      <Building2 className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 font-medium">Ativas</div>
                      <div className="text-xs text-gray-500 font-bold">BACEN</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900">Número de Instituições</h3>
                    <div className="text-3xl font-black text-purple-600">2.147</div>
                    <p className="text-sm text-gray-600">Reguladas pelo BACEN</p>
                  </div>
                </div>
              </div>

              {/* Concentração */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center icon-blue-shadow">
                      <PieChart className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 font-medium">Top 5</div>
                      <div className="text-xs text-warning font-bold">+0.8% a.a.</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900">Concentração</h3>
                    <div className="text-3xl font-black text-amber-600">72.4%</div>
                    <p className="text-sm text-gray-600">Market Share Top 5</p>
                  </div>
                </div>
              </div>

              {/* ROE Médio Sistema */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center icon-blue-shadow">
                      <Percent className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 font-medium">T4 2024</div>
                      <div className="text-xs text-success font-bold">+1.2 p.p.</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900">ROE Médio Sistema</h3>
                    <div className="text-3xl font-black text-indigo-600">14.8%</div>
                    <p className="text-sm text-gray-600">Return on Equity</p>
                  </div>
                </div>
              </div>

              {/* Índice Basileia Médio */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center icon-blue-shadow">
                      <BarChart3 className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 font-medium">T4 2024</div>
                      <div className="text-xs text-success font-bold">+0.3 p.p.</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900">Índice Basileia Médio</h3>
                    <div className="text-3xl font-black text-rose-600">16.2%</div>
                    <p className="text-sm text-gray-600">Capital Adequacy Ratio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-20">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Recursos da Plataforma
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ferramentas avançadas de análise e benchmark para o setor bancário brasileiro
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Market Share Analysis */}
              <div className="card group hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-navy-primary to-navy-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform icon-blue-shadow">
                  <PieChart className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Análise de Market Share</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Concentração de mercado, participação por segmento e evolução de market share das principais instituições.
                </p>
                <Link href="/market-overview" className="inline-flex items-center text-navy-primary font-semibold hover:text-navy-dark transition-colors group">
                  Explorar análises
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Institution Profiles */}
              <div className="card group hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform icon-blue-shadow">
                  <Building2 className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Perfis das Instituições</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Perfis detalhados de 2.000+ instituições com dados financeiros, operacionais e histórico completo.
                </p>
                <Link href="/institution-search" className="inline-flex items-center text-navy-primary font-semibold hover:text-navy-dark transition-colors group">
                  Buscar instituições
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Competitive Intelligence */}
              <div className="card group hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform icon-blue-shadow">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Inteligência Competitiva</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Benchmarking avançado, rankings dinâmicos e análises comparativas para tomada de decisões estratégicas.
                </p>
                <Link href="/rankings" className="inline-flex items-center text-navy-primary font-semibold hover:text-navy-dark transition-colors group">
                  Ver rankings
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Portfolio Analysis */}
              <div className="card group hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform icon-blue-shadow">
                  <BarChart3 className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Análise de Carteiras</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Análise detalhada de carteiras de crédito por modalidade, prazo e segmento de cliente.
                </p>
                <Link href="/analysis-tools" className="inline-flex items-center text-navy-primary font-semibold hover:text-navy-dark transition-colors group">
                  Analisar carteiras
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Financial Statements */}
              <div className="card group hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform icon-blue-shadow">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Demonstrativos Financeiros</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  DREs completos com análise vertical, horizontal e comparativos setoriais para benchmarking.
                </p>
                <Link href="/analysis-tools" className="inline-flex items-center text-navy-primary font-semibold hover:text-navy-dark transition-colors group">
                  Ver DREs
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Time Series */}
              <div className="card group hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform icon-blue-shadow">
                  <DollarSign className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Séries Temporais</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Análise histórica de indicadores com 12+ anos de dados trimestrais do BACEN.
                </p>
                <Link href="/analysis-tools" className="inline-flex items-center text-navy-primary font-semibold hover:text-navy-dark transition-colors group">
                  Ver séries históricas
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Market Concentration */}
        <section className="py-20 bg-gray-50">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Concentração de Mercado
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Top 10 bancos por ativos totais no Sistema Financeiro Nacional
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="space-y-4">
                  {[
                    { rank: 1, name: 'Banco do Brasil', share: 18.5, assets: 'R$ 2.1 tri' },
                    { rank: 2, name: 'Itaú Unibanco', share: 16.8, assets: 'R$ 1.9 tri' },
                    { rank: 3, name: 'Caixa Econômica Federal', share: 14.2, assets: 'R$ 1.6 tri' },
                    { rank: 4, name: 'Bradesco', share: 13.1, assets: 'R$ 1.5 tri' },
                    { rank: 5, name: 'Santander Brasil', share: 9.8, assets: 'R$ 1.1 tri' },
                    { rank: 6, name: 'BTG Pactual', share: 3.4, assets: 'R$ 380 bi' },
                    { rank: 7, name: 'Nubank', share: 2.5, assets: 'R$ 285 bi' },
                    { rank: 8, name: 'Banco Safra', share: 2.2, assets: 'R$ 245 bi' },
                    { rank: 9, name: 'Banco Inter', share: 0.8, assets: 'R$ 89 bi' },
                    { rank: 10, name: 'Banco Original', share: 0.6, assets: 'R$ 72 bi' }
                  ].map((bank) => (
                    <div key={bank.rank} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-navy-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {bank.rank}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{bank.name}</h3>
                          <p className="text-sm text-gray-500">{bank.assets}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-navy-primary">{bank.share}%</div>
                        <div className="w-20 bg-gray-200 rounded-full h-2 mt-1">
                          <div 
                            className="bg-navy-primary h-2 rounded-full" 
                            style={{ width: `${(bank.share / 20) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-navy-primary mb-2">72.4%</div>
                    <p className="text-gray-700 font-medium">Concentração dos Top 5 bancos</p>
                    <p className="text-sm text-gray-500 mt-1">Dados referentes ao T4 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-gradient-to-br from-green-500 to-green-600 text-white">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Por Que Escolher o Banco Insights?
              </h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                A plataforma mais completa de inteligência bancária do Brasil
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Agilidade e Praticidade</h3>
                <p className="text-green-100 leading-relaxed">
                  Monitoramento de mercado e tomada de decisões estratégicas com dados em tempo real e interface intuitiva.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Dados Oficiais BACEN</h3>
                <p className="text-green-100 leading-relaxed">
                  100% dos dados provenientes do Banco Central do Brasil, garantindo confiabilidade e precisão nas análises.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Análises Avançadas</h3>
                <p className="text-green-100 leading-relaxed">
                  Ferramentas de benchmark, rankings dinâmicos e análises preditivas para insights estratégicos.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Cobertura Completa</h3>
                <p className="text-green-100 leading-relaxed">
                  2.000+ instituições financeiras monitoradas com histórico de 12+ anos de dados trimestrais.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Interface Intuitiva</h3>
                <p className="text-green-100 leading-relaxed">
                  Busca avançada, filtros inteligentes e visualizações interativas para máxima produtividade.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">ROI Comprovado</h3>
                <p className="text-green-100 leading-relaxed">
                  Otimize estratégias de negócio e identifique oportunidades de mercado com inteligência competitiva.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-navy-primary to-navy-light text-white">
          <div className="container-wide text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Comece a Explorar Agora
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
                Acesse dados oficiais do BACEN e descubra insights valiosos sobre o mercado bancário brasileiro
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/market-overview" className="group inline-flex items-center justify-center px-8 py-4 bg-white text-navy-primary rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg">
                  <BarChart3 className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform" />
                  Explorar a Plataforma
                  <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/institution-search" className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-navy-primary transition-all duration-300 hover:scale-105">
                  <Search className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
                  Buscar Instituições
                  <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <p className="text-blue-200 mt-8 text-sm">
                Dados atualizados trimestralmente • Última atualização: T4 2024
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default HomePage;