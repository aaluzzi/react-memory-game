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
    setScore(0);
    setPlaying(true);
  }

  const endGame = (finalScore) => {
    setScore(finalScore);
    setPlaying(false);
    if (finalScore > highScore) {
      setHighScore(finalScore);
      alert(`New high score of ${finalScore}!`);
    }
  }

  const winGame = (finalScore) => {
    alert("WOW! You selected every emoji once! You win.")
    endGame(finalScore);
  }

  if (playing) {
    return (
      <div className="app">
        <div className="score">Score: <b>{score}</b> - Best: <b>{highScore}</b></div>
        <GameBoard score={score} addPoint={addPoint} endGame={endGame} winGame={winGame}/>
      </div>
    );
  } else {
    return (
      <div className="app">
        <div className="title"><b>Memory Game 🧠</b></div>
        {score === 0
          ? <div className="help">Get points by clicking emojis, but don't click one more than once!</div>
          : <div className="help">Game over! Your score: {score}</div>}
        <div className="board" style={{gridTemplateColumns: "repeat(1, 0.5fr)"}}>
          <Card onClick={startGame} emoji="▶️"></Card>
        </div>      
    </div>
    );
  }
}

export default App;
