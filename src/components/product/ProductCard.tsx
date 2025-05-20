import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../../types';
import { Card, CardImage, CardContent, CardTitle, CardDescription, CardFooter } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const priceFormatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
  };
  
  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Implement favorite functionality
    console.log('Added to favorites:', product.name);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full">
        <div className="relative">
          <CardImage src={product.image} alt={product.name} />
          {product.featured && (
            <div className="absolute top-2 left-2">
              <Badge variant="primary">Destaque</Badge>
            </div>
          )}
          {product.popular && (
            <div className="absolute top-2 right-2">
              <Badge variant="secondary">Popular</Badge>
            </div>
          )}
        </div>
        <CardContent>
          <div className="flex justify-between items-start mb-2">
            <CardTitle>{product.name}</CardTitle>
            <span className="font-semibold text-lg text-primary-600">{priceFormatted}</span>
          </div>
          <CardDescription>{product.description}</CardDescription>
          <div className="flex gap-1 mt-2 mb-3">
            {product.tags.map((tag, index) => (
              <Badge key={index} variant="accent" className="mr-1">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="primary"
            size="sm"
            fullWidth
            onClick={handleAddToCart}
            className="group"
          >
            <ShoppingCart className="w-4 h-4 mr-2 group-hover:animate-bounce" />
            Add no Carrinho
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleFavorite}
            className="ml-2"
          >
            <Heart className="w-4 h-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};