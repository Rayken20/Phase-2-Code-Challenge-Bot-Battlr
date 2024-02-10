import React, { useState, useEffect } from 'react';
import BotCollection from './Components/BotCollection';
import YourBotArmy from  './Components/YourBotArmy'

const App = () => {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await fetch('https://bot-api-20.vercel.app/bots');
        if (!response.ok) {
          throw new Error('Failed to fetch bots');
        }
        const data = await response.json();
        setBots(data);
      } catch (error) {
        console.error('Error fetching bots:', error);
      }
    };

    fetchBots();
  }, []);

  return (
    <div>
      <h1>Galactic Bot Army</h1>
      <BotCollection bots={bots} setYourBotArmy={setYourBotArmy} yourBotArmy={yourBotArmy} />
      <YourBotArmy yourBotArmy={yourBotArmy} setYourBotArmy={setYourBotArmy} />
    </div>
  );
};

export default App;
