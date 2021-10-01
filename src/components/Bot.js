import React from "react";

import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { addToCart } from "../store";

export default function Bot(props) {

    const botsData = useSelector(state => state.bots);
    const dispatch = useDispatch();
    const filteredBot = botsData.filter(bots => bots.id == props.id);


    function handleCart() {
        // if(cartItems.filter(item => item.id == params.id).length < 1){
            var newItem = {...filteredBot};
            newItem[0].quantity=1;
            dispatch(addToCart(newItem));
        // }
    }

    return(
        <div className="row mb-1">
            <div className="col-md-11 mx-auto shadow p-0">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3 pt-3 text-center">
                                <h4 className="card-title">{props.bot}</h4>
                            </div>
                            <div className="col-md-2 pt-2">
                                <h6 className="card-subtitle text-center text-muted">Index Value</h6>
                                <h6 className="card-title pt-1 text-center">{props.index_value}</h6>
                            </div>
                            <div className="col-md-2 pt-2">
                                <h6 className="card-subtitle text-center text-muted">CAGR</h6>
                                <h6 className="card-title pt-1 text-center cagr">{props.cagr}%</h6>
                            </div>
                            <div className="col-md-2 pt-3 text-center">
                                <Link className="btn btn-outline-primary" to={`/bots-details/${props.id}`}>View Algo</Link>
                            </div>
                            <div className="col-md-2 pt-3 text-center">
                                <button className="btn btn-outline-primary" onClick={handleCart}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}