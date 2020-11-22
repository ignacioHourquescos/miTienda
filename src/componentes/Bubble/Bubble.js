import React from 'react';
import './Bubble.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';




const Bubble= ({nombreCategoria, icono}) =>{
    return(
        <div className="element_list">
          <h3>{nombreCategoria}</h3>
            <div className="bubble">
            <FontAwesomeIcon icon={faShoppingCart} />
            </div>
        </div>
    )
}

export default Bubble;