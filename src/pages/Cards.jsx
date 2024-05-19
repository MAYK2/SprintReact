import React from 'react';
import CreditCard from '../components/CreditCard';
import { Link } from 'react-router-dom';

const Cards = () => {
  const melbaCreditCard = {
    color: '#B8860B', // Amarillo oscuro
    cardNumber: '4498-9824-1662-0586',
    cardHolder: 'Melba Morel',
    expirationDate: '05/29', // Fecha de expiración de la tarjeta
    cvv: '333'
  };

  const melbaDebitCard = {
    color: 'silver', // Color silver
    cardNumber: '4498-3770-3454-1222',
    cardHolder: 'Melba Morel',
    expirationDate: '05/29', // Fecha de expiración de la tarjeta
    cvv: '248'
  };

  return (
    <div className="p-4 flex gap-16 flex-col mt-10">
      <section className="mb-8 flex justify-center flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Tarjetas de Crédito de Melba</h2>
        <div className="flex gap-32">
          <CreditCard {...melbaCreditCard} />
        </div>
      </section>
      <section className='flex justify-center flex-col items-center'>
        <h2 className="text-2xl font-bold mb-4">Tarjetas de Débito de Melba</h2>
        <div className="flex gap-32">
          <CreditCard {...melbaDebitCard} />
        </div>
      </section>
      <div className='flex place-self-center mb-10'>
        <button className='border border-black rounded-3xl w-[250px] h-[100px] place-self-center bg-[#4a081f] text-white text-xl font-custom transition duration-300 ease-in-out hover:bg-black'>
          <Link to="/apply-card">Apply for a Card</Link>
        </button>
      </div>
    </div>
  );
};

export default Cards;
