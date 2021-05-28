import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

import './App.css';
import 'bulma/css/bulma.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/home/details/:name" component={Details} />
            <Redirect to="/home" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
