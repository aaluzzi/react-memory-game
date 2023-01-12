import React from 'react';

function Card(props) {
    return (
        <div className="card" onClick={() => props.onClick(props.id)}>{props.emoji}</div>
    );
}

export default Card;