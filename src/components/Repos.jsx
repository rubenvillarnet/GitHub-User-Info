import React, { Component } from 'react'
import Repo from './Repo';

export default class Repos extends Component {
  render() {
    return (
      <div>
        <h2>Repos</h2>
        {this.props.repos.map((repo, index) => {
          return <Repo
            key={index}
            repo={repo}
          />

        })}
      </div>
    )
  }
}
