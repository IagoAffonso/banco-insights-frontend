import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { 
  BarChart3, 
  PieChart,
  TrendingUp,
  Calculator,
  FileText,
  Filter,
  Download,
  GitCompare,
  Calendar,
  DollarSign
} from 'lucide-react';

const AnalysisToolsPage: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState('portfolio');

  const analysisTools = [
    {
      id: 'portfolio',
      name: 'Análise de Carteira',
      description: 'Analise composição e performance de carteiras de crédito',
      icon: PieChart,
      features: ['Segmentação por modalidade', 'Análise de risco', 'Comparação setorial']
    },
    {
      id: 'dre',
      name: 'Demonstrativos Financeiros',
      description: 'DREs completos com análises vertical e horizontal',
      icon: FileText,
      features: ['Análise vertical/horizontal', 'Comparação temporal', 'Benchmarks']
    },
    {
      id: 'timeseries',
      name: 'Séries Temporais',
      description: 'Análise histórica de indicadores com 12+ anos de dados',
      icon: TrendingUp,
      features: ['Tendências históricas', 'Projeções', 'Sazonalidade']
    },
    {
      id: 'benchmark',
      name: 'Benchmark Setorial',
      description: 'Compare instituições com médias setoriais',
      icon: GitCompare,
      features: ['Comparação peer-to-peer', 'Percentis', 'Rankings']
    }
  ];

  // Mock data for portfolio analysis
  const portfolioData = {
    segments: [
      { name: 'Pessoa Física', value: 45.2, amount: 'R$ 380 bi', risk: 'Médio' },
      { name: 'Pessoa Jurídica', value: 32.8, amount: 'R$ 276 bi', risk: 'Baixo' },
      { name: 'Habitacional', value: 15.1, amount: 'R$ 127 bi', risk: 'Baixo' },
      { name: 'Rural', value: 6.9, amount: 'R$ 58 bi', risk: 'Médio' }
    ],
    modalidades: [
      { name: 'Cartão de Crédito', share: 18.5, growth: '+2.1%' },
      { name: 'Crédito Consignado', share: 12.8, growth: '+1.8%' },
      { name: 'Financiamento Veículos', share: 8.9, growth: '+3.2%' },
      { name: 'Capital de Giro', share: 15.6, growth: '+4.1%' },
      { name: 'Conta Garantida', share: 7.2, growth: '+1.5%' }
    ]
  };

  const selectedToolData = analysisTools.find(tool => tool.id === selectedTool);

  return (
    <>
      <Head>
        <title>Ferramentas de Análise - Banco Insights 2.0</title>
        <meta name="description" content="Ferramentas avançadas de análise e benchmark para o setor bancário brasileiro." />
      </Head>

      <Layout>
        {/* Header */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-light text-white py-16">
          <div className="container-wide">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Ferramentas de Análise
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Análises avançadas e benchmarking para o setor bancário brasileiro
              </p>
              <div className="text-blue-200">
                <span>743 métricas disponíveis • 47 trimestres de dados • 2.000+ instituições</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Selection */}
        <section className="py-8 bg-gray-50">
          <div className="container-wide">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Selecione a Ferramenta</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {analysisTools.map((tool) => {
                const Icon = tool.icon;
                const isSelected = selectedTool === tool.id;
                
                return (
                  <button
                    key={tool.id}
                    onClick={() => setSelectedTool(tool.id)}
                    className={`p-6 rounded-lg border-2 transition-all duration-200 text-left ${
                      isSelected 
                        ? 'border-navy-primary bg-navy-primary text-white' 
                        : 'border-gray-200 bg-white hover:border-navy-light hover:shadow-md'
                    }`}
                  >
                    <Icon className={`h-8 w-8 mb-3 ${isSelected ? 'text-white' : 'text-navy-primary'}`} />
                    <h3 className="font-semibold mb-2">{tool.name}</h3>
                    <p className={`text-sm mb-3 ${isSelected ? 'text-blue-100' : 'text-gray-600'}`}>
                      {tool.description}
                    </p>
                    <ul className={`text-xs space-y-1 ${isSelected ? 'text-blue-200' : 'text-gray-500'}`}>
                      {tool.features.map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tool Content */}
        <section className="py-12">
          <div className="container-wide">
            {selectedTool === 'portfolio' && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">Análise de Carteira de Crédito</h2>
                  <div className="flex items-center space-x-4">
                    <button className="btn-outline">
                      <Filter className="h-4 w-4 mr-2" />
                      Filtros
                    </button>
                    <button className="btn-secondary">
                      <Download className="h-4 w-4 mr-2" />
                      Exportar
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Segmentação por Cliente */}
                  <div className="chart-container">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Segmentação por Cliente</h3>
                    <div className="space-y-4">
                      {portfolioData.segments.map((segment, index) => (
                        <div key={segment.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: `hsl(${index * 90}, 60%, 50%)` }}></div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{segment.name}</h4>
                              <p className="text-sm text-gray-500">Risco: {segment.risk}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-navy-primary">{segment.value}%</div>
                            <div className="text-sm text-gray-500">{segment.amount}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Top Modalidades */}
                  <div className="chart-container">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Principais Modalidades</h3>
                    <div className="space-y-4">
                      {portfolioData.modalidades.map((modalidade) => (
                        <div key={modalidade.name} className="p-4 border border-gray-200 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{modalidade.name}</h4>
                            <div className="flex items-center space-x-2">
                              <span className="text-success text-sm font-medium">{modalidade.growth}</span>
                              <TrendingUp className="h-4 w-4 text-success" />
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-lg font-bold text-navy-primary">{modalidade.share}%</div>
                            <div className="w-32 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-navy-primary h-2 rounded-full" 
                                style={{ width: `${modalidade.share}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Portfolio Metrics */}
                <div className="mt-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Indicadores de Performance</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="card-metric text-center">
                      <DollarSign className="h-8 w-8 text-navy-primary mx-auto mb-3" />
                      <div className="metric-value">R$ 841 bi</div>
                      <p className="text-gray-600">Carteira Total</p>
                      <div className="text-success text-sm font-medium mt-1">+4.2% a.a.</div>
                    </div>
                    <div className="card-metric text-center">
                      <TrendingUp className="h-8 w-8 text-navy-primary mx-auto mb-3" />
                      <div className="metric-value">2.8%</div>
                      <p className="text-gray-600">Taxa de Inadimplência</p>
                      <div className="text-error text-sm font-medium mt-1">+0.2 p.p.</div>
                    </div>
                    <div className="card-metric text-center">
                      <Calculator className="h-8 w-8 text-navy-primary mx-auto mb-3" />
                      <div className="metric-value">18.5%</div>
                      <p className="text-gray-600">Spread Médio</p>
                      <div className="text-gray-500 text-sm font-medium mt-1">Estável</div>
                    </div>
                    <div className="card-metric text-center">
                      <BarChart3 className="h-8 w-8 text-navy-primary mx-auto mb-3" />
                      <div className="metric-value">4.2%</div>
                      <p className="text-gray-600">ROA Carteira</p>
                      <div className="text-success text-sm font-medium mt-1">+0.1 p.p.</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedTool === 'dre' && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">Demonstrativos Financeiros (DRE)</h2>
                  <div className="flex items-center space-x-4">
                    <select className="input-primary">
                      <option>T4 2024</option>
                      <option>T3 2024</option>
                      <option>T2 2024</option>
                      <option>T1 2024</option>
                    </select>
                    <button className="btn-secondary">
                      <Download className="h-4 w-4 mr-2" />
                      Exportar DRE
                    </button>
                  </div>
                </div>

                <div className="chart-container">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 font-semibold text-gray-900">Conta</th>
                          <th className="text-right py-3 font-semibold text-gray-900">T4 2024</th>
                          <th className="text-right py-3 font-semibold text-gray-900">T4 2023</th>
                          <th className="text-right py-3 font-semibold text-gray-900">Δ%</th>
                          <th className="text-right py-3 font-semibold text-gray-900">AV%</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr className="border-b border-gray-100">
                          <td className="py-3 font-medium text-gray-900">Receitas de Intermediação Financeira</td>
                          <td className="py-3 text-right font-mono">R$ 145.2 bi</td>
                          <td className="py-3 text-right font-mono">R$ 139.8 bi</td>
                          <td className="py-3 text-right text-success font-medium">+3.9%</td>
                          <td className="py-3 text-right">100.0%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 pl-4 text-gray-700">Operações de Crédito</td>
                          <td className="py-3 text-right font-mono">R$ 98.4 bi</td>
                          <td className="py-3 text-right font-mono">R$ 94.2 bi</td>
                          <td className="py-3 text-right text-success font-medium">+4.5%</td>
                          <td className="py-3 text-right">67.8%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 pl-4 text-gray-700">Resultado com Títulos e Valores</td>
                          <td className="py-3 text-right font-mono">R$ 32.1 bi</td>
                          <td className="py-3 text-right font-mono">R$ 30.8 bi</td>
                          <td className="py-3 text-right text-success font-medium">+4.2%</td>
                          <td className="py-3 text-right">22.1%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 font-medium text-gray-900">Despesas de Intermediação Financeira</td>
                          <td className="py-3 text-right font-mono">(R$ 52.8 bi)</td>
                          <td className="py-3 text-right font-mono">(R$ 49.6 bi)</td>
                          <td className="py-3 text-right text-error font-medium">+6.5%</td>
                          <td className="py-3 text-right">36.4%</td>
                        </tr>
                        <tr className="border-b border-gray-100 bg-blue-50">
                          <td className="py-3 font-bold text-gray-900">Resultado Bruto Intermediação</td>
                          <td className="py-3 text-right font-mono font-bold">R$ 92.4 bi</td>
                          <td className="py-3 text-right font-mono font-bold">R$ 90.2 bi</td>
                          <td className="py-3 text-right text-success font-bold">+2.4%</td>
                          <td className="py-3 text-right font-bold">63.6%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {selectedTool === 'timeseries' && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">Análise de Séries Temporais</h2>
                  <div className="flex items-center space-x-4">
                    <select className="input-primary">
                      <option>Ativos Totais</option>
                      <option>Carteira de Crédito</option>
                      <option>Depósitos</option>
                      <option>ROE</option>
                    </select>
                    <button className="btn-secondary">
                      <Calendar className="h-4 w-4 mr-2" />
                      Período
                    </button>
                  </div>
                </div>

                <div className="chart-container">
                  <div className="h-96 flex items-center justify-center bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <TrendingUp className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-600 mb-2">Gráfico de Série Temporal</h3>
                      <p className="text-gray-500">Evolução dos Ativos Totais (2013-2024)</p>
                      <p className="text-sm text-gray-400 mt-2">
                        Gráfico interativo será implementado com Plotly.js
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="card-metric text-center">
                    <TrendingUp className="h-8 w-8 text-navy-primary mx-auto mb-3" />
                    <div className="metric-value">+4.2%</div>
                    <p className="text-gray-600">CAGR 10 anos</p>
                  </div>
                  <div className="card-metric text-center">
                    <BarChart3 className="h-8 w-8 text-navy-primary mx-auto mb-3" />
                    <div className="metric-value">12.8%</div>
                    <p className="text-gray-600">Volatilidade</p>
                  </div>
                  <div className="card-metric text-center">
                    <Calculator className="h-8 w-8 text-navy-primary mx-auto mb-3" />
                    <div className="metric-value">0.85</div>
                    <p className="text-gray-600">Correlação PIB</p>
                  </div>
                </div>
              </div>
            )}

            {selectedTool === 'benchmark' && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">Benchmark Setorial</h2>
                  <div className="flex items-center space-x-4">
                    <select className="input-primary">
                      <option>Bancos Múltiplos</option>
                      <option>Bancos Digitais</option>
                      <option>Cooperativas</option>
                    </select>
                    <button className="btn-secondary">
                      <GitCompare className="h-4 w-4 mr-2" />
                      Comparar
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="chart-container">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Posicionamento vs Peers</h3>
                    <div className="space-y-6">
                      {[
                        { metric: 'ROE', value: '15.2%', percentile: 75, benchmark: '12.8%' },
                        { metric: 'ROA', value: '1.8%', percentile: 60, benchmark: '1.5%' },
                        { metric: 'Eficiência', value: '42.5%', percentile: 80, benchmark: '48.2%' },
                        { metric: 'Inadimplência', value: '2.8%', percentile: 45, benchmark: '3.1%' }
                      ].map((item) => (
                        <div key={item.metric} className="p-4 border border-gray-200 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-gray-900">{item.metric}</span>
                            <span className="text-sm text-gray-500">P{item.percentile}</span>
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-lg font-bold text-navy-primary">{item.value}</span>
                            <span className="text-sm text-gray-600">Setor: {item.benchmark}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-navy-primary h-2 rounded-full" 
                              style={{ width: `${item.percentile}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="chart-container">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Distribuição Setorial</h3>
                    <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <PieChart className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                        <p className="text-gray-500">Gráfico de distribuição</p>
                        <p className="text-sm text-gray-400">Box plot dos indicadores</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AnalysisToolsPage;