/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Button,
  Drawer,
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';

import { MenuIcon } from '@material-ui/icons';

function HomeScreen() {
  const [expand, setExpand] = useState(true);

  function handleEvent() {
    setExpand(false);
  }

  return (
    <Container>
      <AppBar position="fix">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Music Player
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={expand}>
        <Button onClick={handleEvent}>Hello</Button>
      </Drawer>
    </Container>
  );
}

export default HomeScreen;
