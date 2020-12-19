import React, {useState}  from 'react';
//Components & CSS
import ItemCount from '../ItemCount/ItemCount';
import ItemDescription from '../ItemDescription/ItemDescription';
import ItemImage from '../ItemImage/ItemImage';
import AddToCart from '../AddToCart/AddToCart';
import './ItemDetail.scss';

const ItemDetail = ({product}) => {

    const [units, setUnits]=useState(1);

    
    const optionSelected = (value) =>{
        console.log("mouse clicked on itemCount");
        console.log(value);
        setUnits(value);
    }



    return (
        <div className="container">
            <ItemImage product={product}/>
            <div className="flexcolI---I item_detail_desc">
                <ItemDescription product={product}/> 
                <ItemCount initial={1} min={0} max={10}  onAdd={optionSelected}/>
                <AddToCart product={product} units={units}/>
            </div>
        </div>
            
    )
}

export default ItemDetail




