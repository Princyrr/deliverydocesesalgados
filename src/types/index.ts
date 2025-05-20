export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'sweet' | 'savory';
  tags: string[];
  popular: boolean;
  featured: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  addresses: Address[];
}

export interface Address {
  id: string;
  title: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  zipCode: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  status: 'pending' | 'confirmed' | 'preparing' | 'delivering' | 'delivered';
  total: number;
  deliveryAddress: Address;
  createdAt: string;
  estimatedDelivery?: string;
}

export interface Category {
  id: string;
  name: string;
  type: 'sweet' | 'savory';
  image: string;
}