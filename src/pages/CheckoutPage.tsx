import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export const CheckoutPage: React.FC = () => {
  const { items, subtotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [selectedAddress, setSelectedAddress] = useState(
    user?.addresses[0]?.id || ''
  );
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const deliveryFee = subtotal > 35 ? 0 : 4.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + deliveryFee + tax;
  
  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    // Order successfully placed
    clearCart();
    navigate('/order-confirmation');
    setIsProcessing(false);
  };
  
  if (items.length === 0) {
    navigate('/cart');
    return null;
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Address */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Endereço de Entrega</h2>
              
              {user?.addresses.map((address) => (
                <div key={address.id} className="mb-3">
                  <label className="flex items-start">
                    <input
                      type="radio"
                      name="address"
                      value={address.id}
                      checked={selectedAddress === address.id}
                      onChange={() => setSelectedAddress(address.id)}
                      className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <div className="ml-3">
                      <p className="font-medium">{address.title}</p>
                      <p className="text-gray-600 text-sm">
                        {address.street}, {address.number}
                        {address.complement && `, ${address.complement}`}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {address.neighborhood}, {address.city}, {address.zipCode}
                      </p>
                    </div>
                  </label>
                </div>
              ))}
              
              <button
                className="text-primary-600 text-sm font-medium hover:text-primary-700 mt-2"
              >
                + Add novo Endereço
              </button>
            </div>
            
            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Método de Pagamento</h2>
              
              <div className="mb-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                  />
                  <span className="ml-2">Crédito / Débito Card</span>
                </label>
              </div>
              
              {paymentMethod === 'card' && (
                <div className="mt-4 space-y-4">
                  <Input
                    label="Card Number"
                    placeholder="1234 5678 9012 3456"
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Expiry Date"
                      placeholder="MM/YY"
                    />
                    <Input
                      label="CVC"
                      placeholder="123"
                    />
                  </div>
                  
                  <Input
                    label="Cardholder Name"
                    placeholder="Name on card"
                  />
                </div>
              )}
              
              <div className="mt-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={paymentMethod === 'cash'}
                    onChange={() => setPaymentMethod('cash')}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                  />
                  <span className="ml-2">Pagamento na Entrega</span>
                </label>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-lg font-semibold mb-4">Resumo do Pedido</h2>
              
              <div className="max-h-48 overflow-y-auto mb-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded overflow-hidden mr-2">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{item.product.name}</p>
                        <p className="text-xs text-gray-500">x{item.quantity}</p>
                      </div>
                    </div>
                    <p className="text-sm">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span>Taxa de Entrega</span>
                  {deliveryFee === 0 ? (
                    <span className="text-success-500">Grátis</span>
                  ) : (
                    <span>${deliveryFee.toFixed(2)}</span>
                  )}
                </div>
                
                <div className="flex justify-between text-sm">
                  <span>Taxa</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="flex justify-between font-semibold text-lg py-3 border-t border-gray-200 mb-6">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              
              <Button
                variant="primary"
                fullWidth
                onClick={handlePlaceOrder}
                isLoading={isProcessing}
              >
                Finalizar Pedido
              </Button>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                Ao finalizar seu pedido, você concorda com nossos Termos de Serviço e Política de Privacidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};