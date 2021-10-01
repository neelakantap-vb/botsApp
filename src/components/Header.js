import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header(){
    const count = useSelector(state => state.cart.length);
    // const count = cart.reduce((accumulator, current) => accumulator + current.quantity, 0);
    // console.log(cart);
    // console.log(count);

    return(
        <div className="container">
            <nav className="navbar navbar-expand header fixed-top">
                <Link className="navbar-brand mr-auto" to="/"><i className="fas fa-robot"></i> BOTS</Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link cart" to="/">
                            <i className="fas fa-shopping-cart cart"></i>
                            <span className="cart-quantity text-center">{count}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

