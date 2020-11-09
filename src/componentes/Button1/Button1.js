
import React, { Component, useState, useEffect } from 'react';


const Button1 = () =>{
    const [contador, setContador]=useState(0);
    
    useEffect(() => {
        //se va a mostrar el valor
        console.log("se monto");

        return()=>{
            console.log("Murio");
            //se terminod e ejecutar toda la logica
        }
    });

    const sumarNumero =() =>{
       setContador(contador +1);
    }
    
    console.log("se va a renderizas");

    return<>
        <div className="App">
            <button onClick={()=>{sumarNumero()}}>{contador}</button>
        </div>
        </>
}

export default Button1;
