import React, {useState} from 'react';
import Card from './Card';

function GameBoard(props) {
    const shuffle = (cards) => {
        const shuffled = [...cards];
        shuffled.sort((a, b) => 0.5 - Math.random());

        //make sure one of the first 6 hasn't been clicked
        if (shuffled.slice(0, 6).some(card => !card.clicked)) {
            return shuffled.map((card, index) => {
                return {...card, id: index};
            });
        } else {
            return shuffle(cards);
        }
    };

    const [allCards, setAllCards] = useState(shuffle(getAllCards()));

    const onClick = (id) => {
        if (allCards[id].clicked) {
            props.endGame(props.score);
            setAllCards(shuffle(getAllCards()));
        } else {
            if (props.score >= getAllCards().length - 1) {
                props.winGame(props.score + 1);
                return;
            }
            props.addPoint();

            //update as clicked and shuffle
            //avoids mutation, good practice in react
            setAllCards(shuffle(allCards.map(card => {
                if (card.id === id) {
                    return {...card, clicked: true};
                } else {
                    return card;
                }
            })));
        }
    }

    return (
        <div className="board">
            {allCards.slice(0, 6).map(card => <Card key={card.id} id={card.id} emoji={card.emoji} onClick={onClick}/>)}
        </div>
    );
}

function getAllCards() {
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
    }, {        
        emoji: "😮",
    }, {
        emoji: "😛",
    }, {
        emoji: "😴",
    }, {
        emoji: "☹️"
    }, {
        emoji: "😇"
    }, {
        emoji: "😍"
    }].map(card => {return {...card, clicked: false}});
}

export default GameBoard;