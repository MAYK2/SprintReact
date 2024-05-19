import React from 'react';
import Title from '../components/Title';

export const ApplyLoan = () => {
  return (
  <div>
      <Title text="Apply for a loan" />
      <div className="flex justify-center pt-16 gap-10">
        <div className="w-6/12 bg-black border text-white p-4 flex flex-col justify-center ml-5">
          <form className="flex flex-col gap-8 text-white">
            <div className="mb-6">
              <label htmlFor="loanType" className="block text-sm font-medium">
                Select Loan:
              </label>
              <select
                id="loanType"
                name="loanType"
                className="mt-1 block w-full rounded-md bg-[#4a081f] text-white border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-200 hover:scale-105"
              >
                <option value="" disabled selected>E.j: Mortgage</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="accountOrigin" className="block text-sm font-medium">
                Account Origin:
              </label>
              <select
                id="accountOrigin"
                name="accountOrigin"
                className="mt-1 block w-full rounded-md bg-[#4a081f] text-white border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-200 hover:scale-105"
              >
                <option value="" disabled selected>E.j: VIN-001</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="amount" className="block text-sm font-medium">
                Amount:
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                placeholder="E.j: $250,000.00"
                className="mt-1 block w-full rounded-md bg-[#4a081f] text-white border-gray-500 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-200 hover:scale-105"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="paymentType" className="block text-sm font-medium">
                Payment:
              </label>
              <select
                id="paymentType"
                name="paymentType"
                className="mt-1 block w-full rounded-md bg-[#4a081f] text-white border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-200  hover:scale-105"
              >
                <option value="" disabled selected>E.j: 60 pays</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-[50%] bg-indigo-600 place-self-center text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 transition-all duration-200"
            >
              Apply Loan
            </button>
          </form>
        </div>

        <div className="w-6/12 bg-black border p-4 flex justify-center items-center mr-5">
          <img src="./assets/applyloan.png" alt="Apply Card" />
        </div>
      </div>
</div>
  );
};

export default ApplyLoan;
