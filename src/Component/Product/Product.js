import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props.product);
    const {name, img, price,seller, stock,star} = props.product;
    // fontawesome icon in button
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className = 'd-flex align-center product border-bottom '>
           <div>
           <img src={img} alt="" />
           </div>
      <div >
      <h4 className ='product-name'>{name}</h4>
            <p>By :{seller}</p>
            <p>${price}</p>
        <p>only {stock} left in stock - order soon</p>

        {/* rating */}
        <Rating  initialRating={star}
        fullSymbol="fas fa-star icon-color"
         emptySymbol="far fa-star icon-color"
         readonly  >
        </Rating>
        <br />
        <button   onClick={() => props.handleAddToCart(props.product)} 
        className ='btn-regular'> {cartIcon}  AddToCart</button>
      </div>

        </div>
    );
};

export default Product;