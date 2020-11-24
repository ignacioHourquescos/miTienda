import React, {useState}  from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';



//2 . Fijate de ir implementando el onAdd en ItemDetail, para en ItemDetail al menos mostrar en consola el valor del counter. 
//Lo vas a necesitar para la próxima clase.


const ItemDetail = ({product}) => {

    const [units, setUnits]=useState(0);
    

    const optionSelected = (value) =>{
        console.log("apreto el mouse");
        setUnits(value);
    }

    return (
        <div className="container">

            <div className="imagen">
                <img src="https://www.vinetur.com/imagenes/2019/agosto/5/vino_termometro.jpg"/>
            </div>
            
            <div className="detalle">
                <h1>Codigo: {product.id}</h1>
                <h1>Nombre: {product.name}</h1>
                <h1>Precio: ${product.price}</h1>
                <h1>Descripcion: {product.desc}</h1>
                <h1>Prsentacion: {product.pres}</h1>
                <h1>Stock: {product.stock}</h1> 
                <div className="shopping_cart">   
                
                    <ItemCount initial={0} min={0} max={10}  onAdd={optionSelected}/>

                    <div className="add_to_cart_button primary"> 
                        <button>Agregar {units} unidad </button>
                    </div>

                </div> 
            </div>
            
            
            
        </div>
    )
}

export default ItemDetail




