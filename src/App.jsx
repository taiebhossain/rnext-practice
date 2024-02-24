import { useState } from 'react';
import AddProduct from './components/AddProduct';
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';

export default function App() {
  const [id, setId] = useState(null);
  return (
    <div className='flex m-2'>
      <AddProduct />
      <ProductList setId={setId} />
      {id && <ProductDetails id={id} />}
    </div>
  );
}
