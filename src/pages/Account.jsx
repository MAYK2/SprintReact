import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AccountComponent = () => {
  const [accounts, setAccounts] = useState([]);
  const token = useSelector(store => store.auth.token); // Accede al token desde el store
  const navigate = useNavigate();
  const [selectedAccountId, setSelectedAccountId] = useState(null)


const handleSelectedAccount = (id) => {
    navigate('/details-account/' + id);
  };

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get('https://friendsbank-vb9w.onrender.com/api/clients/current/accounts', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setAccounts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };

    if (token) {
      fetchAccounts();
    }
  }, [token]);

// const handleAccountClick = async (account) => {
//   try {
//     const response = await axios.get(`http://localhost:8080/api/clients/current/accounts/${account.id}`, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });
//     const accountDetails = response.data;
//     const transactionsResponse = await axios.get(`http://localhost:8080/api/clients/current/accounts/${account.id}/transactions`, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });
//     const transactions = transactionsResponse.data;
//     navigate('/details-account') ;
//   } catch (error) {
//     console.error('Error fetching account details:', error);
//   }
// };
  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-2xl font-semibold pb-12 text-center">Your Accounts:</h2>
      <div className="flex flex-wrap gap-4 items-center justify-around">
        {accounts.map((account) => (
          <Card
            key={account.id}
            accountNumber={account.number}
            balance={`$${account.balance}`}
            creationDate={`Creation Date: ${account.creationDate}`}
            onClick={() => handleSelectedAccount(account.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default AccountComponent;
