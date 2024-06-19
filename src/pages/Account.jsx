import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AccountComponent = () => {
  const [accounts, setAccounts] = useState([]);
  const token = useSelector(store => store.auth.token);
  const navigate = useNavigate();

  const fetchAccounts = async () => {
    try {
      const response = await axios.get('https://friendsbank.onrender.com/api/clients/current/accounts', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setAccounts(response.data);
    } catch (error) {
      console.error('Error fetching accounts:', error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchAccounts();
    }
  }, [token]);

  const handleCreateAccount = async () => {
    try {
      await axios.post('https://friendsbank.onrender.com/api/clients/current/accounts', null, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // Después de crear la cuenta, volver a obtener la lista actualizada
      fetchAccounts();
    } catch (error) {
      console.error('Error creating account:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-2xl font-semibold mb-4">Your Accounts:</h2>
      <div className="mb-4">
        <button
          onClick={handleCreateAccount}
          className="bg-[#4a081f] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Account
        </button>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-around">
        {accounts.map((account) => (
          <Card
            key={account.id}
            accountNumber={account.number}
            balance={`$${account.balance}`}
            creationDate={`Creation Date: ${account.creationDate}`}
            accountId={account.id}
          />
        ))}
      </div>
    </div>
  );
};

export default AccountComponent;
