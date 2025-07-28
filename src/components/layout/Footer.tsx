import React from 'react';
import Link from 'next/link';
import { Building2, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-navy-light rounded-lg flex items-center justify-center">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Banco Insights</h3>
                <p className="text-sm text-gray-400">Inteligência Bancária</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Plataforma de inteligência do setor bancário brasileiro com análises 
              e benchmarks de 2.000+ instituições financeiras reguladas pelo BACEN.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Plataforma</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/market-overview" className="text-sm hover:text-white transition-colors">
                  Visão do Mercado
                </Link>
              </li>
              <li>
                <Link href="/institution-search" className="text-sm hover:text-white transition-colors">
                  Busca de Instituições
                </Link>
              </li>
              <li>
                <Link href="/rankings" className="text-sm hover:text-white transition-colors">
                  Rankings
                </Link>
              </li>
              <li>
                <Link href="/analysis-tools" className="text-sm hover:text-white transition-colors">
                  Ferramentas de Análise
                </Link>
              </li>
            </ul>
          </div>

          {/* Data */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Dados</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-sm">Dados Trimestrais BACEN</span>
              </li>
              <li>
                <span className="text-sm">Séries Históricas 2013-2024</span>
              </li>
              <li>
                <span className="text-sm">Market Share por Segmento</span>
              </li>
              <li>
                <span className="text-sm">Carteiras de Crédito</span>
              </li>
              <li>
                <span className="text-sm">Demonstrativos Financeiros</span>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Informações</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.bcb.gov.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>Fonte: BACEN IFDATA</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <span className="text-sm">Dados Públicos</span>
              </li>
              <li>
                <span className="text-sm">Atualização Trimestral</span>
              </li>
              <li>
                <a 
                  href="mailto:contato@bancoinsights.com.br" 
                  className="text-sm hover:text-white transition-colors flex items-center space-x-1"
                >
                  <Mail className="h-3 w-3" />
                  <span>Contato</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Banco Insights 2.0. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-xs text-gray-500">
              Desenvolvido com dados públicos do BACEN
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;