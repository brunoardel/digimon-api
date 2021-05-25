import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import DetailDigimon from './pages/DetailDigimon';

import './App.css';
import 'bulma/css/bulma.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/digimons" component={Home} />
            <Route
              exact
              path="/digimons/detail_digimon/:name"
              component={DetailDigimon}
            />
            <Redirect to="/digimons" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
