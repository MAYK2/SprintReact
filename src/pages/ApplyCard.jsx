import React from 'react'
import Title from '../components/Title'

export const ApplyCard = () => {
  return (
   <div className=' flex flex-col items-center justify-center h-full'>
      <Title text="Apply for a card"/>
      <div className='flex w-[80%] bg-black border border-black rounded-3xl mt- justify-around h-[70%] items-center'>

        <div>
          <form className="p-8">
            <div className="mb-8">
              <label htmlFor="cardType" className="block text-sm font-medium text-white">Select card type:</label>
              <select id="cardType" name="cardType" className="mt-1 block w-full rounded-md bg-gray-800 text-white border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105">
                <option value="" disabled selected>Select card type</option>
                <option value="debit">Debit</option>
                <option value="credit">Credit</option>
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="cardMembership" className="block text-sm font-medium text-white">Select card membership (color):</label>
              <select id="cardMembership" name="cardMembership" className="mt-1 block w-full rounded-md bg-gray-800 text-white border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105">
                <option value="" disabled selected>Select card membership (color)</option>
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
  )
}
export default ApplyCard
