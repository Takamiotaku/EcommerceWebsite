import React, { useState } from 'react';

const ButtonsCarousel = ({ children, buttonsPerPage = 10 }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(React.Children.count(children) / buttonsPerPage);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * buttonsPerPage;
  const endIndex = startIndex + buttonsPerPage;
  const visibleButtons = React.Children.toArray(children).slice(startIndex, endIndex);

  return (
    <div className="carousel-container">
      <div className="buttons-wrapper">
        {visibleButtons}
      </div>
      <div className="navigation">
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
