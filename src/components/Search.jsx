import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { observer } from 'mobx-react';

import { getRepos, getOrgs, getUserData, getOrgData } from "../github-api"

const Search = observer(class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: ""
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();


    getUserData(this.state.username)
      .then(userInfo => {
        this.props.store.user.setUser({
          username: userInfo.login,
          name: userInfo.name,
          avatar: userInfo.avatar_url,
          url: userInfo.url,
          location: userInfo.location
        })
        this.props.history.push(`/info/${this.props.store.user.username}`);
      })



    this.setState({ username: "" })
  }

  handleInputChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>GitHub Users info</h1>
        <p>Enter a Github username in order to see his repos and organizations</p>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="name">Username</label>
          <input id="name" type="text" value={this.state.username} onChange={this.handleInputChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
})

export default withRouter(Search);

