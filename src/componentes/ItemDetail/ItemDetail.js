import React, {useState}  from 'react';
//Components & CSS
import ItemCount from '../ItemCount/ItemCount';
import ItemDescription from '../ItemDescription/ItemDescription';
import AddToCart from '../AddToCart/AddToCart';
import useAppContext from '../../context/UseAppContext';
import './ItemDetail.scss';

const ItemDetail = ({product}) => {

    const [units, setUnits]=useState(1);
    const {cartArray} = useAppContext();
    
    const optionSelected = (value) =>{
        setUnits(value);
    }

    //Searches existing quantity of the article in Cart
    const find =(id)=>{
        var aux = cartArray.find(element =>element.id==id);
        if (!aux) return 0;
        return aux.quantity;
    }

    return (
        <div className="container">
            <div className="item_detail_left">
                <div className="image_detail_container">
                    <img className="image_detail" src={product.img} alt={product.img}/>
                </div>
                <div>canitdada acutal en tu carrito: {find(product.id)}</div>
            </div>
            <div className="item_detail_right">
                <ItemDescription product={product}/> 
                <div calssName="">
                    <ItemCount initial={0} min={0} max={10}  onAdd={optionSelected}/>
                    <AddToCart product={product} units={units}/>
                </div>
            </div>
        </div>
            
    )
}

export default ItemDetail




