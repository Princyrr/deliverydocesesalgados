import React from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, Truck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-primary-500" />,
      title: 'Navegue e Escolha',
      description: 'Explore nosso cardápio e escolha entre uma grande variedade de doces e salgados.',
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-secondary-500" />,
      title: 'Adicione ao Carrinho',
      description: 'Adicione seus itens favoritos ao carrinho e finalize a compra quando estiver pronto.',
    },
    {
      icon: <Truck className="h-10 w-10 text-accent-500" />,
      title: 'Entrega Rápida',
      description: 'Relaxe! Entregaremos seu pedido fresquinho e no horário.',
    },
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Como Funciona</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pedir na Doces&Salgados é rápido e fácil. Siga estes passos simples para receber deliciosos quitutes na sua porta.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gray-200"></div>
          
          {steps.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md p-6 text-center relative"
    >
      <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gray-50 rounded-full mb-6 relative z-10">
        {icon}
      </div>
      
      <div className="md:absolute md:-top-5 md:left-1/2 md:transform md:-translate-x-1/2 bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
        {index + 1}
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};