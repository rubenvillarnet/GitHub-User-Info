import React, { Component } from 'react'
import Repo from './Repo';

import { observer } from 'mobx-react';


const Repos = observer(class Repos extends Component {
  render() {
    return (
      <div>
        <h2>Repos</h2>
        {
          this.props.repos.map((repo, index) => {
            return <Repo
              key={index}
              repo={repo}
            />

          })}
      </div>
    )
  }
})


export default Repos
