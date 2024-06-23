import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const MakeTransaction = () => {
  const [accounts, setAccounts] = useState([]);
  const [fromAccountNumber, setFromAccountNumber] = useState('');
  const [toAccountNumber, setToAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [destinationType, setDestinationType] = useState('propio'); // Estado para controlar el tipo de destino

  const token = useSelector(store => store.auth.token);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get('https://friendsbank.onrender.com/api/clients/current/accounts', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setAccounts(response.data);

        // Set default fromAccountNumber to the first account's number
        if (response.data.length > 0) {
          setFromAccountNumber(response.data[0].number);
        }
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };

    if (token) {
      fetchAccounts();
    }
  }, [token]);

  const handleTransfer = async (e) => {
    e.preventDefault();
    const transferData = {
      fromAccountNumber,
      toAccountNumber,
      amount: parseFloat(amount),
      description,
    };

    try {
      const response = await axios.post('https://friendsbank.onrender.com/api/transfer', transferData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMessage('Transferencia exitosa');
    } catch (error) {
      setMessage((error.response?.data || error.message));
    }
  };

  // Función para manejar el cambio de tipo de destino
  const handleDestinationTypeChange = (e) => {
    setDestinationType(e.target.value);
    // Reiniciar cuenta de destino al cambiar el tipo para evitar inconsistencias
    setToAccountNumber('');
  };

  return (
    <div>
      <div className='flex items-center gap-16 justify-around'>
        <section className='bg-black text-white w-[40%] h-[500px] mt-[50px] pr-16 font-custom'>
          <form className='flex flex-col gap-12 pl-10' onSubmit={handleTransfer}>
            <div className='flex justify-around pt-4'>
              <p>Destination Type:</p>
              <div className='flex gap-4'>
                <label>own</label>
                <input
                  type='radio'
                  value='propio'
                  checked={destinationType === 'propio'}
                  onChange={handleDestinationTypeChange}
                />
              </div>
              <div className='flex gap-4'>
                <label>Others</label>
                <input
                  type='radio'
                  value='otros'
                  checked={destinationType === 'otros'}
                  onChange={handleDestinationTypeChange}
                />
              </div>
            </div>
            <div>
              <p>Origin Account:</p>
              <select
                className='bg-[#4a081f] w-full p-2'
                value={fromAccountNumber}
                onChange={(e) => setFromAccountNumber(e.target.value)}
              >
                {accounts.map(account => (
                  <option key={account.id} value={account.number}>
                    {account.number}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p>Amount:</p>
              <input
                type='number'
                className='bg-[#4a081f] text-white w-full p-2'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div>
              <p>Description:</p>
              <input
                type='text'
                className='bg-[#4a081f] text-white w-full p-2'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            {destinationType === 'propio' ? (
              <div>
                <p>Account destination:</p>
                <select
                  className='bg-[#4a081f] text-white w-full p-2'
                  value={toAccountNumber}
                  onChange={(e) => setToAccountNumber(e.target.value)}
                >
                  {accounts.map(account => (
                    <option key={account.id} value={account.number}>
                      {account.number}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div>
                <p>Account destination:</p>
                <input
                  type='text'
                  className='bg-[#4a081f] text-white w-full p-2'
                  value={toAccountNumber}
                  onChange={(e) => setToAccountNumber(e.target.value)}
                />
              </div>
            )}
            <div>
              <button type="submit" className='bg-red-900 text-white p-2 hover:bg-blue-700 hover:text-white'>
                Transfer
              </button>
            </div>
          </form>
          {message && <p className='text-white text-center text-xl'>{message}!</p>}
        </section>
        <section className='w-[40%]'>
          <img src="/assets/finanzas.jpeg" alt="Transaction" />
        </section>
      </div>
    </div>
  );
};

export default MakeTransaction;
