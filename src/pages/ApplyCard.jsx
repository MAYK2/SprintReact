import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Title from '../components/Title';

export const ApplyCard = () => {
  const authState = useSelector(state => state.auth);
  const token = authState.token;

  const [cardType, setCardType] = useState('');
  const [cardColor, setCardColor] = useState('');
  const [message, setMessage] = useState(null); // Estado para manejar mensajes de éxito o error

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      cardType: cardType.toLowerCase(),
      cardColor: cardColor.toLowerCase(),
    };

    try {
      const response = await axios.post('https://friendsbank.onrender.com/api/clients/current/cards', formData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      console.log('Respuesta exitosa:', response.data);
      setMessage('Tarjeta solicitada exitosamente'); // Establece mensaje de éxito

    } catch (error) {
      console.error('Error al solicitar la tarjeta:', error.message);
      setMessage('Error al solicitar la tarjeta'); // Establece mensaje de error
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <Title text="Apply for a card"/>
      <div className='flex w-[80%] bg-black border border-black rounded-3xl mt- justify-around h-[70%] items-center'>

        <div>
          {message && (
            <div className={`mb-4 ${message.startsWith('Error') ? 'text-red-500' : 'text-green-500'}`}>
              {message}
            </div>
          )}

          <form className="p-8" onSubmit={handleSubmit}>
            <div className="mb-8">
              <label htmlFor="cardType" className="block text-sm font-medium text-white">Select card type:</label>
              <select
                id="cardType"
                name="cardType"
                value={cardType}
                onChange={(e) => setCardType(e.target.value)}
                className="mt-1 block w-full rounded-md bg-gray-800 text-white border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <option value="" disabled>Select card type</option>
                <option value="debit">Debit</option>
                <option value="credit">Credit</option>
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="cardColor" className="block text-sm font-medium text-white">Select card color:</label>
              <select
                id="cardColor"
                name="cardColor"
                value={cardColor}
                onChange={(e) => setCardColor(e.target.value)}
                className="mt-1 block w-full rounded-md bg-gray-800 text-white border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <option value="" disabled>Select card color</option>
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
                <option value="platinum">Platinum</option>
              </select>
            </div>

            <div className="flex justify-between">
              <button type="submit" className="w-[45%] bg-[#680e34] text-white py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-[#280904] focus:outline-none focus:bg-[#280904]">Apply</button>
              <button type="button" className="w-[45%] bg-[#9a151a] text-white py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-[#FF6961] focus:outline-none focus:bg-[#9a151a]">Cancel</button>
            </div>
          </form>
        </div>

        <div className="transform rotate-3 hover:rotate-0 transition duration-300 ease-in-out">
          <img src='./assets/applycard.png' alt="Apply Card"/>
        </div>
      </div>
    </div>
  );
};

export default ApplyCard;
