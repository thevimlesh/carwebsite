import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import cars from '../data/cars'; // Import the cars data
import cars from './data/car';
import './CarSearch.css';
import Navbar from './Navbar';
import CarCard from './CarCard';

const ITEMS_PER_PAGE = 6;

const CarSearch = () => {
  const { page } = useParams();
  const currentPage = Math.max(parseInt(page) || 1, 1); // Ensure currentPage is at least 1
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const [searchTerm, setSearchTerm] = useState('');
  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedCars = filteredCars.slice(startIndex, endIndex);

  const renderCarCards = () => {
    return paginatedCars.map((car) => (
      <CarCard key={car.id} car={car} />
    ));
  };

  const renderPageNumbers = () => {
    const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);

    const pageNumbers = [];
    const maxVisiblePageNumbers = 5; // Adjust as needed

    if (totalPages <= maxVisiblePageNumbers) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <Link
            key={i}
            to={`/page/${i}`}
            className={`pagination-link ${i === currentPage ? 'active' : ''}`}
          >
            {i}
          </Link>
        );
      }
    } else {
      // Display the first pages
      for (let i = 1; i <= 4; i++) {
        pageNumbers.push(
          <Link
            key={i}
            to={`/page/${i}`}
            className={`pagination-link ${i === currentPage ? 'active' : ''}`}
          >
            {i}
          </Link>
        );
      }

      // Display ellipsis
      pageNumbers.push(<span key="ellipsis">...</span>);

      // Display the last page
      pageNumbers.push(
        <Link
          key={totalPages}
          to={`/page/${totalPages}`}
          className={`pagination-link ${
            totalPages === currentPage ? 'active' : ''
          }`}
        >
          {totalPages}
        </Link>
      );
    }

    return (
      <div className="pagination-box">
        <div className="pagination-count">{`${currentPage} from ${totalPages}`}</div>
        <div className="pagination-wrapper">
          <div className="pagination-arrows">
            <Link
              to={`/page/${currentPage - 1}`}
              disabled={currentPage === 1}
              className={`pagination-link ${
                currentPage === 1 ? 'disabled' : ''
              }`}
            >
              Previous
            </Link>
          </div>
          <div className="pagination-links">{pageNumbers}</div>
          <div className="pagination-arrows">
            <Link
              to={`/page/${currentPage + 1}`}
              disabled={currentPage === totalPages}
              className={`pagination-link ${
                currentPage === totalPages ? 'disabled' : ''
              }`}
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="car-search">
      <Navbar onSearch={setSearchTerm} />
      <div className="car-list">{renderCarCards()}</div>
      {renderPageNumbers()}
    </div>
  );
};

export default CarSearch;