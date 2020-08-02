import { Types } from "./reducer";
import IBasketItem from "../models/basketItem";
import { IUser, IContext } from "./AppProvider";

export const getUser = (user: IUser) => ({
  type: Types.GET_USER,
  payload: user
});

export const signOut = () => ({
  type: Types.LOGOUT
});

export const rehydrate = (persistedState: IContext) => ({
  type: Types.REHYDRATE,
  payload: persistedState
});

export const addToBasket = (product: IBasketItem) => ({
  type: Types.ADD_NEW_PRODUCT,
  payload: product
});

export const incrementProduct = (id: string) => ({
  type: Types.INCR_PRODUCT_QTY,
  payload: id
});

export const decrementProduct = (id: string) => ({
  type: Types.DECR_PRODUCT_QTY,
  payload: id
});