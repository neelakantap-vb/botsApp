import React from "react";
import Bot from './Bot';

import { useSelector } from 'react-redux';

function Bots() {
    // const dispatch = useDispatch();
    const bots = useSelector(state => state.bots);

    const botList = bots.map(bot => (
        <Bot 
          id = {bot.id}
          key = {bot.id}
          bot = {bot.bot}
          description = {bot.description}
          index_value = {bot.index_value}
          cagr = {bot.cagr}
        />
    ));


    return (
        <div className="container mt-5">
            <p className="pl-5">Select the Best Algo Suited for your needs</p>
            {botList}
        </div>
    );
}

export default Bots;