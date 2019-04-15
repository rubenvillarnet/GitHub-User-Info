import React, { Component } from 'react'
import { Card, Typography } from '@material-ui/core';

import "./Repo.css"

export default class Repo extends Component {
  render() {
    const { name, language, url } = this.props.repo
    return (
      <Card className="repo-card">
        <div className="card-header">
          <Typography component="h5" variant="h6">
            {name}
          </Typography>
        </div>
        <div className="card-content">
          <Typography variant="body1">
            {language}
          </Typography>
          <Typography variant="body2">
            <a href={url} target="_blank" rel="noopener noreferrer" >Open in GitHub</a>
          </Typography>
        </div>
      </Card>
    )
  }
}
