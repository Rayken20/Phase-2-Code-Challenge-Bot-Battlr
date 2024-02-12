import React, { useState } from 'react';
import Bot from './Bot';

function YourBotArmy({ yourBotArmy, setYourBotArmy, handleReleaseFromArmy }) {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrevious = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 5, 0));
  };

  const handleSeeMore = () => {
    setStartIndex((prevIndex) => prevIndex + 5);
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {yourBotArmy.slice(startIndex, startIndex + 5).map(bot => (
          <Bot
            key={bot.id}
            bot={bot}
            buttonText="Release from Army"
            handleRelease={() => handleReleaseFromArmy(bot.id)}
            showDischarge 
          />
        ))}
      </div>
      <div>
        {startIndex >= 5 && <button onClick={handlePrevious}>Previous</button>}
        {startIndex + 5 < yourBotArmy.length && (
          <button onClick={handleSeeMore}>See More</button>
        )}
      </div>
    </div>
  );
}

export default YourBotArmy;
