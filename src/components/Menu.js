import React, {useState} from "react";
import {Route, Switch, Link, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';

import Bots from './Bots';
import BotDetails from "./BotDetails";

function Menu() {
  const [nav, setNav] = useState('dashboard');
  const count = useSelector(state => state.cart.length);
  const border = {borderTopLeftRadius: 20, borderTopRightRadius: 20};

  return (
    <div className="container mt-4">
        <ul className="nav nav-tabs ml-5">
          <li className="nav-item menu">
              <Link className={`${nav === 'dashboard' ? 'active' : ''} nav-link`} style={border} to='/bots' onClick={() => setNav('dashboard')}>Dashboard</Link>
          </li>
          <li className="nav-item">
              <Link className={`${nav === 'cart' ? 'active' : ''} nav-link`} style={border} to='/' onClick={() => setNav('dashboard')}>Cart - {count}</Link>
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
              </Switch>
          </div>
        </div>
    </div>
  );
}

export default Menu;