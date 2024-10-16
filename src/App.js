import React, { useState } from 'react';

const MatchGame = ({ logoUrl, timerImageUrl, imagesList, navItemsList, tabsList, thumbnailsList }) => {
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);

  return (
    <div className="app-container">
      {/* Website Logo */}
      <img src={logoUrl} alt="website logo" />
      
      {/* Score Display */}
      <p>Score: {score}</p>

      {/* Timer Image */}
      <img src={timerImageUrl} alt="timer" />
      <p>{timer} sec</p>

      {/* Nav Items List */}
      <ul>
        {navItemsList.map((navItem) => (
          <li key={navItem.id}>{navItem.name}</li>
        ))}
      </ul>

      {/* Tabs List */}
      <ul>
        {tabsList.map((tab) => (
          <li key={tab.id}>{tab.name}</li>
        ))}
      </ul>

      {/* Thumbnails List with at least 13 buttons */}
      <ul>
        {thumbnailsList.map((thumbnail) => (
          <li key={thumbnail.id}>
            <button>{thumbnail.name}</button>
          </li>
        ))}
      </ul>

      {/* Match Image */}
      <img src={imagesList[0].imageUrl} alt="match" />
    </div>
  );
};

export default MatchGame;
