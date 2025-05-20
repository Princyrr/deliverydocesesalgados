import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

export const CartSummary: React.FC = () => {
  const { subtotal, totalItems } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const deliveryFee = subtotal > 35 ? 0 : 4.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + deliveryFee + tax;
  
  const handleCheckout = () => {
    if (isAuthenticated) {
      navigate('/checkout');
    } else {
      navigate('/login?redirect=checkout');
    }
  };
  
  return (
    <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
      <h2 className="text-lg font-semibold mb-4">Resumo do Pedido</h2>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span>Subtotal ({totalItems} items)</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span>Taxa de Entrega</span>
          {deliveryFee === 0 ? (
            <span className="text-success-500">Free</span>
          ) : (
            <span>${deliveryFee.toFixed(2)}</span>
          )}
        </div>
        
        <div className="flex justify-between text-sm">
          <span>Imposto Estimado</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        
        {deliveryFee > 0 && (
          <div className="text-sm text-gray-600 pt-2 border-t border-dashed border-gray-200">
            Add ${(35 - subtotal).toFixed(2)} faltam mais para obter entrega gratuita
          </div>
        )}
      </div>
      
      <div className="flex justify-between font-semibold text-lg mb-6 pt-3 border-t border-gray-200">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      
      <Button
        variant="primary"
        fullWidth
        onClick={handleCheckout}
        disabled={totalItems === 0}
      >
        {isAuthenticated ? 'Proceed to Checkout' : 'Login to Checkout'}
      </Button>
      
      <p className="text-xs text-gray-500 mt-4 text-center">
        Os prazos de entrega podem variar dependendo da sua localização e dos itens pedidos.
      </p>
    </div>
  );
};