// Bot.jsx
import React from 'react';

function Bot({ bot, buttonText, handleClick, handleRelease, showDischarge }) {
  const { id, name, model } = bot;

  return (
    <div className="bot">
      <h3>{name}</h3>
      <p>Model: {model}</p>
      <button onClick={handleClick}>{buttonText}</button>
      {showDischarge && ( // Conditionally render the discharge button
        <button onClick={handleRelease} className="delete-btn">
          Discharge (X)
        </button>
      )}
    </div>
  );
}

export default Bot;
