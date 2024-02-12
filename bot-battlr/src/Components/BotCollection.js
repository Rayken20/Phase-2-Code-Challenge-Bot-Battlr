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
    setStartIndex((prevIndex) => prevIndex + 6);
  }

  function handlePrevious() {
    setStartIndex((prevIndex) => Math.max(prevIndex - 6, 0));
  }
  return (
    <div className="text-center bg-dark text-light py-4"> 
         <h2>Available Bots</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {bots.slice(startIndex, startIndex + 6).map((bot) => (
          <Bot
            key={bot.id}
            bot={bot}
            buttonText="Add to Army"
            handleClick={() => addToArmy(bot)}
            handleRelease={handleDischarge}
            removeFromArmy={removeFromArmy}
            style={{ margin: "20px" }}
          />
        ))}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        {startIndex >= 6 && <button onClick={handlePrevious}>Previous</button>}
        {startIndex + 6 < bots.length && (
          <button onClick={handleSeeMore}>See More</button>
        )}
      </div>
    </div>
  );
}

export default BotCollection;
