import React, { useEffect, useState } from 'react';

import '../HomeContainer/HomeContainer.scss';

import ItemList from '../../componentes/ItemList/ItemList';
import { getProductsByCategory } from '../../lib/database';
import { useParams } from 'react-router-dom';
import ContentLoader from '../../componentes/ContentLoader/ContentLoader';
import swal from 'sweetalert';


const Home = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();

    useEffect(() => {
        setLoading(true);
        getProductsByCategory(category)
            .then((result) => { setProducts(result); })
            .then(() => setLoading(false))
            .catch((err) => swal(err))
    }, [category]);



    return (<>

        <div className="home_container">
            {loading ? <ContentLoader /> : <ItemList className="list" products={products} />}
        </div>
    </>
    )
}

export default Home;

