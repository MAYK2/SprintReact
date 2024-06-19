import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CardAccount from '../components/CardAccount'; // Asegúrate de que la ruta sea correcta según tu estructura de archivos

const AccountDetails = () => {
  const [account, setAccount] = useState(null);
  const { id } = useParams(); // Obtenemos el ID de los parámetros de la URL
  const token = useSelector(store => store.auth.token);

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/clients/current/accounts/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setAccount(response.data);
      } catch (error) {
        console.error('Error fetching account details:', error);
      }
    };

    if (token) {
      fetchAccountDetails();
    }
  }, [id, token]);

  if (!account) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-8 px-4">
      <div className='flex justify-center'>
        <CardAccount
          accountNumber={account.number}
          amount={account.balance}
          creationDate={account.creationDate}
        />
      </div>

      <h3 className="text-xl font-semibold mb-4">Transactions:</h3>
      
      {account.transactions.length === 0 ? (
        <div className="text-center text-gray-500">No transactions available.</div>
      ) : (
        <div className="transactions-table bg-black text-white rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-black">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Type</th>
              </tr>
            </thead>
            <tbody className="bg-black divide-y divide-gray-700">
              {account.transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${transaction.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AccountDetails;
