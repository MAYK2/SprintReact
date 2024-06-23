import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      
      {/* Encabezado con fondo rojo y transición de colores */}
      <header className="w-full bg-[#c21b12] py-4 px-6 transition-colors duration-500 sticky top-0 z-10 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white animate-slide-horizontal">
          Bienvenido a Friends Bank
        </h1>
      </header>
      
      {/* Contenido principal */}
      <div className="flex flex-col items-center justify-center flex-1">
        <img src='/assets/logo.png' alt="Logo" className="w-32 mb-8 transform left-1/2 w-24 h-auto transition-transform duration-700 ease-in-out hover:rotate-180"/>
        <p className="text-xl font-custom text-center mb-8">
          En Friends Bank nos comprometemos a ofrecerte la mejor experiencia bancaria. Estamos aquí para acompañarte en cada paso de tu camino financiero.
        </p>
        <div className="space-x-4 flex gap-10">
          <Link to="/login" className="bg-[#4a081f] hover:bg-red-900 text-white font-bold py-2 px-6 rounded">
            Iniciar sesión
          </Link>
          <Link to="/register" className="bg-[#4a081f] hover:bg-red-900 text-white font-bold py-2 px-6 rounded">
            Registrarse
          </Link>
        </div>
        <img src='/assets/banco.jpg' alt="Friends" className="mt-10 w-1/3 h-1/3"/>
      </div>
    </div>
  );
};

export default Home;
