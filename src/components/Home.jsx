import React, { Component } from 'react'

import Search from './Search';
import { observer } from 'mobx-react';


const Home = observer(class Home extends Component {

  render() {
    return (
      <div className="App" >
        <Search showInfo={this.showInfo} store={this.props.store} />
      </div>
    );
  }
})

export default Home;
