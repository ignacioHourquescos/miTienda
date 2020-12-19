import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Item.scss';
import ItemPurchaseIndicator from '../ItemPurchaseIndicator/ItemPurchaseIndicator'
import useAppContext from '../../context/UseAppContext';



const Item = ({article}) =>{
    const {cartArray, handleCartArray} = useAppContext();
    const [purchaseInProgress, setPurchaseInProgress] = useState(false);
    const [units, setUnits]=useState(1);

    function handleChange(newValue) {
        setPurchaseInProgress(newValue);
      }

    useEffect(()=>{
        if(cartArray.find(element =>element.id==article.id)) {
            setPurchaseInProgress(true)
        }
        else{
            setPurchaseInProgress(false)
        };
    },[cartArray])



   return(
        <div className="product_grid">
            
            <div className="card_holder">

                {/*////////CARD IMAGE & DETAIL//////*/}
                {purchaseInProgress ? <ItemPurchaseIndicator article={article} onChange={handleChange} /> :""}

                <div className="image_container">  
                    <Link to={`/product/${article.id}`} style={{backgroundColor:"white"}}  >
                        <img style={{backgroundColor:"white"}} className="image" src={article.img} alt={article.desc}/>
                    </Link>
                </div>



                {/*/////////////CARD FOOTER//////////*/}
                <div className="data_container">
                    
                    <Link className="link_to_product" to={`/product/${article.id}`} >
                        <h2>{article.name}</h2>
                        <h3 className="price"> ${article.price}</h3>
                    </Link>  

                    <div className="add_to_cart">
                         <button onClick={() =>{handleCartArray(units, article);setPurchaseInProgress(true)}}>AGREGAR</button>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Item;





