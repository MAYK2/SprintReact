import React from 'react';

const DetailsAccount = ({ account, transactions }) => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="mb-8">
        <img src="/assets/finanzas.jpeg" alt="Account Image" className="w-full h-64 object-cover rounded" />
      </div>

      <div className="flex flex-col md:flex-row md:gap-8">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">Selected Account</h3>
          <div className="p-4 border rounded shadow">
            <p>Account Number: {account.accountNumber}</p>
            <p>Balance: ${account.balance}</p>
            <p>Creation Date: {account.creationDate}</p>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h3 className="text-xl font-semibold mb-2">Transactions</h3>
          <table className="min-w-full bg-white border rounded shadow">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{transaction.date}</td>
                  <td className="py-2 px-4 border-b">{transaction.description}</td>
                  <td className="py-2 px-4 border-b">${transaction.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailsAccount;