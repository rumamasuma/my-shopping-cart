import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
fetch('./products.JSON')
.then(res => res.json())
.then(data =>setProducts(data))
    }, []);

      // cart state
      const [cart, setCart] = useState([]);
// event handler button(function)
const handleAddToCart = product =>{
// console.log('click');
// console.log(product.name);
const newCart = [...cart , product];
setCart(newCart);
}

    return (
        <div className =' shop-container row'>
          <div className="product-container col-md-9 border-end">
<h2>Products : {products.length}</h2>
{
    products.map(product => <Product key ={product.key}
    product ={product}
    handleAddToCart ={handleAddToCart}></Product>)
}
          </div>
          <div className="cart-container col-md-3">
          
          <Cart cart ={cart}></Cart>
          </div>
        </div>
    );
};

export default Shop;