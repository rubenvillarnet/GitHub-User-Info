import React, { Component } from 'react'
import Repo from './Repo';

import { observer } from 'mobx-react';
import { Paper, Typography } from '@material-ui/core';

import "./Repos.css"

const Repos = observer(class Repos extends Component {
  render() {
    return (
      <Paper className="repos-container">
        <Typography component="h2" variant="h5">Repositories</Typography>
        <div className="repos-list">
          {
            this.props.repos.map((repo, index) => {
              return <Repo
                key={index}
                repo={repo}
              />

            })}
        </div>
      </Paper>
    )
  }
})


export default Repos
