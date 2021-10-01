import { createStore } from "redux";

const botsState = {
    bots:[
        {
           id:1,
           bot:"Hot Bot",
           description:"Hot bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
           index_value:289.34,
           cagr:34
        },
        {
           id:2,
           bot:"Cool Bot",
           description:"Cool bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
           index_value:439.34,
           cagr:28
        },
        {
           id:3,
           bot:"Options Bot",
           description:"Options bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
           index_value:139.34,
           cagr:42
        }
    ],
    cart : [{
           id:1,
           bot:"Hot Bot",
           description:"Hot bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
           index_value:289.34,
           cagr:34,
           quantity: 1
        },]
}

const botsReducer = (state = botsState, action) => {
  if(action.type === "login") {
    return {
      isAuthenticated: true,
      cart: []
    }
  }
  else if(action.type === 'addToCart') {
    console.log({...state,
      cart:[...state.cart, action.payload]});
    return {...state,
      cart: [...state.cart, action.payload]};
  }

  return state;
}

export const addToCart = (bot) => ({
  type: "addToCart",
  payload: bot,
});

const store = createStore(botsReducer);

export default store;