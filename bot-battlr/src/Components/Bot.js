import React from 'react';

function Bot({ bot, buttonText, handleClick, handleRelease, showDischarge }) {
  const { name, bot_class, catchphrase, avatar_url } = bot;

  return (
    <div className="bot">
      <img src={avatar_url} alt={name} /> 
      <h3>{name}</h3>
      <p>Class: {bot_class}</p>
      <p>Catchphrase: {catchphrase}</p>
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
