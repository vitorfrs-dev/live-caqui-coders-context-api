import { IState, IAction } from './AppProvider';

export const INIT_STATE = {
  user: {
    name: '',
    avatarUrl: ''
  },
  signed: false,
  basket: []
}

export const Types = {
  GET_USER: 'GET_USER',
  REHYDRATE: 'REHYDRATE',
  LOGOUT: 'LOGOUT',
  ADD_NEW_PRODUCT: "ADD_NEW_PRODUCT",
  REMOVE_PRODUCT: "REMOVE_PRODUCT",
  INCR_PRODUCT_QTY: "INCR_PRODUCT_QTY",
  DECR_PRODUCT_QTY: "DECR_PRODUCT_QTY",
}

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case Types.GET_USER:
      return { ...state, signed: true, user: action.payload }
    case Types.REHYDRATE:
      return { ...state, ...action.payload }
    case Types.LOGOUT: {
      return { ...state, signed: false, user: { name: '', avatarUrl: '' } };
    }

    case Types.ADD_NEW_PRODUCT: {
      const product = state.basket.find(p => p.id === action.payload.id);

      if (product) {
        const newBasket = state.basket.map(product => {
          if (product.id === action.payload.id) {
            return { ...product, quantity: product.quantity + 1 }
          }
          return product;
        })

        return { ...state, basket: newBasket }
      }
      return { ...state, basket: [...state.basket, action.payload] }
    }

    case Types.INCR_PRODUCT_QTY: {
      const newBasket = state.basket.map(item => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 }
        }

        return item;
      });

      return { ...state, basket: newBasket }
    }

    case Types.DECR_PRODUCT_QTY: {
      let newBasket: any;
      const product = state.basket.find(p => p.id === action.payload);

      if (product && product.quantity - 1 < 1) {
        newBasket = state.basket.filter(p => p.id !== action.payload);
      } else {
        newBasket = state.basket.map(p => {
          if (p.id === action.payload) {
            return { ...p, quantity: p.quantity - 1 };
          }
          return p;
        });
      }

      return { ...state, basket: newBasket }
    }

    default:
      return state;
  }
}
