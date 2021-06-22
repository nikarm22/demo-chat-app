import List from '@material-ui/core/List';
import React from 'react';
import { FriendsListItem } from './components/FriendsListItem';
import { IFriend } from './types';

interface IFriendsList {
    friends: IFriend[];
    activeId: number;
}

const FriendsList: React.FC<IFriendsList> = props => {
    const { friends, activeId } = props;

    return <List>
        {
            friends.map(friend => (
                <FriendsListItem data={friend} key={friend.id} isActive={activeId === friend.id}/>
            ))
        }
    </List>;
};

export { FriendsList };

