import React from 'react';

function Card(props) {
    return (
        <div className="card" onClick={() => props.onClick(props.id)}><div>{props.emoji}</div></div>
    );
}

export default Card;