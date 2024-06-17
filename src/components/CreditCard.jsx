import React, { useState } from 'react';
import './CreditCard.css';

const CreditCard = ({
  color,
  cardNumber,
  cardHolder,
  expirationDate,
  cvv
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="credit-card-container flex justify-center items-center" onClick={handleFlip}>
      <div className={`credit-card ${isFlipped ? 'flipped' : ''}`} style={{ backgroundColor: color }}>
        <div className="credit-card-front w-[500px]">
          <h3 className="text-lg font-bold text-white">Friends bank</h3>
          <div className="mt-5">
            <span className="text-sm text-white">{cardNumber}</span>
          </div>
          <div className="mt-5">
            <span className="text-sm text-white">Card Holder: {cardHolder}</span>
          </div>
          <div className="mt-2">
            <span className="text-sm text-white">Expiration Date: {expirationDate}</span>
          </div>
        </div>
        <div className="credit-card-back">
          <div className="stripe"></div>
          <div className="cvv-container">
            <span className="cvv-label">CVV</span>
            <span className="cvv-value text-white">{cvv}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
