import React from "react";
import CartItem from "./CartItem";

import { useSelector } from 'react-redux';

function Cart() {
    const cart = useSelector(state => state.cart);

    const cartList = cart.map(item => (
        <CartItem 
          id = {item.id}
          key = {item.id}
          bot = {item.bot}
          description = {item.description}
          index_value = {item.index_value}
          cagr = {item.cagr}
          quantity = {item.quantity}
        />
    ));


    return (
        <div className="container mt-5">
            {cartList}
            {cart.length ? 
                <span></span> :
                <h1 className='text-center mt-4 mb-4 empty'>Your Cart is Empty</h1>
            }
        </div>
    );
}

export default Cart;