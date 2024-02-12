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
    <div className="bg-dark text-light py-4 text-center"> 
      <h2>Your Bot Army</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}> 
        {yourBotArmy.slice(startIndex, startIndex + 5).map(bot => (
          <div key={bot.id} style={{ padding: '10px' }}> 
            <Bot
              bot={bot}
              buttonText="Release from Army"
              handleRelease={() => handleReleaseFromArmy(bot.id)}
              showDischarge 
            />
          </div>
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
