import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { ProductGrid } from '../components/product/ProductGrid';
import { products, categories } from '../data/mockData';
import { Filter, Search } from 'lucide-react';
import { Product } from '../types';

export const MenuPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryParam);
  const [activeType, setActiveType] = useState<'all' | 'sweet' | 'savory'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (activeCategory) {
      const category = categories.find(c => c.id === activeCategory);
      if (category) {
        result = result.filter(product => product.category === category.type);
      }
    }
    
    // Filter by type
    if (activeType !== 'all') {
      result = result.filter(product => product.category === activeType);
    }
    
    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(
        product =>
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower) ||
          product.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }
    
    setFilteredProducts(result);
  }, [activeCategory, activeType, searchTerm]);
  
  return (
    <Layout>
      <div className="bg-primary-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Buscar Produto</h1>
          <p className="text-gray-600 mb-6">
            Procurando um produto específico? faça uma busca do produto desejado!
          </p>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                value={activeType}
                onChange={(e) => setActiveType(e.target.value as 'all' | 'sweet' | 'savory')}
              >
                <option value="all">Todos</option>
                <option value="sweet">Doces</option>
                <option value="savory">Salgados</option>
              </select>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            <CategoryPill
              name="All"
              active={activeCategory === null}
              onClick={() => setActiveCategory(null)}
            />
            {categories.map(category => (
              <CategoryPill
                key={category.id}
                name={category.name}
                active={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <ProductGrid
          products={filteredProducts}
          emptyMessage="No products found. Try a different search or category."
        />
      </div>
    </Layout>
  );
};

interface CategoryPillProps {
  name: string;
  active: boolean;
  onClick: () => void;
}

const CategoryPill: React.FC<CategoryPillProps> = ({ name, active, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        active
          ? 'bg-primary-500 text-white'
          : 'bg-white text-gray-700 hover:bg-gray-100'
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
