// En mainLayout.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { data } from 'autoprefixer';


function MainLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="bg-[#fc4b2a] pt-8 flex-grow">{children}
      </main> 
      <Footer />
    </div>
  );
}

export default MainLayout;
