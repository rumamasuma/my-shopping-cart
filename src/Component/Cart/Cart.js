import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props.cart);
// destructuring cart
const {cart} = props;
let total =0 ;
    for(const product of cart){
        total = total + product.price;
    }
const shipping = total > 0 ? 10 : 0;
const tax= (total +shipping) * 0.10;
const grandTotal = total + shipping + tax;
    return (
        <div>
             <h2>Order Summary</h2>
             <p>Items ordered : {props.cart.length}</p>
              <p>Items Price : $ {total.toFixed(2)}</p> 
            <p>Shipping : $ {shipping}</p>
            <p>Tax : $ {tax.toFixed(2)}</p>
            <p>Grand Total : $ {grandTotal.toFixed(2)}</p>
            
        </div>
    );
};

export default Cart;