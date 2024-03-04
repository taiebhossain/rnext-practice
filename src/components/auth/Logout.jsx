import { useNavigate } from 'react-router-dom';
import logoutIcon from '../../assets/icons/logout.svg';
export default function Logout() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate('/login');
  }
  return (
    <>
      <button onClick={handleLogout} className='icon-btn'>
        <img src={logoutIcon} alt='Logout' />
      </button>
    </>
  );
}
