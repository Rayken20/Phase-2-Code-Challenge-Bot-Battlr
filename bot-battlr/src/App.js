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

  const handleDischarge = (id) => {
    setYourBotArmy(yourBotArmy.filter(bot => bot.id !== id));
  };

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Update the Route for the home page */}
          <Route path="/available-bots" element={<BotCollection bots={bots} setYourBotArmy={setYourBotArmy} yourBotArmy={yourBotArmy} handleDischarge={handleDischarge} />} />
          <Route path="/your-bot-army" element={<YourBotArmy yourBotArmy={yourBotArmy} setYourBotArmy={setYourBotArmy} handleDischarge={handleDischarge} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
