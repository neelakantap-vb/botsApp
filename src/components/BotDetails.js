import React from "react";

import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store";

export default function BotDetails() {
    const params = useParams();
    const dispatch = useDispatch();
    const botsData = useSelector(state => state.bots);
    const filteredBot = botsData.filter(bots => bots.id == params.id);
    const cartItems = useSelector(state => state.cart);
    const cartItem = cartItems.filter(item => item.id == params.id);
    const inCart = cartItem.length >0;
    console.log(inCart);
    console.log(cartItem.length);

    function handleAddToCart() {
        if(!inCart){
            var newItem = {...filteredBot};
            newItem[0].quantity=1;
            dispatch(addToCart(newItem[0]));
        }
    }

    function handleRemoveFromCart() {
        if(inCart){
            const newCart = cartItems.filter(item => item.id != params.id);
            console.log(newCart);
            dispatch(removeFromCart(newCart, cartItem[0].quantity));
        }
    }

    return(
        <div>
            {
                filteredBot.map(bot => (
                    <div className="row justify-content-around m-5" key={bot.id}>
                        <div className='col-md-12 col-lg-6 mb-5'>
                            <h4 className="card-title">{bot.bot}</h4>
                            <h6 className="card-subtitle text-muted">{bot.description}</h6>
                            <div className='row'>
                                <div className='col-md-5 col-lg-4 pt-3 btn-group' role='group'>
                                    <button className='btn btn-primary risk'>MODERATE RISK </button>
                                    <i className="btn btn-outline-primary temp fas fa-thermometer-half"></i>
                                </div>
                                <div className='pt-3 mx-auto col-md-5'>
                                    {inCart ? 
                                        <button className="btn btn-outline-primary" onClick={handleRemoveFromCart}>Remove from Cart</button> :
                                        <button className="btn btn-outline-primary" onClick={handleAddToCart}>Add to Cart</button>
                                    }
                                </div>
                            </div>
                            
                        </div>
                        <div className='col-md-2 my-auto'>
                            <h5 className="card-subtitle text-center text-muted">Index Value</h5>
                            <h5 className="card-title pt-1 text-center">{bot.index_value}</h5>
                        </div>
                        <div className="col-md-2 my-auto">
                            <h5 className="card-subtitle text-center text-muted">CAGR</h5>
                            <h5 className="card-title pt-1 text-center cagr">{bot.cagr}%</h5>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}