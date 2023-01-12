import './global.css';
import React, {useState} from 'react';
import GameBoard from './components/GameBoard';
import Card from  './components/Card';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [playing, setPlaying] = useState(false);

  const addPoint = () => {
    setScore(score + 1);
  }

  const startGame = () => {
    setPlaying(true);
  }

  const loseGame = () => {
    setPlaying(false);
    if (score > highScore) {
      setHighScore(score);
    }
    setScore(0);
  }

  return (
    <div className="app">
      <div className="score">Score: <b>{score}</b> - Best: <b>{highScore}</b></div>
      {playing 
        ? <GameBoard addPoint={addPoint} loseGame={loseGame} />
        : <Card onClick={startGame} emoji="▶️"></Card>
      }
    </div>
  );
}

export default App;
