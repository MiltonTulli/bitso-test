import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Start } from './containers';
import R from './utils/routes';

function App() {
  return (
    <Switch>
      <Route exact path={R.ROOT} component={Start} />
      <Route exact path={R.BOARD} render={() => <div>board</div>} />
    </Switch>
  );
}

export default App;
