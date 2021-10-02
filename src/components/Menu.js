import React from "react";
import { Route, Switch, Link, Redirect, useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';

import Bots from './Bots';
import BotDetails from "./BotDetails";
import Cart from "./Cart";

function Menu() {
  const loc = useLocation().pathname;
  const count = useSelector(state => state.cart_quantity);
  const border = {borderTopLeftRadius: 15, borderTopRightRadius: 15};

  return (
    <div className="container mt-4">
        <ul className="nav nav-tabs ml-5">
          <li className="nav-item menu">
              <Link className={`${loc === '/bots' ? 'active' : ''} nav-link`} style={border} to='/bots'>Dashboard</Link>
          </li>
          <li className="nav-item">
              <Link className={`${loc === '/cart' ? 'active' : ''} nav-link`} style={border} to='/cart'>Cart - {count}</Link>
          </li>
        </ul>
        <div className="tab-content">
          <div
            className="tab-pane fade show active">
              <Switch>
                <Route path='/' exact>
                  <Redirect to='/bots' />
                </Route>
                <Route path='/bots' exact>
                  <Bots />
                </Route>
                <Route path='/bots-details/:id' exact>
                  <BotDetails />
                </Route>
                <Route path='/cart' exact>
                  <Cart />
                </Route>
              </Switch>
          </div>
        </div>
    </div>
  );
}

export default Menu;