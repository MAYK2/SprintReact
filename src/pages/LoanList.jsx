import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Title from '../components/Title';

const LoanList = () => {
  const [loans, setLoans] = useState([]);
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/loans/', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        console.log('Loans:', response.data);

        if (!response.data || response.data.length === 0) {
          throw new Error('No se encontraron préstamos.');
        }

        setLoans(response.data);
      } catch (error) {
        console.error('Error fetching loans:', error);
      }
    };

    if (token) {
      fetchLoans();
    }
  }, [token]);

  return (
    <div className="bg-black text-white p-28 rounded-md mx-auto max-w-4xl font-custom text-center ">
      <h1 className='text-3xl font-bold mb-4 text-center text-white'>PRESTAMOS DISPONIBLES</h1>
      <div className="grid gap-4">
        {loans.map((loan) => (
          <div key={loan.id} className="bg-gray-800 text-white shadow-md rounded-md p-4">
            <h2 className="text-lg font-semibold">{loan.loanName}</h2>
            <p>Max Amount: ${loan.maxAmount}</p>
            <p>Payments: {loan.payments.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanList;
