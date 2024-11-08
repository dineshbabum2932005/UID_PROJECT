import React from 'react';
import './SuccessMessage.css';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="success-message">
      <h1>Your order successfully placed!</h1>
      <button onClick={() => navigate('/')}>Go Back to Home</button>
    </div>
  );
}

export default Success;
