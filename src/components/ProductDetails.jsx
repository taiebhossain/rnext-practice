import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

async function getProduct({ queryKey }) {
  const response = await axios.get(
    `http://localhost:3000/${queryKey[0]}/${queryKey[1]}`,
  );
  console.log(response.data);
  return response.data;
}

export default function ProductDetails({ id }) {
  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['products', id],
    queryFn: getProduct,
  });
  // console.log(product);
  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className='w-1/5'>
      <h1 className='text-3xl my-2'>Product Details: </h1>
      <div className='flex flex-col border rounded p-2'>
        <img src={product?.thumbnail} alt='' />
        <p className='my-2 text-xl capitalize'>{product?.title}</p>
        <p>{product?.description}</p>
      </div>
    </div>
  );
}
