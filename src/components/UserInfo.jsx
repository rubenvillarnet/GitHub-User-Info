import React, { Component } from 'react'
import { observer } from 'mobx-react';
import { Avatar, Card, Typography, CircularProgress } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import "./UserInfo.css"

const UserInfo = observer(class UserInfo extends Component {

  render() {
    const { user, reposCount, orgsCount, loaded } = this.props.store
    return (
      <Card className="user-info">
        {loaded.userData ?
          <div className="user-info-container">
            <Avatar alt={user.name} src={user.avatar} className="gh-avatar" />
            <div className="data">
              <Typography component="h2" variant="h5">
                {user.name}
              </Typography>
              <Typography variant="body2">
                <a href={user.url} target="_blank" rel="noopener noreferrer" >{user.username}</a>
              </Typography>
              <Typography>
                Total of repositories: {reposCount}
              </Typography>
              <Typography>

                Member of {orgsCount} {orgsCount === 1 ? "organization" : "organizations"}.
          </Typography>
              <Typography>
                <FontAwesomeIcon
                  icon="map-marker-alt"
                /> {user.location}
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
