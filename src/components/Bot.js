import React from "react";

import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store";

export default function Bot(props) {

    const botsData = useSelector(state => state.bots);
    const dispatch = useDispatch();
    const filteredBot = botsData.filter(bots => bots.id === props.id);   // ref
    const cartItems = useSelector(state => state.cart);
    const cartItem = cartItems.filter(item => item.id === props.id);     // ref
    const inCart = cartItem.length >0;

    function handleAddToCart() {
        if(!inCart){
            var newItem = {...filteredBot};
            newItem[0].quantity=1;
            dispatch(addToCart(newItem[0]));
        }
    }

    function handleRemoveFromCart() {
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
                            <div className="col-md-3 my-auto pb-4 pt-4 text-center">
                                <h4 className="card-title">{props.bot}</h4>
                            </div>
                            <div className="col-md-3 col-lg-2 my-auto pb-4 pt-4">
                                <h6 className="card-subtitle text-center text-muted">Index Value</h6>
                                <h6 className="card-title pt-1 text-center">{props.index_value}</h6>
                            </div>
                            <div className="col-md-2 my-auto pb-4 pt-4">
                                <h6 className="card-subtitle text-center text-muted">CAGR</h6>
                                <h6 className="card-title pt-1 text-center cagr">{props.cagr}%</h6>
                            </div>
                            <div className="col-md-3 col-lg-2 my-auto pb-4 pt-4 text-center">
                                <Link className="btn btn-outline-primary" to={`/bots-details/${props.id}`}>View Algo</Link>
                            </div>
                            <div className="col-md-2 my-auto pb-4 pt-4 text-center">
                                {inCart ? 
                                <button className="btn btn-outline-primary" onClick={handleRemoveFromCart}>Remove from Cart</button> :
                                <button className="btn btn-outline-primary" onClick={handleAddToCart}>Add to Cart</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}