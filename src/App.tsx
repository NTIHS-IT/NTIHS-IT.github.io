import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
