import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Cart from './Pages/Cart';

export default function Routes() {
  return (
    // Switch grants that only one route is called at a time
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}
