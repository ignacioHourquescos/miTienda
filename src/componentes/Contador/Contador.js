
import React, { Component, useState, useEffect } from 'react';
import './Contador.css';


const Contador = ({initial, min, max, producto}) =>{
    const [contador, setContador]=useState(initial);

    //codigo de la clase. sin uso
    useEffect(() => {
        console.log("se monto");
        return()=>{
            console.log("Murio");
        }
    });

    //funciones de barra_contador
    const restarUnidad  =   min         => { (contador>min) ? setContador(contador -1) : setContador(0);   }
    const sumarUnidad   =   max         => { (contador<max) ? setContador(contador +1) : setContador(max); }

    //funcion de agerga al carrito. A desarollar
    const onAdd         =   contador    => { alert( `Agrego ${contador} unidades de  ${producto}`)}

    return<div>
        <div className="barra_contador">
            <button onClick={()=>{restarUnidad(min)}}>-</button>
            <span>{contador}</span>
            <button onClick={()=>{sumarUnidad(max)}}>+</button>
        </div>

        <div className="agregar_carrito"> 
            <button onClick={()=>{onAdd(contador,producto)}}>Agregar al Carrito</button>
        </div>
    </div>
}

export default Contador;
