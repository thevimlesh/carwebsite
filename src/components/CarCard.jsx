import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair, faGasPump, faRoad, faCog } from '@fortawesome/free-solid-svg-icons';


import './CarCard.css';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <div className="car-card-header">
        <img src={car.imageUrl} alt={car.name} />
        <div className="car-card-horizontal">
          <div className="car-card-name">{car.name}</div>
           <div className="car-card-year-box">
            <div className="car-card-year">{car.year}</div>
          </div>
        </div>
      </div>
      <div className="car-card-details">
        <div className="car-card-horizontal">
          <div className="car-card-detail">
            <FontAwesomeIcon icon={faChair} /> Seats: {car.seats}
          </div>
          <div className="car-card-detail">
            <FontAwesomeIcon icon={faGasPump} /> Fuel: {car.fuel}
          </div>
        </div>
        <div className="car-card-horizontal">
          <div className="car-card-detail">
            <FontAwesomeIcon icon={faRoad} /> Mileage: {car.mileage}
          </div>
          <div className="car-card-detail">
            <FontAwesomeIcon icon={faCog} /> Transmission: {car.transmission}
          </div>
        </div>
      </div>
      <div className="car-card-footer">
        <div className="car-card-price">${car.price}</div>
        <button className="wishlist-button">Wishlist</button>

        <button className="rent-now-button">Rent Now</button>
      </div>
    </div>
  );
};

export default CarCard;