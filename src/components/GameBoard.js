import React, {useState} from 'react';
import Card from './Card';

function GameBoard(props) {
    const shuffleBoard = (board) => {
        const shuffled = [...board];
        shuffled.sort((a, b) => 0.5 - Math.random());
        return shuffled.map((card, index) => {
            return {...card, id: index};
        });
    };

    const [board, setBoard] = useState(shuffleBoard(initBoard()))

    const onClick = (id) => {
        if (board[id].clicked) {
            //lose game
            console.log("clicked");
            props.loseGame();
            setBoard(shuffleBoard(initBoard()));
        } else {
            //update as clicked and shuffle
            //avoids mutation, good practice in react
            setBoard(shuffleBoard(board.map(card => {
                if (card.id === id) {
                    return {...card, clicked: true};
                } else {
                    return card;
                }
            })));
            props.addPoint();
        }
    }

    return (
        <div className="board">
            {board.map(card => <Card key={card.id} id={card.id} emoji={card.emoji} onClick={onClick}/>)}
        </div>
    );
}

function initBoard() {
    return [{
        emoji: "😀",
    }, {
        emoji: "😂",
    }, {
        emoji: "😭",
    }, {
        emoji: "😳",
    }, {
        emoji: "😊",
    }, {
        emoji: "😐",
    }, {
        emoji: "🤔",
    }, {
        emoji: "😘",
    }].map(card => {return {...card, clicked: false}});
}

export default GameBoard;