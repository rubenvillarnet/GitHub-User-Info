import React, { Component } from 'react'

import Search from './Search';


class Home extends Component {

  render() {
    return (
      <div className="App" >
        <Search showInfo={this.showInfo} />



      </div>
    );
  }
}

export default Home;
