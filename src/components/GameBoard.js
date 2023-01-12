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
            //lose game
            console.log("clicked");
            props.loseGame();
            setAllCards(shuffle(getAllCards()));
            //setBoard(getUniqueSlice(allCards));
        } else {
            //update as clicked and shuffle
            //avoids mutation, good practice in react
            setAllCards(shuffle(allCards.map(card => {
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