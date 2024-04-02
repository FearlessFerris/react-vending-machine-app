import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Candy from './Candy';
import Soda from './Soda';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/snack/chips" element={<Chips />} />
        <Route path="/snack/candy" element={<Candy />} />
        <Route path="/snack/soda" element={<Soda />} />
      </Routes>
    </Router>
  );
};

export default App;
