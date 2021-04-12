/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';

export default class Header extends Component {
  state = {}

  render() {
    const { children } = this.props;
    return (
      <>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <main>{children}</main>
      </>
    );
  }
}
