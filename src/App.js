import './global.css';
import React, {useState} from 'react';
import GameBoard from './components/GameBoard';

function App() {
  const [points, setPoints] = useState(0);

  const addPoint = () => {
    setPoints(points + 1);
  }

  const loseGame = () => {
    setPoints(0);
  }

  return (
    <div className="app">
      <div className="score">Score: <b>{points}</b></div>
      <GameBoard addPoint={addPoint} loseGame={loseGame} />
    </div>
  );
}

export default App;
