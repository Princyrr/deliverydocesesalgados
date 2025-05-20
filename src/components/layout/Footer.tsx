import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Doces & Salgados</h3>
            <p className="text-gray-300 mb-4">
              Entregamos deliciosos doces e salgados na sua porta. Feitos com amor e os melhores ingredientes.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </SocialLink>
              <SocialLink href="#" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </SocialLink>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Nosso Menu</h4>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/menu">Menu</FooterLink>
              <FooterLink to="/about">Sobre nós</FooterLink>
              <FooterLink to="/contact">Contato</FooterLink>
              <FooterLink to="/faq">FAQ</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-primary-400 shrink-0" />
                <span className="text-gray-300">(081) 999815840</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-primary-400 shrink-0" />
                <span className="text-gray-300">Princyrpiress@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary-400 shrink-0" />
                <span className="text-gray-300">
                  Recife -PE, Brasil
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Horário</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-primary-400 shrink-0" />
                <div>
                  <p className="text-gray-300">Segunda - Sexta</p>
                  <p className="text-gray-300 font-medium">8:00 AM - 8:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-primary-400 shrink-0" />
                <div>
                  <p className="text-gray-300">Sábado - Domingo</p>
                  <p className="text-gray-300 font-medium">9:00 AM - 7:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Doces & Salgados feito pela desenvolvedora Priscila Ramonna da silva Pires</p>
          <div className="mt-2 space-x-4">
            <Link to="/terms" className="hover:text-primary-400 transition-colors">
              Termos de Serviços
            </Link>
            <Link to="/privacy" className="hover:text-primary-400 transition-colors">
              Todos os direitos reservados
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
  'aria-label': string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, children, ...props }) => {
  return (
    <a
      href={href}
      className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors"
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="text-gray-300 hover:text-primary-400 transition-colors"
      >
        {children}
      </Link>
    </li>
  );
};