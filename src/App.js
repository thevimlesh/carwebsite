import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarSearch from './components/CarSearch';

function App(){
  return (
    <Router>
      <div className="App">
    <Routes>
      <Route path="/page/:page" element={<CarSearch/>} />
      <Route path="/" element={<CarSearch />} />
    </Routes>
    </div>
    </Router>
  )
}


export default App;
