/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { MovieContext } from '../context';
import { getImgUrl } from '../utils/cine-utility';
import MovieDetailsModal from './MovieDetails';
import Rating from './Rating';

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { cartData, setCartData } = useContext(MovieContext);
  // console.log(cartData);

  function handleModalClose() {
    setSelectedMovie(null);
    setShowModal(false);
  }

  function handleSelectedMovie(movie) {
    setSelectedMovie(movie);
    setShowModal(true);
  }

  function handleAddToCart(event, movie) {
    event.stopPropagation();
    const found = cartData.find((item) => item.id === movie.id);
    if (!found) {
      setCartData([...cartData, movie]);
    } else {
      console.log(`${movie.title} is already in the cart!`);
    }
  }
  return (
    <>
      {showModal && (
        <MovieDetailsModal onClose={handleModalClose} movie={selectedMovie} />
      )}

      <figure className='p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl'>
        <a href='#' onClick={() => handleSelectedMovie(movie)}>
          <img
            className='w-full object-cover'
            src={getImgUrl(movie.cover)}
            alt=''
          />
          <figcaption className='pt-4'>
            <h3 className='text-xl mb-1'>Iron Man</h3>
            <p className='text-[#575A6E] text-sm mb-2'>
              Action/Adventure/Sci-fi
            </p>
            <Rating rating={movie.rating} />
            <button
              onClick={(event) => handleAddToCart(event, movie)}
              className='bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm'
              href='#'
            >
              <img src='./assets/tag.svg' alt='' />
              <span>$100 | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
