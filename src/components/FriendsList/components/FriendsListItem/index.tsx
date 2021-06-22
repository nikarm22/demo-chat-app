import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { IFriend } from '../../types';

interface IFriendsListItemProps {
    data: IFriend;
    isActive: boolean;
}

const FriendsListItem: React.FC<IFriendsListItemProps> = props => {
    const { data, isActive } = props;

    return (
        <ListItem button selected={isActive}>
            <ListItemAvatar>
                <Avatar
                    alt={`Photo of ${data.name}`}
                    src={data.avatar}
                >
                    {data.name.charAt(0).toUpperCase()}
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={data.name} />
        </ListItem>
    );
}

export { FriendsListItem };