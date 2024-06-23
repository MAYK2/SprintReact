import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MyLoans = () => {
  const [loans, setLoans] = useState([]);
  const token = useSelector(store => store.auth.token);
  const navigate = useNavigate();

  const fetchLoans = async () => {
    try {
      const response = await axios.get('https://friendsbank.onrender.com/api/loans/my-loans', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setLoans(response.data);
    } catch (error) {
      console.error('Error fetching loans:', error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchLoans();
    }
  }, [token]);

  return (
    <div className=" mx-auto mt-8 px-4 flex flex-col gap-8 ">
      <h2 className="text-3xl font-bold text-center pb-12">Your Loans:</h2>
      <div className="flex flex-wrap gap-4 items-center justify-between flex flex-col w-[100%]">
        {loans.map((loan) => (
          <div key={loan.id} className="bg-black text-white shadow-md rounded-lg p-4 w-[100%] md:w-1/3 lg:w-1/4">
            <h3 className="text-xl font-semibold">{loan.loanName}</h3>
            <p className="mt-2">Quantity: ${loan.quantity}</p>
            <p>Payments: {loan.payments}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyLoans;
