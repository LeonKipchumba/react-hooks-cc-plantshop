import React, { useState } from 'react';

function PlantCard({ plant, setPlants }) {
  const [isInStock, setIsInStock] = useState(true);

  const handleToggleStock = () => {
    setIsInStock(!isInStock);
  };

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price.toFixed(2)}</p>
      <button
        className={isInStock ? 'primary' : ''}
        onClick={handleToggleStock}
      >
        {isInStock ? 'In Stock' : 'Sold Out'}
      </button>
    </li>
  );
}

export default PlantCard;