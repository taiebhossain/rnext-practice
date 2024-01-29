import { useContext, useState } from 'react';
import Moon from '../assets/icons/moon.svg';
import Sun from '../assets/icons/sun.svg';
import logo from '../assets/logo.svg';
import ring from '../assets/ring.svg';
import cartImg from '../assets/shopping-cart.svg';
import { MovieContext, ThemeContext } from '../context';
import CartDetails from './CartDetails';

export default function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [showCart, setShowCart] = useState(false);
  console.log(darkMode);
  const { cartData } = useContext(MovieContext);

  function handleShowCart() {
    setShowCart(true);
  }
  return (
    <>
      {showCart && <CartDetails onClose={() => setShowCart(false)} />}
      <header>
        <nav className='container flex items-center justify-between space-x-10 py-6'>
          <a href='index.html'>
            <img src={logo} width='139' height='26' alt='' />
          </a>

          <ul className='flex items-center space-x-5'>
            <li>
              <a
                className='bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block'
                href='#'
              >
                <img src={ring} width='24' height='24' alt='' />
              </a>
            </li>
            <li>
              <a
                className='bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block'
                href='#'
                // onClick={() => setDarkMode((darkMode) => !darkMode)}
                onClick={() => {
                  setDarkMode((darkMode) => !darkMode);
                }}
              >
                <img
                  src={darkMode ? Moon : Sun}
                  width='24'
                  height='24'
                  alt='theme-icon'
                />
              </a>
            </li>
            <li>
              <a
                onClick={handleShowCart}
                className='bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block'
                href='#'
              >
                <img src={cartImg} width='24' height='24' alt='' />
                <span className='rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]'>
                  {cartData?.length}
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
