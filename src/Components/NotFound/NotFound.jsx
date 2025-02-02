import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>4😕4</h1>
        <h2>Oops! Looks like you're lost in the cabin woods</h2>
        <p>The page you're looking for has gone camping...</p>
        <div className="cabin-ascii">
          <pre>
            {`
            
∵*.•´¸.•*´✶´♡
° ☆ °˛*˛☆_Π______*˚☆*
˚ ˛★˛•˚*/______/ ~⧹。˚˚
˚ ˛•˛•˚ ｜ 田田 ｜門｜ ˚*
🌷╬╬🌷╬╬🌷╬╬🌷╬╬🌷

            `}
          </pre>
        </div>
        <button onClick={() => navigate('/')} className="home-button">
          <Home size={20} />
          Take Me Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;