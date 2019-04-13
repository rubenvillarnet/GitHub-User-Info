import React, { Component } from 'react'
import { observer } from 'mobx-react';
import { Avatar, Card, Typography } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import "./UserInfo.css"

const UserInfo = observer(class UserInfo extends Component {

  render() {
    return (
      <Card className="user-info">
        <Avatar alt={this.props.info.name} src={this.props.info.avatar} className="gh-avatar" />
        <div className="data">
          <Typography component="h2" variant="h5">
            {this.props.info.name}
          </Typography>
          <Typography variant="body2">
            <a href={this.props.info.url} target="_blank" rel="noopener noreferrer" >{this.props.info.username}</a>
          </Typography>
          <Typography>
            Total of repositories: {this.props.totalRepos}
          </Typography>
          <Typography>

            Member of {this.props.totalOrgs} {this.props.totalOrgs === 1 ? "organization" : "organizations"}.
          </Typography>
          <Typography>
            <FontAwesomeIcon
              icon="map-marker-alt"
            /> {this.props.info.location}
          </Typography>
        </div>
      </Card>
    )
  }
})

export default UserInfo
