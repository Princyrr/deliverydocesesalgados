import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Category } from '../../types';

interface CategoriesProps {
  categories: Category[];
}

export const Categories: React.FC<CategoriesProps> = ({ categories }) => {
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
          <h2 className="text-3xl font-bold mb-4">Nossas Categorias</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore nossa ampla seleção de doces e salgados, todos preparados com cuidado e ingredientes de qualidade.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard 
              key={category.id} 
              category={category} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CategoryCardProps {
  category: Category;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link 
        to={`/menu?category=${category.id}`}
        className="block group"
      >
        <div className="relative overflow-hidden rounded-xl shadow-md h-64">
          <img 
            src={category.image} 
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              {category.name}
            </h3>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              category.type === 'sweet' 
                ? 'bg-primary-500/90 text-white' 
                : 'bg-secondary-500/90 text-white'
            }`}>
              {category.type === 'sweet' ? 'Doce' : 'Salgados'}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};