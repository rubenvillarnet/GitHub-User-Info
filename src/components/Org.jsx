import React, { Component } from 'react'
import { Typography } from '@material-ui/core';
import "./Org.css"

export default class Org extends Component {
  render() {
    return (
      <div className="organization">
        <Typography component="h5" variant="h6">
          {this.props.org.name}
        </Typography>
        <Typography>
          {this.props.org.repos} {this.props.org.repos === 1 ? "repository" : "repositories"}
        </Typography>
        <Typography>
          <a href={this.props.org.url} target="_blank" rel="noopener noreferrer" >Open in GitHub</a>
        </Typography>
      </div>
    )
  }
}
