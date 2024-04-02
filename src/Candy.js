// Candy.js
import React from 'react';
import { Link } from 'react-router-dom';

const Candy = () => {
  return (
    <div>
      <h2>Candy</h2>
      <p>This is the Candy snack.</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
};

export default Candy;
