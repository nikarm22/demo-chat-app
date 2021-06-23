import List from '@material-ui/core/List';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FriendsListItem } from './components/FriendsListItem/FriendsListItem';
import { useEffect } from 'react';
import { getAllFriends } from '../../services/friends';
import { IFriend } from '../../models/friend';
import { useHistory, useParams } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root: {
        overflowY: 'auto',
        height: '100%',
        padding: 0,
    },
}));

const FriendsList: React.FC = props => {
    const [friends, setFriends] = useState<IFriend[]>([]);
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const classes = useStyles();

    const friendId = Number(id);

    useEffect(() => {
        getAllFriends()
            .then(data => {
                setFriends(data);
            });
    }, []);

    return <List className={classes.root}>
        {
            friends.map(friend => (
                <FriendsListItem
                    data={friend}
                    key={friend.id}
                    isActive={friendId === friend.id}
                    onClick={() => history.push(`/${friend.id}`)}
                />
            ))
        }
    </List>;
};

export { FriendsList };

