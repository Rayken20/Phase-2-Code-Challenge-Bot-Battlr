import React from 'react';
import Bot from './Bot';

function YourBotArmy({ yourBotArmy, setYourBotArmy }) {
  function releaseFromArmy(id) {
    setYourBotArmy(yourBotArmy.filter(bot => bot.id !== id));
  }

  return (
    <div>
      <h2>Your Bot Army</h2>
      {yourBotArmy.map(bot => (
        <Bot
          key={bot.id}
          bot={bot}
          buttonText="Release from Army"
          handleRelease={() => releaseFromArmy(bot.id)}
          showDischarge // Pass a prop to indicate that discharge button should be shown
        />
      ))}
    </div>
  );
}

export default YourBotArmy;
