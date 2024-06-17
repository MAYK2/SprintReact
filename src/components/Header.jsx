import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/actions/authActions';
import NavLink from './NavLink';

const Header = () => {
  const dispatch = useDispatch();
 const navigate = useNavigate(); 

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login'); // Navega a '/login' después del logout
  };
  return (
    <header className="relative flex justify-evenly bg-[#c21b12] text-white min-h-[100px] pb-2 items-center font-custom">
      <NavLink to="/accounts">Accounts</NavLink>
      <NavLink to="/cards">Cards</NavLink>
      <img 
        src="/assets/logo.png" 
        alt="Icono" 
        className="absolute top-3/4 left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-24 h-auto transition-transform duration-700 ease-in-out hover:rotate-180" 
      />
      <NavLink to="/loans">Loans</NavLink>
      <NavLink to="/transactions">Transactions</NavLink>
      <button
        onClick={handleLogout}
        className="absolute top-6 right-16 transition-transform duration-300 ease-in-out hover:translate-x-1"
      >
        <img
          src="/assets/logout.png"
          alt="logout"
          className="w-12 h-auto"
        />
      </button>
    </header>
  );
}

export default Header;
