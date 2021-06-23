import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { IFriend } from '../../../../models/friend';

interface IFriendsListItemProps {
    data: IFriend;
    isActive: boolean;
    onClick?: () => void;
}

const FriendsListItem: React.FC<IFriendsListItemProps> = props => {
    const { data, isActive, onClick } = props;

    return (
        <ListItem button selected={isActive} onClick={onClick}>
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