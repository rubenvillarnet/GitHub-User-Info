import React, { Component } from 'react'

export default class Repo extends Component {
  render() {
    return (
      <div>
        {this.props.repo.name} | {this.props.repo.language} | {this.props.repo.url}
      </div>
    )
  }
}
