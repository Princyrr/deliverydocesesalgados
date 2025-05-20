import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-pattern"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Deliciosos Quitutes<br />
              <span className="text-primary-600">Entregues na Sua Casa</span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              De doces irresistíveis a salgados saborosos, entregamos os melhores 
              produtos de confeitaria direto na sua casa com rapidez e confiabilidade.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/menu">
                <Button variant="primary" size="lg">
                  Pedir Agora <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Saiba Mais
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg"
                alt="Variedade de doces e salgados"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-6">
                <span className="bg-white/90 text-primary-600 px-4 py-2 rounded-full font-medium">
                  Entregas diárias
                </span>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-success-500"></div>
                <span className="font-medium">Entrega Rápida</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-primary-500"></div>
                <span className="font-medium">Ingredientes de Qualidade</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};