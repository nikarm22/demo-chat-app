import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FriendsList } from '../FriendsList/FriendsList';
import { makeStyles } from '@material-ui/core';
import { ChatBody } from '../ChatBody/ChatBody';
import { Route } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
  },
  items: {
    height: '100%',
  },
}));

function App() {
  const { root, items } = useStyles();
  return (
    <Grid container className={root}>
      <Grid item xs={3} className={items}>
        <FriendsList />
      </Grid>
      <Route path='/:id'>
        <Grid item xs={9} className={items}>
          <ChatBody />
        </Grid>
      </Route>
    </Grid>
  );
}

export default App;
