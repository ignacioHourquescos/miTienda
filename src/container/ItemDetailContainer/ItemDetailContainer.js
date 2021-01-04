import React, { useEffect, useState } from 'react';
import { getSingleProductFromDatabase } from '../../lib/database';
import './ItemDetailContainer.scss';
import ItemDetail from '../../componentes/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import MyLoader from "../../componentes/ContentLoader/ContentLoader";
import { useHistory } from "react-router-dom";


const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    let history = useHistory();

    useEffect(() => {
        setLoading(true);
        getSingleProductFromDatabase(id)
            .then((result) => { setProduct(result); })
            .then(() => setLoading(false))
            .catch((err) =>{history.push('/*')})
    }, [id, history]);


    return (
        <div className="loader_container">

            {
                loading
                    ? <div className="loader_container"><MyLoader /></div>
                    : <ItemDetail product={product} />
            }

        </div>
    )
}

export default ItemDetailContainer
