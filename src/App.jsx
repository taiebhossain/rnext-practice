import { useEffect, useRef, useState } from 'react';

const productLimit = 10;
export default function App() {
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const loadingRef = useRef(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        // const res = await fetch(
        //   `http://localhost:3000/blogs?page=${page}&limit=2`,
        // );
        const res = await fetch(
          `https://dummyjson.com/products?limit=${productLimit}&skip=${
            page * productLimit
          }`,
        );
        const data = await res.json();
        console.log(data);

        if (data.products.length === 0) {
          setHasMore(false);
        } else {
          setProducts((prevBlogs) => [...prevBlogs, ...data.products]);
          setPage((prevPage) => prevPage + 1);
        }
      } catch (error) {
        console.log(error);
      }
    }

    const observer = new IntersectionObserver((items) => {
      const loaderItem = items[0];
      if (loaderItem.isIntersecting && hasMore) {
        // console.log(loaderItem.isIntersecting);
        // console.log(hasMore);
        fetchBlogs();
      }
    });
    if (observer && loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    // clean up
    return () => {
      if (observer) observer.disconnect();
    };
  }, [hasMore, page]);

  console.log('hasMore: ', hasMore);
  console.log('page: ', page);
  return (
    <div className='container'>
      {products.map((product) => (
        <div
          className='border h-96 flex justify-center items-center my-10 p-10 text-white'
          key={product.id}
        >
          <p>{product.description}</p>
        </div>
      ))}
      {hasMore && (
        <div ref={loadingRef} className='text-red-500'>
          🌀 Loading more posts...
        </div>
      )}
    </div>
  );
}
