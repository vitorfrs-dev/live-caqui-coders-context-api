import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './pages/HomePage';
import ShoppingCart from './pages/ShoppingCart';

import Header from './components/Header';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/shoppingcart' exact component={ShoppingCart} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;