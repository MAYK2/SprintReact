import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Title from '../components/Title';
import { useNavigate } from 'react-router-dom';  

const ApplyLoan = () => {
  const [loanType, setLoanType] = useState('');
  const [destinationAccount, setDestinationAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [userAccounts, setUserAccounts] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const token = useSelector(store => store.auth.token);

  const loanTypes = [
    { id: 1, name: 'Hipotecario', payments: [12, 24, 36, 48, 60] },
    { id: 2, name: 'Personal', payments: [6, 12, 24] },
    { id: 3, name: 'Automotor', payments: [6, 12, 24, 36] }
  ];

  useEffect(() => {
    const fetchUserAccounts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/clients/current/accounts', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        console.log('User Accounts:', response.data); // Verifica aquí que recibes las cuentas correctamente

        if (!response.data || !Array.isArray(response.data)) {
          throw new Error('Error: La respuesta del servidor no contiene datos válidos.');
        }

        setUserAccounts(response.data);

        // Set default destination account to the first account's id
        if (response.data.length > 0) {
          setDestinationAccount(response.data[0].id.toString()); // Asegúrate de convertirlo a string si es necesario
        }
      } catch (error) {
        console.error('Error fetching user accounts:', error);
      }
    };

    if (token) {
      fetchUserAccounts();
    }
  }, [token]);
  console.log('Token:', token);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Obtener el ID del tipo de préstamo seleccionado
    const selectedLoan = loanTypes.find(loan => loan.name === loanType);
    if (!selectedLoan) {
      console.error('Tipo de préstamo seleccionado no encontrado');
      return;
    }

    const loanData = {
      id: selectedLoan.id,  // Agregar el ID del tipo de préstamo seleccionado
      quantity: parseFloat(amount), // Asegúrate de convertir a número si es necesario
      payments: parseInt(paymentType), // Asegúrate de convertir a número entero si es necesario
      destinationAccount: destinationAccount // Ya estás capturando la cuenta de destino
    };

    try {
      const response = await axios.post('http://localhost:8080/api/loans/apply', loanData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.data.success) {
        throw new Error('Error al aplicar al préstamo');
      }

      setMessage('Solicitud de préstamo enviada correctamente');
      // Aquí podrías redirigir al usuario a otra página o realizar alguna acción adicional
    } catch (error) {
      console.error('Error al enviar la solicitud de préstamo:', error);
      setMessage('Hubo un error al enviar la solicitud de préstamo');
    }
  };
  return (
    <div>
      <Title text="Apply for a loan" />
      <div className="flex justify-center pt-16 gap-10">
        <div className="w-6/12 bg-black border text-white p-4 flex flex-col justify-center ml-5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 text-white">

            <div className="mb-6 w-[80%] place-self-center">
              <label htmlFor="destinationAccount" className="block text-sm font-medium">
                Select Destination Account:
              </label>
              <select
                id="destinationAccount"
                name="destinationAccount"
                value={destinationAccount}
                onChange={(e) => setDestinationAccount(e.target.value)}
                className="mt-1 block w-full h-[40px] rounded-md bg-[#4a081f] text-white border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-200 hover:scale-105"
              >
                {userAccounts.map(account => (
                  <option key={account.id} value={account.id}>{account.number}</option>
                ))}
              </select>

            </div>

            <div className="mb-6 w-[80%] place-self-center">
              <label htmlFor="amount" className="block text-sm font-medium">
                Amount:
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="E.g: $250,000.00"
                className="mt-1 block w-full h-[40px] rounded-md bg-[#4a081f] text-white border-gray-500 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-200 hover:scale-105"
              />
            </div>

            <div className="mb-6 w-[80%] place-self-center">
              <label htmlFor="loanType" className="block text-sm font-medium">
                Loan Type:
              </label>
              <select
                id="loanType"
                name="loanType"
                value={loanType}
                onChange={(e) => {
                  setLoanType(e.target.value);
                  const selectedLoan = loanTypes.find(loan => loan.name === e.target.value);
                  if (selectedLoan) {
                    setPaymentType(selectedLoan.payments[0]); // Establece el primer valor por defecto
                  }
                }}
                className="mt-1 block w-full h-[40px] rounded-md bg-[#4a081f] text-white border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-200 hover:scale-105"
              >
                <option value="" disabled>Select Loan Type</option>
                {loanTypes.map((loan, index) => (
                  <option key={index} value={loan.name}>{loan.name}</option>
                ))}
              </select>
            </div>

            <div className="mb-6 w-[80%] place-self-center">
              <label htmlFor="paymentType" className="block text-sm font-medium">
                Payment:
              </label>
              <select
                id="paymentType"
                name="paymentType"
                value={paymentType}
                onChange={(e) => setPaymentType(e.target.value)}
                className="mt-1 block w-full h-[40px] rounded-md bg-[#4a081f] text-white border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-200 hover:scale-105"
              >
                {loanTypes
                  .find(loan => loan.name === loanType)
                  ?.payments.map((payment, index) => (
                    <option key={index} value={payment}>{payment} pays</option>
                  ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-[50%] bg-indigo-600 place-self-center text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 transition-all duration-200"
            >
              Apply Loan
            </button>
          </form>
          {message && <p>{message}</p>}
           <button
            onClick={() => navigate('/loan-list')}
            className="w-[50%] bg-indigo-600 place-self-center text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 transition-all duration-200 mt-4"
          >
            Ver Préstamos disponibles
          </button>
        </div>

        <div className="w-6/12 bg-black border p-4 flex justify-center items-center mr-5">
          <img src="./assets/applyloan.png" alt="Apply Card" />
        </div>
      </div>
    </div>
  );
};

export default ApplyLoan;
