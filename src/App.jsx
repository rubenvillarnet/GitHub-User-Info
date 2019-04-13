import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { observer } from "mobx-react"
import CssBaseline from '@material-ui/core/CssBaseline';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import Home from "./components/Home"
import Info from './components/Info';
import { RootStore } from "./Store"

library.add(faMapMarkerAlt);

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
      <React.Fragment>
        <CssBaseline />
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
      </React.Fragment>

    );
  }
})

export default App;
