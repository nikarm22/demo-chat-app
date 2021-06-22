import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FriendsList } from '../FriendsList';
import { IFriend } from '../FriendsList/types';

const mockFriends = Array(10).fill(null).map((_, i) => ({ id: i, name: Math.random() > .5 ? `Valod N${i}` : `Gugo N${i}`, avatar: Math.random() > .5 ? 'https://via.placeholder.com/150x150' : null } as IFriend))

function App() {
  return (
    <Grid container>
      <Grid item xs={3}>
        <FriendsList friends={mockFriends} activeId={4} />
      </Grid>
      <Grid item xs={9}>
asdafsdf
      </Grid>
    </Grid>
  );
}

export default App;
