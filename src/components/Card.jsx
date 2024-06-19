import React from "react";
import { Link } from "react-router-dom";

const Card = ({ accountNumber, balance, creationDate, accountId }) => {
  return (
    <Link to={`/details-account/${accountId}`} className="flex bg-black text-white italic p-4 ml-4 mb-8 border border-black rounded-lg w-[35%] h-[100%] items-center transition-transform hover:scale-105 relative">
      <div className="flex mx-auto w-[85%] gap-16 flex-col">
        <div className="absolute top-3 right-5">
          <img src="./assets/lapiz.png" className="w-12" alt="Edit icon" />
        </div>
        <div className="flex flex-wrap w-full gap-2">
          <p className="mb-4 text-3xl">Number of account:</p>
          <p className="text-3xl">{accountNumber}</p>
        </div>
        <div className="flex flex-wrap w-full">
          <p className="text-3xl">Balance:</p>
          <p className="w-2/3 text-center text-5xl">{balance}</p>
        </div>
        <div className="flex gap-28">
          <p className="text-3xl">{creationDate}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
