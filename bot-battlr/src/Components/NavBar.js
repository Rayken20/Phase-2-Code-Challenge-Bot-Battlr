import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link to="/">Galactic Bot Army</Link>
          </li>
          <li>
            <Link to="/available-bots">Available Bots</Link>
          </li>
          <li>
            <Link to="/your-bot-army">Your Bot Army</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
