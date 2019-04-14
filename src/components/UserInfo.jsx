import React, { Component } from 'react'
import { observer } from 'mobx-react';
import { Avatar, Card, Typography, CircularProgress } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import "./UserInfo.css"

const UserInfo = observer(class UserInfo extends Component {

  render() {
    return (
      <Card className="user-info">
        {this.props.store.loaded.userData ?
          <div className="user-info-container">
            <Avatar alt={this.props.store.user.name} src={this.props.store.user.avatar} className="gh-avatar" />
            <div className="data">
              <Typography component="h2" variant="h5">
                {this.props.store.user.name}
              </Typography>
              <Typography variant="body2">
                <a href={this.props.store.user.url} target="_blank" rel="noopener noreferrer" >{this.props.store.user.username}</a>
              </Typography>
              <Typography>
                Total of repositories: {this.props.store.reposCount}
              </Typography>
              <Typography>

                Member of {this.props.store.orgsCount} {this.props.store.orgsCount === 1 ? "organization" : "organizations"}.
          </Typography>
              <Typography>
                <FontAwesomeIcon
                  icon="map-marker-alt"
                /> {this.props.store.user.location}
              </Typography>
            </div>
          </div> :
          <CircularProgress color="secondary" />
        }

      </Card>
    )
  }
})

export default UserInfo
