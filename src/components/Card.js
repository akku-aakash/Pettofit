import React from 'react';
import '../Styles/card.css'
import {Link} from 'react-router-dom'

const Card = ({product}) => {    

    return (
        <div className="cardu">
        <Link className='cardu1' to={`/${product.link}`}>
            <img src={product.image} alt={product.name}/>
            <h6>{product.name}</h6>
            <p>{product.price}</p>
            </Link>
        </div>
    );
};

export default Card;