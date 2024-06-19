import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Bienvenido a Friends Bank</h1>
      <p className="text-lg text-center mb-8">
        En Friends Bank nos comprometemos a ofrecerte la mejor experiencia bancaria. Estamos aquí para acompañarte en cada paso de tu camino financiero.
      </p>
      <div className="space-x-4">
        <Link to="/login" className="bg-[#4a081f] hover:bg-red-900 text-white font-bold py-2 px-4 rounded">
          Iniciar sesión
        </Link>
        <Link to="/register" className="bg-[#4a081f] hover:bg-red-900 text-white font-bold py-2 px-4 rounded">
          Registrarse
        </Link>
      </div>
    </div>
  );
};

export default Home;
