import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { CartItem } from '../components/cart/CartItem';
import { CartSummary } from '../components/cart/CartSummary';
import { Button } from '../components/ui/Button';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartPage: React.FC = () => {
  const { items, totalItems, clearCart } = useCart();
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Seus Pedidos</h1>
        
        {items.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <ShoppingBag className="h-16 w-16 text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Seu Carrinho está vazio</h2>
            <p className="text-gray-600 mb-6">
             Parece que você ainda não adicionou nenhum item ao seu carrinho.
            </p>
            <Link to="/menu">
              <Button variant="primary">Veja o Menu</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold">
                    Carrinho de Compras ({totalItems} {totalItems === 1 ? 'item' : 'items'})
                  </h2>
                  <button
                    onClick={clearCart}
                    className="text-gray-500 hover:text-error-500 text-sm"
                  >
                    Limpar Carrinho
                  </button>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </div>
                
                <div className="mt-6">
                  <Link
                    to="/menu"
                    className="flex items-center text-primary-600 hover:text-primary-700"
                  >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Continue Comprando
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};