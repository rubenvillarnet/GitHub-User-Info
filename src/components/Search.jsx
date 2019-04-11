import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: ""
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.history.push(`/info/${this.state.username}`);

    this.props.showInfo(this.state.username)

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
}

export default withRouter(Search);

