import React, { FC, createContext, useReducer, useEffect } from 'react';

import { rehydrate } from './actions';

import { reducer, INIT_STATE } from './reducer';

import IBasketItem from '../models/basketItem';

export interface IState {
  user: IUser;
  basket: IBasketItem[];
  signed: boolean;
}

export interface IUser {
  name: string;
  avatarUrl: string;
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface IContext {
  state: IState;
  dispatch: (action: IAction) => void
}

export const AppContext = createContext<IContext>({} as IContext);

const AppProvider: FC = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  useEffect(() => {
    const persisted = localStorage.getItem('persistContext');

    if (persisted) {
      dispatch(rehydrate(JSON.parse(persisted)));
    }
  }, []);

  useEffect(() => {
    if (state.signed) {
      localStorage.setItem('persistContext', JSON.stringify(state));
    }
  }, [state])

  useEffect(() => {
    if (!state.signed) localStorage.removeItem('persistContext');
  }, [state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;