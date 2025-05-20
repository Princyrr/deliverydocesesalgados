import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Hero } from '../components/home/Hero';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { Categories } from '../components/home/Categories';
import { HowItWorks } from '../components/home/HowItWorks';
import { Testimonials } from '../components/home/Testimonials';
import { products, categories } from '../data/mockData';

export const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts products={products} />
      <Categories categories={categories} />
      <HowItWorks />
      <Testimonials />
    </Layout>
  );
};