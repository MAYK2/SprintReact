import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreditCard from '../components/CreditCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cards = () => {
  const [cards, setCards] = useState([]);
  const token = useSelector(store => store.auth.token);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('https://friendsbank.onrender.com/api/clients/current/cards', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    if (token) {
      fetchCards();
    }
  }, [token]);

  const getColor = (cardColor) => {
  switch (cardColor) {
    case 'GOLD':
      return '#CCB300'; // Amarillo dorado
    case 'SILVER':
      return '#A9A9A9'; // Color platino
    case 'TITANIUM':
      return '#C0C0C0'; // Color titanio
    default:
      return 'white'; // Color por defecto si no coincide ningún caso
  }
};


 const creditCards = cards.filter(card => card.type === 'CREDIT');
const debitCards = cards.filter(card => card.type === 'DEBIT');

return (
  <div className="p-4 flex gap-16 flex-col mt-10">
    <section className="mb-8 flex justify-center flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Tarjetas de Crédito</h2>
      {creditCards.length > 0 ? (
        <div className="flex gap-32">
          {creditCards.map(card => (
            <CreditCard
              key={card.id}
              color={getColor(card.color)}
              cardNumber={card.cardNumber}
              cardHolder={card.cardholder}
              expirationDate={`${new Date(card.thrudate).getMonth() + 1}/${new Date(card.thrudate).getFullYear().toString().slice(-2)}`}
              cvv={card.cvv}
            />
          ))}
        </div>
      ) : (
        <p className='text-2xl font-bold mt-4'>No posee tarjetas de crédito.</p>
      )}
    </section>
    <section className='flex justify-center flex-col items-center'>
      <h2 className="text-2xl font-bold mb-4">Tarjetas de Débito</h2>
      {debitCards.length > 0 ? (
        <div className="flex gap-32">
          {debitCards.map(card => (
            <CreditCard
              key={card.id}
              color={getColor(card.color)}
              cardNumber={card.cardNumber}
              cardHolder={card.cardholder}
              expirationDate={`${new Date(card.thrudate).getMonth() + 1}/${new Date(card.thrudate).getFullYear().toString().slice(-2)}`}
              cvv={card.cvv}
            />
          ))}
        </div>
      ) : (
        <p className='text-2xl font-bold mt-4'>No posee tarjetas de débito.</p>
      )}
    </section>
    <div className='flex place-self-center mb-10'>
      <button className='border border-black rounded-3xl w-[250px] h-[100px] place-self-center bg-[#4a081f] text-white text-xl font-custom transition duration-300 ease-in-out hover:bg-black'>
        <Link to="/apply-card">Apply a card</Link>
      </button>
    </div>
  </div>
);
};

export default Cards;
