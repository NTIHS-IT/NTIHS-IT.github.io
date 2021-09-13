import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import ClassList from './components/classList';
import Member from './components/members';
import Cooperates from './components/cooperates';
import {
  HashRouter as Router,
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
        <Route exact path="/member">
          <Member />
        </Route>
        <Route exact path="/cooperate">
          <Cooperates />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
