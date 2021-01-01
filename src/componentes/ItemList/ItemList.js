
import React from 'react';
import './ItemList.scss';
import Item from '../Item/Item';

const ItemList = ({ products, loading }) => {

    return (
        <> {
            products.map(article => <Item key={article.id} article={article} loadingArticle={loading} />)
        }
        </>
    );
}

export default ItemList;
