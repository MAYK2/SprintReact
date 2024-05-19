import React from 'react';
import NavLink from './NavLink';

const Header = () => {
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
      <img
        src="/assets/logout.png"
        alt="logout"
        className="absolute top-6 right-16 w-12 h-auto transition-transform duration-300 ease-in-out hover:translate-x-1"
      />
    </header>
  );
}


export default Header;
