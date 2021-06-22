import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FriendsList } from '../FriendsList';
import { IFriend } from '../FriendsList/types';
import { makeStyles } from '@material-ui/core';
import { ChatBody } from '../ChatBody';

const mockFriends = Array(100).fill(null).map((_, i) => ({ id: i, name: Math.random() > .5 ? `Valod N${i}` : `Gugo N${i}`, avatar: Math.random() > .5 ? 'https://via.placeholder.com/150x150' : null } as IFriend))

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
        <FriendsList friends={mockFriends} activeId={4} />
      </Grid>
      <Grid item xs={9} className={items}>
        <ChatBody />
      </Grid>
    </Grid>
  );
}

export default App;
