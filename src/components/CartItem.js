import React from "react";

import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../store";

export default function CartItem(props) {
    const dispatch = useDispatch();
    var cartItems = useSelector(state => state.cart);
    const cartItem = cartItems.filter(item => item.id === props.id);       // ref
    const inCart = cartItem.length >0;
    const isEmpty = props.quantity === 0;

    function handleDecrement() {
        if(cartItem[0].quantity > 0){
            cartItem[0].quantity-=1;
            dispatch(decrementQuantity(cartItems));
        }
    }

    function handleIncrement() {
        cartItem[0].quantity+=1;
        dispatch(incrementQuantity(cartItems));
    }

    function handleDelete() {
        if(inCart){
            const newCart = cartItems.filter(item => item.id !== props.id);
            dispatch(removeFromCart(newCart, cartItem[0].quantity));
        }
    }

    return(
        <div className="row mb-1">
            <div className="col-md-11 mx-auto shadow p-0">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3 my-auto pt-3 pb-3 text-center">
                                <h4 className="card-title">{props.bot}</h4>
                            </div>
                            <div className="col-md-3 col-lg-2 pt-3 pb-3 my-auto">
                                <h6 className="card-subtitle text-center text-muted">Index Value</h6>
                                <h6 className="card-title pt-1 text-center">{props.index_value}</h6>
                            </div>
                            <div className="col-md-2 pt-3 pb-3 my-auto">
                                <h6 className="card-subtitle text-center text-muted">CAGR</h6>
                                <h6 className="card-title pt-1 text-center cagr">{props.cagr}%</h6>
                            </div>
                            <div className="col-md-3 col-lg-2 pt-3 pb-3 my-auto text-center">
                                <Link className="btn btn-outline-primary" to={`/bots-details/${props.id}`}>View Algo</Link>
                            </div>
                            <div className="col-md-2 pt-3 pb-3 my-auto text-center">
                                <div className='btn-group' role='group'>
                                    { isEmpty ?
                                        <button type='button' className='btn btn-secondary' onClick={handleDelete}><i className="far fa-trash-alt"></i></button> :
                                        <button type='button' className='btn btn-secondary' onClick={handleDecrement}>-</button>
                                    }
                                    <button type='button' className='btn btn-outline-secondary btn-quantity' disabled>{props.quantity}</button>
                                    <button type='button' className='btn btn-secondary' onClick={handleIncrement}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}