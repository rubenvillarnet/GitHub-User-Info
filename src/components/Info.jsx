import React, { Component } from 'react'
import { observer } from 'mobx-react';

import { getRepos, getOrgs, getUserData, getOrgData } from "../github-api"

import Repos from './Repos';
import Orgs from './Orgs';
import UserInfo from './UserInfo';

const Info = observer(class Info extends Component {

  constructor(props) {
    super(props);
    this.getData()

  }

  getData() {

    getUserData(this.props.match.params.username)
      .then(data => {
        this.props.store.user.setUser({
          username: data.login,
          name: data.name,
          avatar: data.avatar_url,
          url: data.html_url,
          location: data.location
        })
        console.log(this.props.store.user.name)
      })
      .catch(error => console.log(error))

    getRepos(this.props.match.params.username)
      .then(repos => {
        repos.forEach(repo => {
          this.props.store.addRepo({
            name: repo.name,
            url: repo.html_url,
            language: repo.language === null ? "undefined" : repo.language
          })
        });
      })
      .catch(error => console.log(error))

    getOrgs(this.props.match.params.username)
      .then(orgs => {
        orgs.forEach(org => {

          getOrgData(org.login)
            .then(orgData => {
              this.props.store.addOrg({
                name: org.login,
                url: orgData.html_url,
                repos: orgData.public_repos
              })
            })

        });
      })
      .catch(error => console.log(error))
  }


  render() {
    return (
      <div>

        <UserInfo info={this.props.store.user} />
        <Repos repos={this.props.store.repos} />
        <Orgs orgs={this.props.store.orgs} />
      </div>

    )
  }
})

export default Info
