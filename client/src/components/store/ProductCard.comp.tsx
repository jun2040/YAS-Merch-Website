import { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Import interfaces
import { IProduct } from '../../interfaces/store';

// Product card function component
const ProductCard: FC<IProduct> = ({ productId, name, imageLink, price, stock }) => {
    return (
        <Link to={`/store/${productId}`}>
            <div className="card mx-3 my-3">
                <div className="card_img">
                    <img className="card-img-top" src={imageLink} alt={`${name} image`} />
                    { stock < 10 && <div className="status_tag" style={{backgroundColor: '#ff0000'}}>{stock} in stock</div> }
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{ name }</li>
                    <li className="list-group-item">{ price } Ks</li>
                </ul>
            </div>
        </Link>
    );
}

// Export component
export default ProductCard;
