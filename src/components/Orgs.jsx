import React, { Component } from 'react'
import Org from './Org';

import { observer } from 'mobx-react';
import { Paper, Typography } from '@material-ui/core';

import "./Orgs.css"


const Orgs = observer(class Orgs extends Component {
  render() {
    return (
      <Paper className="orgs-container">
        <Typography component="h2" variant="h5">Orgs</Typography>
        {this.props.orgs.map((org, index) => {
          return <Org
            key={index}
            org={org}
          />

        })}
      </Paper>
    )
  }
})


export default Orgs
