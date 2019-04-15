import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { observer } from 'mobx-react';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';

import "./Search.css"
import SearchForm from './SearchForm';


const Search = observer(class Search extends Component {



  render() {
    return (
      <div className="home-container">
        <Paper className="login-container">
          <Typography component="h1" variant="h5" className="title">
            GitHub Users Info
        </Typography>
          <Typography
            variant="body1"
            align="center">
            Enter a Github username to view his repos and organizations
          </Typography>
          <SearchForm store={this.props.store} />
        </Paper>
      </div>
    )
  }
})

export default withRouter(Search);

