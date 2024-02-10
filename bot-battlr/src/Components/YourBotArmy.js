import React from 'react';
import Bot from './Bot';

const YourBotArmy = ({ yourBotArmy, setYourBotArmy }) => {
  const releaseFromArmy = (id) => {
    setYourBotArmy(yourBotArmy.filter(bot => bot.id !== id));
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      {yourBotArmy.map(bot => (
        <Bot
          key={bot.id}
          bot={bot}
          buttonText="Release from Army"
          handleClick={() => releaseFromArmy(bot.id)}
        />
      ))}
    </div>
  );
};

export default YourBotArmy;
