import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, User, Menu, X, Search } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header
      className={`sticky top-0 z-30 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-600">Doces&Salgados</span>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <NavLink to="/">Início</NavLink>
            <NavLink to="/menu">Cardápio</NavLink>
            <NavLink to="/about">Sobre</NavLink>
            <NavLink to="/contact">Contato</NavLink>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Link
              to="/search"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5 text-gray-700" />
            </Link>
            
            <Link
              to="/cart"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors relative"
              aria-label="Carrinho de compras"
            >
              <ShoppingBag className="w-5 h-5 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {isAuthenticated ? (
              <Link
                to="/profile"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Perfil do usuário"
              >
                <div className="flex items-center space-x-1">
                  <User className="w-5 h-5 text-gray-700" />
                  <span className="hidden lg:inline text-sm font-medium text-gray-700">
                    {user?.name.split(' ')[0]}
                  </span>
                </div>
              </Link>
            ) : (
              <Link to="/login">
                <Button variant="primary" size="sm">
                  Entrar
                </Button>
              </Link>
            )}
            
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-3">
                <MobileNavLink to="/">Início</MobileNavLink>
                <MobileNavLink to="/menu">Cardápio</MobileNavLink>
                <MobileNavLink to="/about">Sobre</MobileNavLink>
                <MobileNavLink to="/contact">Contato</MobileNavLink>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`text-gray-700 hover:text-primary-600 font-medium relative transition-colors ${
        isActive ? 'text-primary-600' : ''
      }`}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeNavIndicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-md transition-colors ${
        isActive
          ? 'bg-primary-50 text-primary-600 font-medium'
          : 'text-gray-700 hover:bg-gray-50'
      }`}
    >
      {children}
    </Link>
  );
};