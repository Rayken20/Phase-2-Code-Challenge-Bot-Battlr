import React, { useState } from "react";
import Bot from "./Bot";

function BotCollection({ bots, setYourBotArmy, yourBotArmy, handleDischarge }) {
  const [startIndex, setStartIndex] = useState(0); 

  function addToArmy(bot) {
    if (!yourBotArmy.find((b) => b.id === bot.id)) {
      setYourBotArmy([...yourBotArmy, bot]);
    }
  }

  function removeFromArmy(id) {
    setYourBotArmy(yourBotArmy.filter((bot) => bot.id !== id));
  }

  function handleSeeMore() {
    setStartIndex((prevIndex) => prevIndex + 5);
  }

  function handlePrevious() {
    setStartIndex((prevIndex) => Math.max(prevIndex - 5, 0));
  }

  return (
    <div>
      <h2>Available Bots</h2>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {bots.slice(startIndex, startIndex + 5).map((bot) => (
          <Bot
            key={bot.id}
            bot={bot}
            buttonText="Add to Army"
            handleClick={() => addToArmy(bot)}
            handleRelease={handleDischarge}
            removeFromArmy={removeFromArmy} 
            style={{ margin: '20px' }} 
          />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {startIndex >= 5 && <button onClick={handlePrevious}>Previous</button>}
        {startIndex + 5 < bots.length && (
          <button onClick={handleSeeMore}>See More</button>
        )}
      </div>
    </div>
  );
}

export default BotCollection;
