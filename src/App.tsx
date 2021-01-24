import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Start, Board } from './containers';
import R from './utils/routes';

function App() {
  return (
    <Switch>
      <Route exact path={R.ROOT} component={Start} />
      <Route exact path={R.BOARD} component={Board} />
    </Switch>
  );
}

export default App;
