import React, { Component, useState, useEffect } from 'react';
import Contador from '../Contador/Contador';
import './Card.css';

const Card = () =>{

    return(
        <>
        <div className="card_holder">
            <h2>Producto x</h2>
            <Contador initial={5} min={0} max={10}  onAdd=""/>
        </div>
        </>
    );
}

export default Card;