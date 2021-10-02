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
  cart : [
    {
      id:1,
      bot:"Hot Bot",
      description:"Hot bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
      index_value:289.34,
      cagr:34,
      quantity: 3
    }
  ],
  cart_quantity : 3
    
}

const botsReducer = (state = botsState, action) => {

  if(action.type === 'addToCart') {
    return {...state,
      cart: [...state.cart, action.payload],
      cart_quantity: state.cart_quantity+1
    };
  }
  else if(action.type === 'removeFromCart') {
    return {...state,
      cart: action.payload,
      cart_quantity: state.cart_quantity-action.qntty
    };
  }
  else if(action.type === 'decrementQuantity') {
    return {...state,
      cart: action.payload,
      cart_quantity: state.cart_quantity-1
    };
  }
  else if(action.type === 'incrementQuantity') {
    return {...state,
      cart: action.payload,
      cart_quantity: state.cart_quantity+1
    };
  }

  return state;
}

export const addToCart = (bot) => ({
  type: "addToCart",
  payload: bot,
});

export const removeFromCart = (bot, qntty) => ({
  type: "removeFromCart",
  payload: bot,
  qntty: qntty
});

export const incrementQuantity = (cartItems) => ({
    type: 'incrementQuantity',
    payload: cartItems,
  }
);

export const decrementQuantity = (cartItems) => ({
  type: 'decrementQuantity',
  payload: cartItems,
}
);

const store = createStore(botsReducer);

export default store;
