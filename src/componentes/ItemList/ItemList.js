
import React  from 'react';
import './ItemList.css';
import Item from '../Item/Item'



const ItemList = ({products}) =>{

    return (<>
         
        {products.map(article => 
            <Item key={article.id} article={article}/>
            )}
        </>
        );
    
}

export default ItemList;
