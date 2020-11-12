import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Card.css';

const Card = ({producto}) =>{

    return(
        <>
        <div className="card_holder">
            <h2>{producto}</h2>
            <ItemCount initial={5} min={0} max={10}  onAdd="" producto={producto}/>
        </div>
        </>
    );
}

export default Card;