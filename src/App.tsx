import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import ClassList from './components/classList';
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
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/classList">
          <ClassList />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
