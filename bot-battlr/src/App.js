import React, { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';
import NavBar from './Components/NavBar';
import Home from './Components/Home'; 

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

  const handleDischarge = async (id) => {
    try {
      const response = await fetch(`https://bot-api-20.vercel.app/bots/${id}`, { method: 'DELETE' });
      if (response.ok) {
        setYourBotArmy(yourBotArmy.filter(bot => bot.id !== id));
      } else {
        console.error('Failed to delete bot from backend:', response.statusText);
      }
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  const handleReleaseFromArmy = (id) => {
    setYourBotArmy(yourBotArmy.filter(bot => bot.id !== id));
  };

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/available-bots" element={<BotCollection bots={bots} setYourBotArmy={setYourBotArmy} yourBotArmy={yourBotArmy} handleDischarge={handleDischarge} />} />
          <Route path="/your-bot-army" element={<YourBotArmy yourBotArmy={yourBotArmy} setYourBotArmy={setYourBotArmy} handleReleaseFromArmy={handleReleaseFromArmy} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
