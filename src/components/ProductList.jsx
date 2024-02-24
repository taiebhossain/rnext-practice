import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

async function getProducts({ queryKey }) {
  const response = await axios.get(
    `http://localhost:3000/products?_page=${queryKey[1]}&_per_page=3}`,
  );
  return response.data;
}

export default function ProductList({ setId }) {
  const [page, setPage] = useState(1);
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['products', page],
    queryFn: getProducts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className='flex flex-col items-center justify-center w-3/5'>
      <h1 className='text-3xl my-2'>Product List</h1>
      <ul className='flex flex-wrap justify-center items-center'>
        {products.data &&
          products.data.map((item) => (
            <li
              className='flex flex-col items-center rounded-sm border m-2'
              key={item.id}
            >
              <img
                className='object-cover h-64 w-96 rounded-sm'
                src={item.thumbnail}
                alt={item.title}
              />
              <p className='text-xl my-3'>{item.title}</p>
              <button
                onClick={() => setId(Number(item.id))}
                className='border rounded mb-3 px-3 py-2'
              >
                Show details
              </button>
            </li>
          ))}
      </ul>
      <div className='flex justify-between gap-10'>
        <button
          disabled={products.prev === null}
          className='border p-2 disabled:opacity-25'
          onClick={() => setPage(products.prev)}
        >
          Prev
        </button>

        <button
          disabled={products.next === null}
          className='border p-2 disabled:opacity-25'
          onClick={() => setPage(products.next)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
