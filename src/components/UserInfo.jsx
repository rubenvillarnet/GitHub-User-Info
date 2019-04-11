import React, { Component } from 'react'

import { getRepos, getOrgs, getUserData } from "../github-api";

import Repos from './Repos';
import Orgs from './Orgs';

export default class UserInfo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      repos: [],
      orgs: []
    }
  }

  showInfo = username => {
    this.showRepos(username)
    this.showOrgs(username)
  }

  showRepos = username => {
    getRepos(username)
      .then(repos => {
        this.setState({ repos })
      })
      .catch(error => {
        console.log(error)
      })
  }

  showOrgs = username => {
    getOrgs(username)
      .then(orgs => {
        this.setState({ orgs })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>

        <Repos repos={this.state.repos} />

        <Orgs orgs={this.state.orgs} />
      </div>

    )
  }
}

{/* Are you {this.props.match.params.username}?
   */}