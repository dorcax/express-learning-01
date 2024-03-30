import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-full mr-2 ${
            currentPage === i ? 'bg-blue-700' : ''
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <div className="flex">{renderPageNumbers()}</div>
    </div>
  );
};

export default Pagination;
