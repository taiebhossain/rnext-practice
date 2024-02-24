import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

async function saveProduct(newProduct) {
  const response = axios.post('http://localhost:3000/products/', newProduct);
  return response.data;
}
export default function AddProduct() {
  const queryClient = useQueryClient();
  const [state, setState] = useState({
    title: '',
    description: '',
    price: '',
    rating: 0,
    thumbnail: '',
  });
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value ? e.target.value : e.target.valueAsNumber;
    setState({ ...state, [name]: value });
  }

  const mutaion = useMutation({
    mutationFn: saveProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
    },
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
    mutaion.mutate(state);
  }
  return (
    <div className='m2 p2 bg-gray-900 w-1/5 1/2'>
      <h1 className='text-3xl text-center my-2 text-gray-800'>Add Product: </h1>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className='border rounded p-2 my-2 text-gray-800'
          type='text'
          name='title'
          placeholder='Title'
        />
        <textarea
          className='border rounded p-2 my-2 text-gray-800'
          type='text'
          name='description'
          placeholder='Description'
        />
        <input
          onChange={handleChange}
          className='border rounded p-2 my-2 text-gray-800'
          type='number'
          name='price'
          placeholder='Price'
        />
        <input
          onChange={handleChange}
          className='border rounded p-2 my-2 text-gray-800'
          type='text'
          name='thumbnail'
          placeholder='Thumbnail URL'
        />
        <button className='border rounded py-2' type='submit'>
          Save
        </button>
      </form>
    </div>
  );
}
