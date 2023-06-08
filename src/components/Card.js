import React from 'react';
import './Card.css';

const Card = ({ card }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-type">{card.card_type}</div>
        <h2 className="card-name">{card.name}</h2>
        <p className="budget">Budget: {card.budget_name}</p>
        {card.card_type === 'burner' ? (
          <p className="card-expiry">Expiry: {card.expiry}</p>
        ) : (
          <p className="card-limit">Limit: {card.limit}</p>
        )}
        {/* Additional card details */}
      </div>
    </div>
  );
};

export default Card;
