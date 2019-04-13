import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { observer } from "mobx-react"

//import logo from './logo.svg';

import './App.css';
import Home from "./components/Home"
import Info from './components/Info';
import { RootStore } from "./Store"

const App = observer(class App extends Component {

  store = RootStore.create({
    user: {
      username: "",
      name: "",
      url: "",
      location: "",
      avatar: ""
    },
    repos: [],
    orgs: []
  })

  render() {
    return (
      <div className="App" >
        <Switch>
          <Route
            exact path="/"
            render={(props) => <Home {...props} store={this.store} />} />
          <Route
            exact path="/info/:username"
            render={(props) => <Info {...props} store={this.store} />} />
        </Switch>
      </div>
    );
  }
})

export default App;
