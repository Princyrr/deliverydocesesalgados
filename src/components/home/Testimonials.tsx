import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Thompson',
    role: 'Cliente Regular',
    quote: 'O bolo de chocolate é divino! A Doces&Salgados virou minha escolha certa para todas as comemorações e desejos por doces. Entrega rápida e sempre fresquinho.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  },
  {
    id: 2,
    name: 'Miguel Silva',
    role: 'Blogueiro de Gastronomia',
    quote: 'Os salgados são incríveis. Os croissants de queijo são crocantes, amanteigados e perfeitamente assados. Super recomendo experimentar todo o cardápio!',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'Organizadora de Eventos',
    quote: 'Já pedi várias vezes para eventos corporativos. O serviço é confiável e a comida sempre recebe elogios.',
    rating: 4,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Não acredite só em nós. Veja o que nossos clientes satisfeitos têm a dizer sobre nossos doces e salgados.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    quote: string;
    rating: number;
    image: string;
  };
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-50 rounded-lg p-6 shadow-md"
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex gap-0.5 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          
          <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
        </div>
        
        <div className="flex items-center mt-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="h-12 w-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};