import React, { useState, useEffect } from 'react';
import Card from './Card';
import mockData from '../data/mockData.json';
import './CardList.css'; // Import the CSS file for styling

const CardList = ({ tab, filter, search }) => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        // Simulating AJAX request delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const filteredCards = mockData.data.filter((card) => {
          if (tab === 'Your') {
            return card.owner_id === 1;
          } else if (tab === 'all') {
            return true;
          } else if (tab === 'blocked') {
            return card.status === 'blocked';
          }
          return false;
        });

        // Filter cards based on search term
        const searchedCards = filteredCards.filter((card) =>
          card.name.toLowerCase().includes(search.toLowerCase())
        );

        setCards(searchedCards);
      } catch (error) {
        console.error(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [tab, filter, search]);

  return (
    <div className="card-list-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : cards.length > 0 ? (
        <div className="card-list">
          {cards.map((card) => (
            <Card key={card.name} card={card} />
          ))}
        </div>
      ) : (
        <p>No matching cards found.</p>
      )}
    </div>
  );
};

export default CardList;
