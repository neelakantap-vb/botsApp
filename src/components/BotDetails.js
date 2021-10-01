import React from "react";

import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store";

export default function BotDetails() {
    const params = useParams();
    const botsData = useSelector(state => state.bots);
    const filteredBot = botsData.filter(bots => bots.id == params.id);
    // const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();

    function handleCart() {
        // if(cartItems.filter(item => item.id == params.id).length < 1){
            var newItem = {...filteredBot};
            newItem[0].quantity=1;
            dispatch(addToCart(newItem));
        // }
    }

    return(
        <div>
            {
                filteredBot.map(bot => (
                    <div className="row justify-content-around m-5" key={bot.id}>
                        <div className='col-md-5'>
                            <h4 className="card-title">{bot.bot}</h4>
                            <h6 className="card-subtitle text-muted">{bot.description}</h6>
                            <div className='row'>
                                <div className='col-md-5 pt-3 btn-group' role='group'>
                                    <button className='btn btn-primary risk'>MODERATE RISK </button>
                                    <i className="btn btn-outline-primary temp fas fa-thermometer-half"></i>
                                </div>
                                <div className='pt-3 col-md-5'>
                                    <button className="btn btn-outline-primary" onClick={handleCart}>Add to Cart</button>
                                </div>
                            </div>
                            
                        </div>
                        <div className='col-md-2 pt-3'>
                            <h5 className="card-subtitle text-center text-muted">Index Value</h5>
                            <h5 className="card-title pt-1 text-center">{bot.index_value}</h5>
                        </div>
                        <div className="col-md-2 pt-3">
                            <h5 className="card-subtitle text-center text-muted">CAGR</h5>
                            <h5 className="card-title pt-1 text-center cagr">{bot.cagr}%</h5>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}