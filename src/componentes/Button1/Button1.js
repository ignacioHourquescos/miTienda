
import React, { useState } from 'react';


const Button1 = () =>{
    const [name, setName]=useState('Hola como va');
    const cambiarName =() =>{
        setName("Hola coders");
    }
    
    return<>
        <div className="App">
            <button onClick={()=>{cambiarName()}}>{name}</button>
        </div>
        </>
}

export default Button1;
