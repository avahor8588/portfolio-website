import './card.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ imagePath, description, navigateTo }) => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(navigateTo)}>
      <div className="card-image">
        <img src={imagePath} alt="Description" />
      </div>
      <div className="card-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
