import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Building2, Search, Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const router = useRouter();
  
  const isActive = (pathname: string) => {
    // Never show home as active - only show sections as active when navigating away from home
    if (pathname === '/') return false;
    if (pathname !== '/' && router.pathname.startsWith(pathname)) return true;
    return false;
  };

  const getLinkClassName = (pathname: string) => {
    return isActive(pathname) ? 'nav-link-active' : 'nav-link';
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-navy-primary rounded-lg flex items-center justify-center">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Banco Insights</h1>
              <p className="text-xs text-gray-500 -mt-1">Inteligência Bancária</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link href="/" className={getLinkClassName('/')}>
              Início
            </Link>
            <Link href="/market-overview" className={getLinkClassName('/market-overview')}>
              Mercado
            </Link>
            <Link href="/institution-search" className={getLinkClassName('/institution-search')}>
              Instituições
            </Link>
            <Link href="/rankings" className={getLinkClassName('/rankings')}>
              Rankings
            </Link>
            <Link href="/analysis-tools" className={getLinkClassName('/analysis-tools')}>
              Análises
            </Link>
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link href="/institution-search" className="hidden sm:flex items-center space-x-2 text-gray-600 hover:text-navy-primary">
              <Search className="h-5 w-5" />
              <span className="text-sm">Buscar</span>
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-navy-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-4 space-y-2">
              <Link href="/" className={`block ${getLinkClassName('/')}`}>
                Início
              </Link>
              <Link href="/market-overview" className={`block ${getLinkClassName('/market-overview')}`}>
                Mercado
              </Link>
              <Link href="/institution-search" className={`block ${getLinkClassName('/institution-search')}`}>
                Instituições
              </Link>
              <Link href="/rankings" className={`block ${getLinkClassName('/rankings')}`}>
                Rankings
              </Link>
              <Link href="/analysis-tools" className={`block ${getLinkClassName('/analysis-tools')}`}>
                Análises
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;