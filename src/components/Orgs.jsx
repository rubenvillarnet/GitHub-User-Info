import React, { Component } from 'react'
import Org from './Org';

import { observer } from 'mobx-react';


const Orgs = observer(class Orgs extends Component {
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
})


export default Orgs
