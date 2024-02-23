import React, { useState } from 'react';

const ButtonsCarousel = ({ buttons, buttonsPerPage = 10 }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(buttons.length / buttonsPerPage);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * buttonsPerPage;
  const endIndex = startIndex + buttonsPerPage;
  const visibleButtons = buttons.slice(startIndex, endIndex);

  return (
    <div>
      <div className='lots-of-buttons'>
        {visibleButtons.map((button, index) => (
          <button className='single-button' key={index}>{button}</button>
        ))}
      </div>
      <div>
        <button onClick={goToPreviousPage} disabled={currentPage === 0}>
          Previous
        </button>
        <button onClick={goToNextPage} disabled={currentPage === totalPages - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ButtonsCarousel;
