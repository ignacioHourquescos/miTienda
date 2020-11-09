import React, { Component, useState, useEffect } from 'react';
import Contador from '../Contador/Contador';
import './Card.css';

const Card = ({producto}) =>{

    return(
        <>
        <div className="card_holder">
            <h2>{producto}</h2>
            <Contador initial={5} min={0} max={10}  onAdd="" producto={producto}/>
        </div>
        </>
    );
}

export default Card;