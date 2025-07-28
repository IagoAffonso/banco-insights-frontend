import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { 
  Search, 
  Building2, 
  Filter,
  MapPin,
  TrendingUp,
  DollarSign,
  Users,
  ArrowRight,
  ChevronDown,
  X,
  Calendar,
  GitCompare
} from 'lucide-react';

const InstitutionSearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Mock data - replace with real API data
  const institutions = [
    {
      id: '1',
      name: 'Banco do Brasil S.A.',
      cnpj: '00.000.000/0001-91',
      type: 'Banco Múltiplo',
      region: 'DF',
      assets: 'R$ 2.1 tri',
      credit: 'R$ 840 bi',
      employees: '92.418',
      branches: '3.447',
      lastUpdate: 'T4 2024'
    },
    {
      id: '2',
      name: 'Itaú Unibanco Holding S.A.',
      cnpj: '60.872.504/0001-23',
      type: 'Banco Múltiplo',
      region: 'SP',
      assets: 'R$ 1.9 tri',
      credit: 'R$ 720 bi',
      employees: '95.123',
      branches: '3.234',
      lastUpdate: 'T4 2024'
    },
    {
      id: '3',
      name: 'Caixa Econômica Federal',
      cnpj: '00.360.305/0001-04',
      type: 'Banco Múltiplo',
      region: 'DF',
      assets: 'R$ 1.6 tri',
      credit: 'R$ 680 bi',
      employees: '86.234',
      branches: '3.567',
      lastUpdate: 'T4 2024'
    },
    {
      id: '4',
      name: 'Banco Bradesco S.A.',
      cnpj: '60.746.948/0001-12',
      type: 'Banco Múltiplo',
      region: 'SP',
      assets: 'R$ 1.5 tri',
      credit: 'R$ 580 bi',
      employees: '88.945',
      branches: '2.987',
      lastUpdate: 'T4 2024'
    },
    {
      id: '5',
      name: 'Banco Santander (Brasil) S.A.',
      cnpj: '90.400.888/0001-42',
      type: 'Banco Múltiplo',
      region: 'SP',
      assets: 'R$ 1.1 tri',
      credit: 'R$ 420 bi',
      employees: '45.678',
      branches: '2.145',
      lastUpdate: 'T4 2024'
    },
    {
      id: '6',
      name: 'Nubank',
      cnpj: '18.236.120/0001-58',
      type: 'Banco Digital',
      region: 'SP',
      assets: 'R$ 285 bi',
      credit: 'R$ 98 bi',
      employees: '5.234',
      branches: '0',
      lastUpdate: 'T4 2024'
    }
  ];

  const institutionTypes = [
    { value: 'all', label: 'Todos os Tipos' },
    { value: 'banco-multiplo', label: 'Banco Múltiplo' },
    { value: 'banco-comercial', label: 'Banco Comercial' },
    { value: 'banco-digital', label: 'Banco Digital' },
    { value: 'cooperativa', label: 'Cooperativa de Crédito' },
    { value: 'financeira', label: 'Sociedade de Crédito' }
  ];

  const regions = [
    { value: 'all', label: 'Todas as Regiões' },
    { value: 'SP', label: 'São Paulo' },
    { value: 'RJ', label: 'Rio de Janeiro' },
    { value: 'DF', label: 'Distrito Federal' },
    { value: 'MG', label: 'Minas Gerais' },
    { value: 'RS', label: 'Rio Grande do Sul' }
  ];

  const filteredInstitutions = institutions.filter(institution => {
    const matchesSearch = institution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         institution.cnpj.includes(searchTerm);
    const matchesType = selectedType === 'all' || institution.type.toLowerCase().includes(selectedType.replace('-', ' '));
    const matchesRegion = selectedRegion === 'all' || institution.region === selectedRegion;
    
    return matchesSearch && matchesType && matchesRegion;
  });

  return (
    <>
      <Head>
        <title>Busca de Instituições - Banco Insights 2.0</title>
        <meta name="description" content="Busque e analise qualquer instituição financeira do Brasil com filtros avançados e comparações." />
      </Head>

      <Layout>
        {/* Header */}
        <section className="bg-gradient-to-br from-navy-primary via-navy-light to-blue-500 text-white py-20">
          <div className="container-wide">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Busca de Instituições
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                Encontre e analise qualquer instituição financeira regulada pelo BACEN com dados oficiais em tempo real
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-blue-200">
                <div className="flex items-center space-x-2">
                  <Building2 className="h-5 w-5" />
                  <span className="font-medium">2.147 instituições ativas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">Atualizado T4 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span className="font-medium">743 métricas disponíveis</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50 -mt-10 relative">
          <div className="container-wide">
            <div className="max-w-5xl mx-auto">
              {/* Enhanced Search Bar */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 border border-gray-100">
                <div className="relative mb-6">
                  <div className="absolute left-6 top-1/2 transform -translate-y-1/2 flex items-center space-x-3">
                    <Search className="h-6 w-6 text-navy-primary icon-blue-shadow" />
                    <div className="w-px h-6 bg-gray-300"></div>
                  </div>
                  <input
                    type="text"
                    placeholder="Busque por nome da instituição, CNPJ ou código BACEN..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-16 pr-6 py-5 text-lg border-2 border-gray-200 rounded-xl focus:border-navy-primary focus:ring-4 focus:ring-navy-primary/20 transition-all duration-300 bg-gray-50 focus:bg-white"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  )}
                </div>

                {/* Quick Filters */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="text-sm font-medium text-gray-600">Filtros rápidos:</span>
                  {[
                    { label: 'Grandes Bancos', value: 'big5', count: '5' },
                    { label: 'Bancos Digitais', value: 'digital', count: '12' },
                    { label: 'Cooperativas', value: 'cooperativa', count: '234' },
                    { label: 'Financeiras', value: 'financeira', count: '89' }
                  ].map((filter) => (
                    <button
                      key={filter.value}
                      className="px-4 py-2 bg-navy-primary/10 text-navy-primary rounded-full text-sm font-medium hover:bg-navy-primary hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      {filter.label} ({filter.count})
                    </button>
                  ))}
                </div>

                {/* Advanced Filters Toggle */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="group flex items-center space-x-3 text-navy-primary hover:text-navy-dark font-medium transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-navy-primary/10 rounded-xl flex items-center justify-center group-hover:bg-navy-primary/20 transition-colors">
                      <Filter className="h-5 w-5" />
                    </div>
                    <span>Filtros Avançados</span>
                    <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
                  </button>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-navy-primary">{filteredInstitutions.length}</div>
                    <div className="text-sm text-gray-500">instituições encontradas</div>
                  </div>
                </div>

                {/* Advanced Filters */}
                {showFilters && (
                  <div className="mt-8 pt-8 border-t border-gray-200 animate-slide-up">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">
                          Tipo de Instituição
                        </label>
                        <div className="relative">
                          <select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-navy-primary focus:ring-4 focus:ring-navy-primary/20 transition-all duration-300"
                          >
                            {institutionTypes.map(type => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">
                          Região/Estado
                        </label>
                        <div className="relative">
                          <select
                            value={selectedRegion}
                            onChange={(e) => setSelectedRegion(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-navy-primary focus:ring-4 focus:ring-navy-primary/20 transition-all duration-300"
                          >
                            {regions.map(region => (
                              <option key={region.value} value={region.value}>
                                {region.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">
                          Tamanho (Ativos)
                        </label>
                        <div className="relative">
                          <select className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-navy-primary focus:ring-4 focus:ring-navy-primary/20 transition-all duration-300">
                            <option value="">Todos os tamanhos</option>
                            <option value="s1">S1 - Acima de R$ 700 bi</option>
                            <option value="s2">S2 - R$ 100 bi a R$ 700 bi</option>
                            <option value="s3">S3 - R$ 15 bi a R$ 100 bi</option>
                            <option value="s4">S4 - R$ 3 bi a R$ 15 bi</option>
                            <option value="s5">S5 - Até R$ 3 bi</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-12">
          <div className="container-wide">
            <div className="max-w-5xl mx-auto">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Resultados da Busca</h2>
                  <p className="text-gray-600 mt-1">
                    {filteredInstitutions.length} instituições encontradas
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
                    <option>Ordenar por relevância</option>
                    <option>Ativos (maior)</option>
                    <option>Ativos (menor)</option>
                    <option>Nome A-Z</option>
                    <option>Nome Z-A</option>
                  </select>
                </div>
              </div>

              {/* Institution Cards */}
              <div className="space-y-6">
                {filteredInstitutions.map((institution, index) => (
                  <div key={institution.id} className="group relative">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl transform rotate-0 group-hover:rotate-1 transition-transform duration-300"></div>
                    
                    {/* Main card */}
                    <div className="relative bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-navy-primary/20">
                      <div className="p-8">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                          {/* Institution Info */}
                          <div className="flex-1">
                            <div className="flex items-start space-x-6">
                              {/* Logo/Icon */}
                              <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-navy-primary to-navy-light rounded-2xl flex items-center justify-center icon-blue-shadow group-hover:scale-110 transition-transform duration-300">
                                  <Building2 className="h-8 w-8 text-white" />
                                </div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                                  <span className="text-xs text-white font-bold">#{index + 1}</span>
                                </div>
                              </div>
                              
                              {/* Institution Details */}
                              <div className="flex-1">
                                <div className="flex items-start justify-between mb-4">
                                  <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-navy-primary transition-colors">
                                      {institution.name}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-4 text-sm">
                                      <span className="px-3 py-1 bg-navy-primary/10 text-navy-primary rounded-full font-medium">
                                        {institution.type}
                                      </span>
                                      <span className="flex items-center text-gray-600">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        {institution.region}
                                      </span>
                                      <span className="text-gray-500">CNPJ: {institution.cnpj}</span>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Key Metrics Grid */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                  <div className="text-center p-4 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                                    <div className="flex items-center justify-center mb-2">
                                      <TrendingUp className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div className="text-lg font-bold text-gray-900">{institution.assets}</div>
                                    <div className="text-xs text-gray-600 font-medium">Ativos Totais</div>
                                  </div>
                                  <div className="text-center p-4 bg-gray-50 rounded-xl group-hover:bg-green-50 transition-colors">
                                    <div className="flex items-center justify-center mb-2">
                                      <DollarSign className="h-5 w-5 text-green-600" />
                                    </div>
                                    <div className="text-lg font-bold text-gray-900">{institution.credit}</div>
                                    <div className="text-xs text-gray-600 font-medium">Carteira Crédito</div>
                                  </div>
                                  <div className="text-center p-4 bg-gray-50 rounded-xl group-hover:bg-purple-50 transition-colors">
                                    <div className="flex items-center justify-center mb-2">
                                      <Users className="h-5 w-5 text-purple-600" />
                                    </div>
                                    <div className="text-lg font-bold text-gray-900">{institution.employees}</div>
                                    <div className="text-xs text-gray-600 font-medium">Funcionários</div>
                                  </div>
                                  <div className="text-center p-4 bg-gray-50 rounded-xl group-hover:bg-amber-50 transition-colors">
                                    <div className="flex items-center justify-center mb-2">
                                      <Building2 className="h-5 w-5 text-amber-600" />
                                    </div>
                                    <div className="text-lg font-bold text-gray-900">{institution.branches}</div>
                                    <div className="text-xs text-gray-600 font-medium">Agências</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="mt-8 lg:mt-0 lg:ml-8 flex-shrink-0">
                            <div className="flex flex-col space-y-3">
                              <Link 
                                href={`/institution/${institution.id}`}
                                className="group/btn inline-flex items-center justify-center px-6 py-3 bg-navy-primary text-white rounded-xl font-bold hover:bg-navy-dark transition-all duration-300 hover:scale-105 shadow-lg"
                              >
                                Ver Perfil Completo
                                <ArrowRight className="h-5 w-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                              </Link>
                              <button className="inline-flex items-center justify-center px-6 py-2 text-navy-primary border border-navy-primary rounded-xl font-medium hover:bg-navy-primary hover:text-white transition-all duration-300">
                                <GitCompare className="h-4 w-4 mr-2" />
                                Comparar
                              </button>
                              <div className="text-center">
                                <span className="text-xs text-gray-500">
                                  Atualizado: {institution.lastUpdate}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {filteredInstitutions.length > 0 && (
                <div className="text-center mt-12">
                  <button className="px-8 py-4 bg-navy-primary/10 text-navy-primary rounded-xl font-bold hover:bg-navy-primary hover:text-white transition-all duration-300 hover:scale-105">
                    Carregar Mais Instituições
                  </button>
                  <p className="text-sm text-gray-500 mt-3">
                    Mostrando {filteredInstitutions.length} de 2.147 instituições
                  </p>
                </div>
              )}

              {/* No Results */}
              {filteredInstitutions.length === 0 && (
                <div className="text-center py-16">
                  <div className="max-w-md mx-auto">
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="h-12 w-12 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Nenhuma instituição encontrada
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      Não encontramos instituições que correspondam aos seus critérios de busca. 
                      Tente ajustar os filtros ou usar termos diferentes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={() => {
                          setSearchTerm('');
                          setSelectedType('all');
                          setSelectedRegion('all');
                        }}
                        className="px-6 py-3 bg-navy-primary text-white rounded-xl font-bold hover:bg-navy-dark transition-all duration-300"
                      >
                        Limpar Todos os Filtros
                      </button>
                      <Link 
                        href="/market-overview"
                        className="px-6 py-3 text-navy-primary border border-navy-primary rounded-xl font-bold hover:bg-navy-primary hover:text-white transition-all duration-300"
                      >
                        Ver Visão do Mercado
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* System Overview */}
        <section className="py-20 bg-gradient-to-br from-navy-primary to-navy-light text-white">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Sistema Financeiro Nacional
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Panorama completo das instituições financeiras reguladas pelo BACEN
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 icon-blue-shadow">
                  <Building2 className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">2.147</div>
                <p className="text-blue-100 font-medium">Instituições Ativas</p>
                <p className="text-blue-200 text-sm mt-2">Reguladas pelo BACEN</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 icon-blue-shadow">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">R$ 11.2 tri</div>
                <p className="text-blue-100 font-medium">Ativos Totais</p>
                <p className="text-blue-200 text-sm mt-2">Sistema Financeiro</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 icon-blue-shadow">
                  <DollarSign className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">R$ 5.8 tri</div>
                <p className="text-blue-100 font-medium">Carteira de Crédito</p>
                <p className="text-blue-200 text-sm mt-2">Todas as modalidades</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 icon-blue-shadow">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">428 mil</div>
                <p className="text-blue-100 font-medium">Funcionários</p>
                <p className="text-blue-200 text-sm mt-2">Setor bancário</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <Link 
                href="/market-overview"
                className="inline-flex items-center px-8 py-4 bg-white text-navy-primary rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <TrendingUp className="h-6 w-6 mr-3" />
                Explorar Visão do Mercado
                <ArrowRight className="h-5 w-5 ml-3" />
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default InstitutionSearchPage;