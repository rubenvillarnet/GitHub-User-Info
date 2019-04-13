import React, { Component } from 'react'
import { observer } from 'mobx-react';

import { getRepos, getOrgs, getUserData, getOrgData } from "../github-api"

import Repos from './Repos';
import Orgs from './Orgs';

const Info = observer(class UserInfo extends Component {

  constructor(props) {
    super(props);
    this.getData()

  }

  getData() {
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

        <Repos repos={this.props.store.repos} />

        <Orgs orgs={this.props.store.orgs} />
      </div>

    )
  }
})

export default Info
