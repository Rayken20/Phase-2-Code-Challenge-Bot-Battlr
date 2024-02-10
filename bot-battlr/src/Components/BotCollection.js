import React from 'react';
import Bot from './Bot';

const BotCollection = ({ bots, setYourBotArmy, yourBotArmy }) => {
  const addToArmy = (bot) => {
    if (!yourBotArmy.find(b => b.id === bot.id)) {
      setYourBotArmy([...yourBotArmy, bot]);
    }
  };

  return (
    <div>
      <h2>Available Bots</h2>
      {bots.map(bot => (
        <Bot key={bot.id} bot={bot} buttonText="Add to Army" handleClick={() => addToArmy(bot)} />
      ))}
    </div>
  );
};

export default BotCollection;
