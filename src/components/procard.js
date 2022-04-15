import React from 'react';
import '../Styles/procard.css'
import { Link } from 'react-router-dom'

const Procard = ({ product }) => {

    let prc = ""
    if (product.price !== "") {
        prc = "Rs." + product.price
    }
    return (
        <div className="card">
            <Link to={`/${product.backendLink}`}>
                <img src={product.image} alt={product.name} />
                <h6 className="cap">{product.link}</h6>
                <h6 className="price">{prc}</h6>
            </Link>
        </div>
    );
};

export default Procard;