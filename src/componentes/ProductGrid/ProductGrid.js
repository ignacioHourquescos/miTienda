import React from 'react';
import './ProductGrid.css';
import Card from '../Card/Card';



const ProductGrid = () =>{
    return(
        <div className="product_grid">
            <Card producto="Aceite de oliva"/>
            <Card producto="Aceitunas"/>
            <Card producto="Mayonesa"/>
            <Card producto="Vino"/>
            <Card producto="Aceite"/>
            <Card producto="Mani"/>
            <Card producto="Jabon"/>
            <Card producto="Papel"/>
            <Card producto="Pan"/>
       
      
        </div>
    );
}

export default ProductGrid;