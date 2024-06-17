import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout({ children, showHeader = true }) {
  const loggedIn = useSelector(store => store.auth.loggedIn);

  return (
    <div className="flex flex-col h-screen">
      {showHeader && loggedIn && <Header />}
      <main className="bg-[#ff6940] pt-8 flex-grow">
        {children}
      </main>
      {loggedIn && <Footer />}
    </div>
  );
}

export default MainLayout;
