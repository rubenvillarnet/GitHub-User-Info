import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { observer } from 'mobx-react';
import { getUserData } from "../github-api"
import Button from '@material-ui/core/Button';

import { FormControl, InputLabel, Input, Popover, Typography } from '@material-ui/core';

import "./SearchForm.css"

const SearchForm = observer(class SearchForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      popover: false,
      anchorEl: null
    }
  }

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
      popover: false
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    getUserData(this.state.username)
      .then(userInfo => {
        if (userInfo === undefined) {
          this.setState({
            popover: true
          })
        } else {
          this.props.history.push(`/info/${userInfo.login}`);

        }
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
            color="secondary"
            onClick={this.handleClick}> Show user info
          </Button>
          <Popover
            className="popover"
            open={this.state.popover}
            anchorEl={this.state.anchorEl}
            onClose={this.handleClose}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'left',
            }}>
            <Typography className="label">Incorrect username!</Typography>
          </Popover>
        </div>
      </div>
    )
  }
})

export default withRouter(SearchForm);
