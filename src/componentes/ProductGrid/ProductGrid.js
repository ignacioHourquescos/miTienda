import React, { Component, useState, useEffect } from 'react';
import './ProductGrid.css';
import Card from '../Card/Card';



const ProductGrid = () =>{
    return(
        <div className="product_grid">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
}

export default ProductGrid;