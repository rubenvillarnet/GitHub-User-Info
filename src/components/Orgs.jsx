import React, { Component } from 'react'
import Org from './Org';

export default class Orgs extends Component {
  render() {
    return (
      <div>
        <h2>Orgs</h2>
        {this.props.orgs.map((org, index) => {
          return <Org
            key={index}
            org={org}
          />

        })}
      </div>
    )
  }
}
