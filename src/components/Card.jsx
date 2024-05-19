import React from "react";

const Card = ({ accountNumber, amount, creationDate }) => {
  return (
    <div className="flex bg-black text-white italic p-4 ml-4 mb-8 border border-black rounded-lg w-[35%] h-[100%] items-center transition-transform hover:scale-105 relative">
      <div className="flex mx-auto w-[85%] gap-16 flex-col">
          <div className="absolute top-3 right-5">
            <img src="./assets/lapiz.png" className="w-12" />
          </div>
        <div className="flex flex-wrap w-full gap-16">
          <p className="mb-4 text-3xl">Number of account:</p>
          <p className="text-3xl">{accountNumber}</p>
        </div>
        <div className="flex flex-wrap w-full">
          <p className="text-3xl">Amount:</p>
          <p className="w-2/3 text-center text-5xl">{amount}</p>
        </div>
        <div className="flex gap-28">
          <p className="text-3xl">Fecha de creación:</p>
          <p className="text-3xl">{creationDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
