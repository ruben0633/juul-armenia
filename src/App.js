import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Main } from './containers';
import { Header } from './layouts';

const  App = () => {
  return (
    <>
      <Header />
      <Router>
          <Switch>
              <Route exact path="/" component={Main} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
