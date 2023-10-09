import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; 


import './Navbar.css';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search cars"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="search-icon" onClick={handleSearch} /> 
      </div>
    </nav>
  );
};

export default Navbar;