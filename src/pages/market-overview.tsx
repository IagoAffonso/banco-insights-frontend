import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { 
  TrendingUp, 
  TrendingDown,
  Building2, 
  DollarSign,
  Percent,
  BarChart3,
  PieChart,
  Calendar
} from 'lucide-react';

const MarketOverviewPage: React.FC = () => {
  // Mock data - replace with real API data
  const marketMetrics = {
    totalAssets: 'R$ 11.2 tri',
    totalCredit: 'R$ 5.8 tri',
    totalInstitutions: '2.147',
    marketConcentration: '68.4%',
    creditGrowth: '+4.2%',
    assetsGrowth: '+3.8%'
  };

  const topBanks = [
    { name: 'Banco do Brasil', marketShare: 18.5, assets: 'R$ 2.1 tri' },
    { name: 'Itaú Unibanco', marketShare: 16.8, assets: 'R$ 1.9 tri' },
    { name: 'Caixa Econômica Federal', marketShare: 14.2, assets: 'R$ 1.6 tri' },
    { name: 'Bradesco', marketShare: 13.1, assets: 'R$ 1.5 tri' },
    { name: 'Santander Brasil', marketShare: 9.8, assets: 'R$ 1.1 tri' }
  ];

  const creditSegments = [
    { segment: 'Pessoa Física', value: 'R$ 2.1 tri', share: 36.2, growth: '+2.8%' },
    { segment: 'Pessoa Jurídica', value: 'R$ 2.0 tri', share: 34.5, growth: '+5.1%' },
    { segment: 'Habitacional', value: 'R$ 1.0 tri', share: 17.2, growth: '+8.2%' },
    { segment: 'Rural', value: 'R$ 0.7 tri', share: 12.1, growth: '+6.4%' }
  ];

  return (
    <>
      <Head>
        <title>Visão do Mercado - Banco Insights 2.0</title>
        <meta name="description" content="Análise completa do mercado bancário brasileiro com indicadores e tendências do setor." />
      </Head>

      <Layout>
        {/* Header */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-light text-white py-16">
          <div className="container-wide">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Visão do Mercado Bancário
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Análise completa do Sistema Financeiro Nacional com dados oficiais do BACEN
              </p>
              <div className="flex items-center space-x-4 text-blue-200">
                <Calendar className="h-5 w-5" />
                <span>Último trimestre: T4 2024</span>
                <span>•</span>
                <span>Atualizado em: Jan 2025</span>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-12 bg-gray-50">
          <div className="container-wide">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Principais Indicadores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card-metric">
                <div className="flex items-center justify-between mb-4">
                  <Building2 className="h-8 w-8 text-navy-primary" />
                  <span className="text-sm text-gray-500">Total</span>
                </div>
                <div className="metric-large">{marketMetrics.totalAssets}</div>
                <p className="text-gray-600 mt-2">Ativos Totais</p>
                <div className="flex items-center mt-2 text-success">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">{marketMetrics.assetsGrowth} vs T4 2023</span>
                </div>
              </div>

              <div className="card-metric">
                <div className="flex items-center justify-between mb-4">
                  <DollarSign className="h-8 w-8 text-navy-primary" />
                  <span className="text-sm text-gray-500">Carteira</span>
                </div>
                <div className="metric-large">{marketMetrics.totalCredit}</div>
                <p className="text-gray-600 mt-2">Crédito Total</p>
                <div className="flex items-center mt-2 text-success">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">{marketMetrics.creditGrowth} vs T4 2023</span>
                </div>
              </div>

              <div className="card-metric">
                <div className="flex items-center justify-between mb-4">
                  <Building2 className="h-8 w-8 text-navy-primary" />
                  <span className="text-sm text-gray-500">Ativas</span>
                </div>
                <div className="metric-large">{marketMetrics.totalInstitutions}</div>
                <p className="text-gray-600 mt-2">Instituições</p>
                <div className="flex items-center mt-2 text-gray-500">
                  <span className="text-sm">Reguladas pelo BACEN</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Concentration */}
        <section className="py-12">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Top 5 Banks */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Top 5 Bancos por Ativos</h2>
                <div className="chart-container">
                  <div className="space-y-4">
                    {topBanks.map((bank, index) => (
                      <div key={bank.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-navy-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{bank.name}</h3>
                            <p className="text-sm text-gray-500">{bank.assets}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-navy-primary">{bank.marketShare}%</div>
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-navy-primary h-2 rounded-full" 
                              style={{ width: `${bank.marketShare}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-700">Concentração Top 5</span>
                      <span className="text-xl font-bold text-navy-primary">{marketMetrics.marketConcentration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Credit Segments */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Segmentos de Crédito</h2>
                <div className="chart-container">
                  <div className="space-y-4">
                    {creditSegments.map((segment) => (
                      <div key={segment.segment} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">{segment.segment}</h3>
                          <div className="flex items-center space-x-2">
                            <span className="text-success text-sm font-medium">{segment.growth}</span>
                            <TrendingUp className="h-4 w-4 text-success" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-navy-primary">{segment.value}</span>
                          <span className="text-sm text-gray-500">{segment.share}% do total</span>
                        </div>
                        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-navy-primary h-2 rounded-full" 
                            style={{ width: `${segment.share}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Trends */}
        <section className="py-12 bg-gray-50">
          <div className="container-wide">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Tendências do Setor</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-6 w-6 text-success mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Crescimento do Crédito</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  O setor apresenta crescimento consistente na carteira de crédito, 
                  com destaque para o segmento habitacional e rural.
                </p>
                <div className="text-2xl font-bold text-success">+4.2%</div>
                <p className="text-sm text-gray-500">Crescimento anual</p>
              </div>

              <div className="card">
                <div className="flex items-center mb-4">
                  <PieChart className="h-6 w-6 text-navy-primary mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Concentração</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Os 5 maiores bancos concentram mais de 2/3 dos ativos totais do sistema,
                  mantendo posição dominante.
                </p>
                <div className="text-2xl font-bold text-navy-primary">68.4%</div>
                <p className="text-sm text-gray-500">Top 5 bancos</p>
              </div>

              <div className="card">
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-6 w-6 text-warning mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Digitalização</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Aceleração da transformação digital impulsiona eficiência operacional 
                  e novos modelos de negócio.
                </p>
                <div className="text-2xl font-bold text-warning">85%</div>
                <p className="text-sm text-gray-500">Operações digitais</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-12">
          <div className="container-wide">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore Mais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/institution-search" className="card hover:shadow-lg transition-shadow duration-200 text-center">
                <Building2 className="h-8 w-8 text-navy-primary mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Buscar Instituições</h3>
                <p className="text-sm text-gray-600">Encontre e analise qualquer banco</p>
              </Link>
              
              <Link href="/rankings" className="card hover:shadow-lg transition-shadow duration-200 text-center">
                <BarChart3 className="h-8 w-8 text-navy-primary mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Rankings</h3>
                <p className="text-sm text-gray-600">Veja os líderes do setor</p>
              </Link>
              
              <Link href="/analysis-tools" className="card hover:shadow-lg transition-shadow duration-200 text-center">
                <PieChart className="h-8 w-8 text-navy-primary mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Análises</h3>
                <p className="text-sm text-gray-600">Ferramentas de benchmark</p>
              </Link>
              
              <Link href="/analysis-tools" className="card hover:shadow-lg transition-shadow duration-200 text-center">
                <TrendingUp className="h-8 w-8 text-navy-primary mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Séries Temporais</h3>
                <p className="text-sm text-gray-600">Análise histórica completa</p>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default MarketOverviewPage;