import React, { Component } from 'react'
import { Card, Typography } from '@material-ui/core';

import "./Repo.css"

export default class Repo extends Component {
  render() {
    return (
      <Card className="repo-card">
        <div className="card-header">
          <Typography component="h5" variant="h6">
            {this.props.repo.name}
          </Typography>
        </div>
        <div className="car-content">
          <Typography variant="body1">
            {this.props.repo.language}
          </Typography>
          <Typography variant="body2">
            <a href={this.props.repo.url} target="_blank" rel="noopener noreferrer" >Open in GitHub</a>
          </Typography>
        </div>
      </Card>
    )
  }
}
