import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//import logo from './logo.svg';

import './App.css';
import Home from "./components/Home"
import UserInfo from './components/UserInfo';

class App extends Component {


  render() {
    return (
      <div className="App" >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/info/:username" component={UserInfo} />
        </Switch>
      </div>
    );
  }
}

export default App;
