import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { observer } from 'mobx-react';
import { getUserData } from "../github-api"
import Button from '@material-ui/core/Button';
import { FormControl, InputLabel, Input } from '@material-ui/core';


const SearchForm = observer(class SearchForm extends Component {

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
      <div className="search-form">
        <form onSubmit={this.handleFormSubmit} id="search-form">
          <FormControl className="input" required fullWidth>
            <InputLabel htmlFor="name">Username</InputLabel>
            <Input id="name" type="text" value={this.state.username} onChange={this.handleInputChange} />
          </FormControl>
        </form>
        <div>
          <Button
            className="submit-button"
            type="submit"
            form="search-form"
            variant="contained"
            color="secondary"> Show user info
          </Button>
        </div>
      </div>
    )
  }
})

export default withRouter(SearchForm);
