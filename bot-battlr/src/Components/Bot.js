import React from 'react';

function Bot({ bot, buttonText, handleClick, handleRelease, showDischarge }) {
  const { name, model, avatar } = bot;

  return (
    <div className="bot">
      <img src={avatar} alt={name} /> 
      <h3>{name}</h3>
      <p>Model: {model}</p>
      <button onClick={handleClick}>{buttonText}</button>
      {showDischarge && (
        <button onClick={handleRelease} style={{ backgroundColor: 'red', color: 'white' }}> 
          Discharge (X)
        </button>
      )}
    </div>
  );
}

export default Bot;
