import React from "react";

const CardAccount = ({ accountNumber, amount, creationDate }) => {
  return (
    <div className="flex bg-black text-white text-2xl p-4 ml-4 mb-4 border border-black rounded-lg w-[40%] h-[100%] items-center transition-transform hover:scale-105 relative">
      <div className="absolute top-3 right-5">
        <img src="./assets/lapiz.png" className="w-12" />
      </div>
      <div className="flex mx-auto w-[85%] gap-16 flex-col">
        <div className="flex flex-wrap w-full gap-16">
          <p className="mb-4">Number of account:</p>
          <p>{accountNumber}</p>
        </div>
        <div className="flex flex-wrap w-full">
          <p>Amount:</p>
          <p className="w-2/3 text-center text-5xl">{amount}</p>
        </div>
        <div className="flex gap-28">
          <p>Fecha de creación:</p>
          <p>{creationDate}</p>
        </div>
      </div>
    </div>
  );
};

export default CardAccount;
