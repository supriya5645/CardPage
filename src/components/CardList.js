import React, { useState, useEffect } from 'react';
import Card from './Card';
import mockData from '../data/mockData.json';
import './CardList.css'; // Import the CSS file for styling

const CardList = ({ tab, filter, search }) => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        // Simulating AJAX request delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const filteredCards = mockData.data.filter((card) => {
          if (tab === 'Your') {
            return card.owner_id === 123;
          } else if (tab === 'All') {
            return true;
          } else if (tab === 'Blocked') {
            return card.status === 'blocked';
          }
          return false;
        });

        // Filter cards based on search term
        const searchedCards = filteredCards.filter((card) =>
          card.name.toLowerCase().includes(search.toLowerCase())
        );

        // Calculate pagination indexes
        const startIndex = (page - 1) * perPage;
        const endIndex = startIndex + perPage;

        // Get the current page of cards
        const paginatedCards = searchedCards.slice(startIndex, endIndex);

        setCards(paginatedCards);
      } catch (error) {
        console.error(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [tab, filter, search, page]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

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

      {cards.length > 0 && (
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={page === 1}>
            Previous
          </button>
          <span>{page}</span>
          <button onClick={handleNextPage} disabled={cards.length < perPage}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default CardList;
