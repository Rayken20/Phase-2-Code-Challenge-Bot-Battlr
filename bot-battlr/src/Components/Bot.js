import React from 'react';

const Bot = ({ bot, buttonText, handleClick }) => {
  const { name, model } = bot;

  return (
    <div className="bot">
      <h3>{name}</h3>
      <p>Model: {model}</p>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
};

export default Bot;
