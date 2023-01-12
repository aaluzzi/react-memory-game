import './global.css';
import React, {useState} from 'react';
import GameBoard from './components/GameBoard';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const addPoint = () => {
    setScore(score + 1);
  }

  const loseGame = () => {
    if (score > highScore) {
      setHighScore(score);
    }
    setScore(0);
  }

  return (
    <div className="app">
      <div className="score">Score: <b>{score}</b> - Best: <b>{highScore}</b></div>
      <GameBoard addPoint={addPoint} loseGame={loseGame} />
    </div>
  );
}

export default App;
