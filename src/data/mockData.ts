import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Cakes',
    type: 'sweet',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg'
  },
  {
    id: '2',
    name: 'Cupcakes',
    type: 'sweet',
    image: 'https://images.pexels.com/photos/913135/pexels-photo-913135.jpeg'
  },
  {
    id: '3',
    name: 'Cookies',
    type: 'sweet',
    image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg'
  },
  {
    id: '4',
    name: 'Pastries',
    type: 'savory',
    image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg'
  },
  {
    id: '5',
    name: 'Sanduiches',
    type: 'savory',
    image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg'
  },
  {
    id: '6',
    name: 'Snacks',
    type: 'savory',
    image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Chocolate Cake',
    description: 'Bolo de chocolate rico e úmido com cobertura de ganache aveludada.',
    price: 35.99,
    image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg',
    category: 'sweet',
    tags: ['chocolate', 'cake', 'Sobremesa'],
    popular: true,
    featured: true
  },
  {
    id: '2',
    name: 'Red Velvet Cupcake',
    description: 'Cupcakes clássicos de red velvet com cobertura de cream cheese.',
    price: 4.99,
    image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg',
    category: 'sweet',
    tags: ['cupcake', 'red velvet', 'Sobremesa'],
    popular: true,
    featured: false
  },
  {
    id: '3',
    name: 'Biscoitos',
    description: 'Biscoitos caseiros com pedaços generosos de chocolate.',
    price: 2.99,
    image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg',
    category: 'sweet',
    tags: ['cookies', 'chocolate', 'Sobremesa'],
    popular: true,
    featured: false
  },
  {
    id: '4',
    name: 'Cheese Croissant',
    description: 'Croissant amanteigado e folhado recheado com queijo cremoso.',
    price: 3.99,
    image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg',
    category: 'savory',
    tags: ['Massa Folhada', 'cheese', 'Café da manhã'],
    popular: true,
    featured: true
  },
  {
    id: '5',
    name: 'Club Sanduíche',
    description: 'Sanduíche triplo com frango, bacon, alface e tomate.',
    price: 8.99,
    image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg',
    category: 'savory',
    tags: ['sanduiche', 'chicken', 'Lanche'],
    popular: false,
    featured: true
  },
  {
    id: '6',
    name: 'Mini Quiches',
    description: 'Mini quiches sortidas com recheios de espinafre, cogumelo e queijo.',
    price: 12.99,
    image: 'https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg',
    category: 'savory',
    tags: ['quiche', 'Festa', 'Petisco'],
    popular: false,
    featured: false
  },
  {
    id: '7',
    name: 'Strawberry Cheesecake',
    description: 'Cheesecake cremoso estilo Nova York coberto com morangos frescos.',
    price: 6.99,
    image: 'https://images.pexels.com/photos/992394/pexels-photo-992394.jpeg',
    category: 'sweet',
    tags: ['cheesecake', 'strawberry', 'Sobremesa'],
    popular: true,
    featured: true
  },
  {
    id: '8',
    name: 'Chicken Empanadas',
    description: 'Pastéis salgados recheados com frango temperado e legumes.',
    price: 3.49,
    image: 'https://images.pexels.com/photos/6941054/pexels-photo-6941054.jpeg',
    category: 'savory',
    tags: ['empanada', 'chicken', 'Lanche'],
    popular: true,
    featured: false
  }
];
