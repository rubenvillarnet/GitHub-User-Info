import React, { Component } from 'react'

export default class Org extends Component {
  render() {
    return (
      <div>
        {this.props.org.name} | {this.props.org.url} | {this.props.org.repos}
      </div>
    )
  }
}
