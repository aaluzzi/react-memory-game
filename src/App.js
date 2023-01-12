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

  if (playing) {
    return (
      <div className="app">
        <div className="score">Score: <b>{score}</b> - Best: <b>{highScore}</b></div>
        <GameBoard addPoint={addPoint} loseGame={loseGame} />
      </div>
    );
  } else {
    return (
      <div className="app">
        <div>
          <div className="title"><b>Memory Game 🧠</b></div>
          <div className="help">Get points by clicking emojis, but don't click one more than once!</div>
        </div>
        <div className="board" style={{gridTemplateColumns: "repeat(1, 0.5fr)"}}>
          <Card onClick={startGame} emoji="▶️"></Card>
        </div>      
    </div>
    );
  }
}

export default App;
