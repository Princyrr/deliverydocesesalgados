import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;
  
  const totalPrice = product.price * quantity;
  
  const handleIncrease = () => {
    updateQuantity(product.id, quantity + 1);
  };
  
  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };
  
  const handleRemove = () => {
    removeFromCart(product.id);
  };
  
  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      
      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>{product.name}</h3>
          <p className="ml-4">${totalPrice.toFixed(2)}</p>
        </div>
        
        <p className="mt-1 text-sm text-gray-500 line-clamp-1">{product.description}</p>
        
        <div className="flex items-center justify-between text-sm mt-2">
          <div className="flex items-center border rounded-md">
            <button
              onClick={handleDecrease}
              className="p-1 hover:bg-gray-100 rounded-l-md"
            >
              <Minus className="h-4 w-4" />
            </button>
            
            <span className="px-3 py-1 text-center w-8">{quantity}</span>
            
            <button
              onClick={handleIncrease}
              className="p-1 hover:bg-gray-100 rounded-r-md"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          
          <button
            type="button"
            onClick={handleRemove}
            className="text-error-500 hover:text-error-600 flex items-center"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            <span>Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
};