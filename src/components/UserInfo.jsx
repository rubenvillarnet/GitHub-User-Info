import React, { Component } from 'react'
import { observer } from 'mobx-react';


const UserInfo = observer(class UserInfo extends Component {

  render() {
    return (
      <div>
        username: {this.props.info.username}
        name: {this.props.info.name}
        avatar: {this.props.info.avatar}
        url: {this.props.info.url}
        location: {this.props.info.location}
      </div>
    )
  }
})

export default UserInfo
