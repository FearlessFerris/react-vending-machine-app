import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Snack = () => {
  const { snackName } = useParams();

  return (
    <div>
      <h2>{snackName}</h2>
      <p>This is the {snackName} snack.</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
};

export default Snack;
