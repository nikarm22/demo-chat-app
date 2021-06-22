import List from '@material-ui/core/List';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FriendsListItem } from './components/FriendsListItem';
import { IFriend } from './types';

interface IFriendsList {
    friends: IFriend[];
    activeId: number;
}

const useStyles = makeStyles(() => ({
    root: {
        overflowY: 'auto',
        height: '100%',
        padding: 0,
    },
}));

const FriendsList: React.FC<IFriendsList> = props => {
    const { friends, activeId } = props;
    const classes = useStyles();

    return <List className={classes.root}>
        {
            friends.map(friend => (
                <FriendsListItem data={friend} key={friend.id} isActive={activeId === friend.id}/>
            ))
        }
    </List>;
};

export { FriendsList };

