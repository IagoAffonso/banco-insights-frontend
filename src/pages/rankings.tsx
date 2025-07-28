import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { 
  Trophy, 
  TrendingUp, 
  TrendingDown,
  Building2, 
  DollarSign,
  Percent,
  Users,
  ArrowRight,
  Medal,
  Award
} from 'lucide-react';

const RankingsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('assets');

  const categories = [
    { id: 'assets', label: 'Ativos Totais', icon: TrendingUp },
    { id: 'credit', label: 'Carteira de Crédito', icon: DollarSign },
    { id: 'deposits', label: 'Depósitos', icon: Building2 },
    { id: 'profitability', label: 'Rentabilidade (ROE)', icon: Percent },
    { id: 'efficiency', label: 'Eficiência', icon: Award },
    { id: 'employees', label: 'Funcionários', icon: Users }
  ];

  // Mock data - replace with real API data
  const rankingsData = {
    assets: [
      { 
        rank: 1, 
        name: 'Banco do Brasil S.A.', 
        value: 'R$ 2.1 tri', 
        change: '+3.8%',
        trend: 'up',
        marketShare: '18.5%'
      },
      { 
        rank: 2, 
        name: 'Itaú Unibanco Holding S.A.', 
        value: 'R$ 1.9 tri', 
        change: '+4.2%',
        trend: 'up',
        marketShare: '16.8%'
      },
      { 
        rank: 3, 
        name: 'Caixa Econômica Federal', 
        value: 'R$ 1.6 tri', 
        change: '+2.1%',
        trend: 'up',
        marketShare: '14.2%'
      },
      { 
        rank: 4, 
        name: 'Banco Bradesco S.A.', 
        value: 'R$ 1.5 tri', 
        change: '+1.9%',
        trend: 'up',
        marketShare: '13.1%'
      },
      { 
        rank: 5, 
        name: 'Banco Santander (Brasil) S.A.', 
        value: 'R$ 1.1 tri', 
        change: '+5.1%',
        trend: 'up',
        marketShare: '9.8%'
      },
      { 
        rank: 6, 
        name: 'BTG Pactual', 
        value: 'R$ 380 bi', 
        change: '+12.5%',
        trend: 'up',
        marketShare: '3.4%'
      },
      { 
        rank: 7, 
        name: 'Nubank', 
        value: 'R$ 285 bi', 
        change: '+28.7%',
        trend: 'up',
        marketShare: '2.5%'
      },
      { 
        rank: 8, 
        name: 'Banco Safra S.A.', 
        value: 'R$ 245 bi', 
        change: '+6.8%',
        trend: 'up',
        marketShare: '2.2%'
      },
      { 
        rank: 9, 
        name: 'Banco Inter', 
        value: 'R$ 89 bi', 
        change: '+18.9%',
        trend: 'up',
        marketShare: '0.8%'
      },
      { 
        rank: 10, 
        name: 'Banco Original', 
        value: 'R$ 72 bi', 
        change: '+22.3%',
        trend: 'up',
        marketShare: '0.6%'
      }
    ],
    credit: [
      { 
        rank: 1, 
        name: 'Banco do Brasil S.A.', 
        value: 'R$ 840 bi', 
        change: '+4.5%',
        trend: 'up',
        marketShare: '20.2%'
      },
      { 
        rank: 2, 
        name: 'Itaú Unibanco Holding S.A.', 
        value: 'R$ 720 bi', 
        change: '+3.8%',
        trend: 'up',
        marketShare: '17.3%'
      },
      { 
        rank: 3, 
        name: 'Caixa Econômica Federal', 
        value: 'R$ 680 bi', 
        change: '+2.9%',
        trend: 'up',
        marketShare: '16.4%'
      },
      { 
        rank: 4, 
        name: 'Banco Bradesco S.A.', 
        value: 'R$ 580 bi', 
        change: '+2.1%',
        trend: 'up',
        marketShare: '13.9%'
      },
      { 
        rank: 5, 
        name: 'Banco Santander (Brasil) S.A.', 
        value: 'R$ 420 bi', 
        change: '+5.2%',
        trend: 'up',
        marketShare: '10.1%'
      }
    ]
  };

  const currentRanking = rankingsData[selectedCategory as keyof typeof rankingsData] || rankingsData.assets;
  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">{rank}</div>;
    }
  };

  return (
    <>
      <Head>
        <title>Rankings - Banco Insights 2.0</title>
        <meta name="description" content="Rankings dinâmicos das instituições financeiras brasileiras por diversos critérios." />
      </Head>

      <Layout>
        {/* Header */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-light text-white py-16">
          <div className="container-wide">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Rankings do Setor Bancário
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Compare instituições financeiras por diferentes critérios e identifique líderes de mercado
              </p>
              <div className="text-blue-200">
                <span>Dados atualizados: T4 2024 • Rankings dinâmicos em tempo real</span>
              </div>
            </div>
          </div>
        </section>

        {/* Category Selection */}
        <section className="py-8 bg-gray-50">
          <div className="container-wide">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Selecione a Categoria</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category) => {
                const Icon = category.icon;
                const isSelected = selectedCategory === category.id;
                
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                      isSelected 
                        ? 'border-navy-primary bg-navy-primary text-white' 
                        : 'border-gray-200 bg-white hover:border-navy-light hover:bg-navy-light/5'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className={`h-6 w-6 ${isSelected ? 'text-white' : 'text-navy-primary'}`} />
                      <span className="font-medium">{category.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Rankings Table */}
        <section className="py-12">
          <div className="container-wide">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Top 10 - {selectedCategoryData?.label}
              </h2>
              <div className="text-sm text-gray-500">
                Período: T4 2024 vs T4 2023
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="table-header text-center w-20">Posição</th>
                      <th className="table-header text-left">Instituição</th>
                      <th className="table-header text-right">Valor</th>
                      <th className="table-header text-right">Variação</th>
                      <th className="table-header text-right">Market Share</th>
                      <th className="table-header text-center w-24">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentRanking.map((institution, index) => (
                      <tr key={institution.rank} className="table-row">
                        <td className="table-cell text-center">
                          <div className="flex items-center justify-center">
                            {getRankIcon(institution.rank)}
                          </div>
                        </td>
                        <td className="table-cell">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-navy-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Building2 className="h-5 w-5 text-navy-primary" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{institution.name}</div>
                              <div className="text-sm text-gray-500">#{institution.rank} no ranking</div>
                            </div>
                          </div>
                        </td>
                        <td className="table-cell text-right">
                          <div className="font-bold text-gray-900 font-mono">
                            {institution.value}
                          </div>
                        </td>
                        <td className="table-cell text-right">
                          <div className={`flex items-center justify-end space-x-1 ${
                            institution.trend === 'up' ? 'text-success' : 'text-error'
                          }`}>
                            {institution.trend === 'up' ? (
                              <TrendingUp className="h-4 w-4" />
                            ) : (
                              <TrendingDown className="h-4 w-4" />
                            )}
                            <span className="font-medium">{institution.change}</span>
                          </div>
                        </td>
                        <td className="table-cell text-right">
                          <div className="font-medium text-gray-900">
                            {institution.marketShare}
                          </div>
                        </td>
                        <td className="table-cell text-center">
                          <Link 
                            href={`/institution/${institution.rank}`}
                            className="inline-flex items-center justify-center w-8 h-8 text-navy-primary hover:bg-navy-primary/10 rounded-lg transition-colors"
                          >
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <section className="py-12 bg-gray-50">
          <div className="container-wide">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Insights do Ranking</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card">
                <div className="flex items-center mb-4">
                  <Trophy className="h-6 w-6 text-yellow-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Líder Absoluto</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  O Banco do Brasil mantém a liderança em ativos totais, 
                  consolidando sua posição como maior instituição do país.
                </p>
                <div className="text-2xl font-bold text-yellow-600">1º lugar</div>
                <p className="text-sm text-gray-500">18.5% de market share</p>
              </div>

              <div className="card">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-6 w-6 text-success mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Maior Crescimento</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Nubank apresenta o maior crescimento percentual em ativos,
                  demonstrando o potencial dos bancos digitais.
                </p>
                <div className="text-2xl font-bold text-success">+28.7%</div>
                <p className="text-sm text-gray-500">Crescimento anual</p>
              </div>

              <div className="card">
                <div className="flex items-center mb-4">
                  <Building2 className="h-6 w-6 text-navy-primary mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Concentração</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Os top 5 bancos concentram 72.4% dos ativos totais,
                  indicando alta concentração no setor.
                </p>
                <div className="text-2xl font-bold text-navy-primary">72.4%</div>
                <p className="text-sm text-gray-500">Top 5 bancos</p>
              </div>
            </div>
          </div>
        </section>

        {/* Explore More */}
        <section className="py-12">
          <div className="container-wide">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore Mais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/institution-search" className="card hover:shadow-lg transition-shadow duration-200 text-center">
                <Building2 className="h-8 w-8 text-navy-primary mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Buscar Instituições</h3>
                <p className="text-sm text-gray-600">Encontre bancos específicos</p>
              </Link>
              
              <Link href="/market-overview" className="card hover:shadow-lg transition-shadow duration-200 text-center">
                <TrendingUp className="h-8 w-8 text-navy-primary mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Visão do Mercado</h3>
                <p className="text-sm text-gray-600">Panorama geral do setor</p>
              </Link>
              
              <Link href="/analysis-tools" className="card hover:shadow-lg transition-shadow duration-200 text-center">
                <DollarSign className="h-8 w-8 text-navy-primary mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Análise de Carteiras</h3>
                <p className="text-sm text-gray-600">Portfólios de crédito</p>
              </Link>
              
              <Link href="/analysis-tools" className="card hover:shadow-lg transition-shadow duration-200 text-center">
                <Percent className="h-8 w-8 text-navy-primary mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Rentabilidade</h3>
                <p className="text-sm text-gray-600">Indicadores financeiros</p>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default RankingsPage;