import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { CheckCircle, Package, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const OrderConfirmationPage: React.FC = () => {
  const navigate = useNavigate();
  
  // Generate a random order number
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
  const estimatedDelivery = new Date();
  estimatedDelivery.setMinutes(estimatedDelivery.getMinutes() + 45);
  
  const formattedTime = estimatedDelivery.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  
  // Redirect to home if user refreshes this page
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/');
    }, 300000); // 5 minutes
    
    return () => clearTimeout(timeout);
  }, [navigate]);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-16 w-16 bg-success-50 rounded-full mb-4">
              <CheckCircle className="h-10 w-10 text-success-500" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Pedido Confirmado!</h1>
            <p className="text-gray-600">
              Obrigado pelo seu pedido. Estamos preparando suas delícias!
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-gray-600">Número do Pedido</p>
                <p className="font-medium">{orderNumber}</p>
              </div>
              
              <div className="text-right">
                <p className="text-sm text-gray-600">Previsão de Entrega</p>
                <div className="flex items-center text-primary-600 font-medium">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Today, {formattedTime}</span>
                </div>
              </div>
            </div>
            
            <div className="relative pt-8">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200">
                <div className="h-full bg-primary-500 w-1/3 rounded"></div>
              </div>
              
              <div className="flex justify-between">
                <div className="text-center flex-1">
                  <div className="bg-primary-500 h-5 w-5 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-medium">Confirmado</p>
                </div>
                
                <div className="text-center flex-1">
                  <div className="bg-gray-300 h-5 w-5 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm">Preparando</p>
                </div>
                
                <div className="text-center flex-1">
                  <div className="bg-gray-300 h-5 w-5 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm">Em Rota de Entrega</p>
                </div>
                
                <div className="text-center flex-1">
                  <div className="bg-gray-300 h-5 w-5 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm">Entregue!</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <div className="flex justify-center items-center mb-4">
              <Package className="h-6 w-6 text-primary-500 mr-2" />
              <p className="text-gray-600">
                Seu pedido será entregue no endereço selecionado.
              </p>
            </div>
            
            <p className="text-sm text-gray-600">
             Um e-mail de confirmação foi enviado para o seu endereço de e-mail.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="primary">Continue Comprando</Button>
            </Link>
            
            <Link to="/orders">
              <Button variant="outline">Visualizar meu pedido</Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};