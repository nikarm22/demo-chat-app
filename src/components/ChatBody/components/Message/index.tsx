import { Chip, makeStyles, Theme } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

interface IMessage {
    side: 'left' | 'right';
    timestamp: string;
    children: string;
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'block',
        marginTop: theme.spacing(1),
        maxWidth: '80%',
        alignSelf: 'flex-start',
        fontSize: '1.25rem',
        padding: theme.spacing(1),
        height: 'inherit',
        '& > span' : {
            whiteSpace: 'normal',
        },
    },
    left: {
        borderTopLeftRadius: 0,
    },
    right: {
        alignSelf: 'flex-end',
        borderBottomRightRadius: 0,
    }
}));

const Message: React.FC<IMessage> = (props) => {
    const { side, timestamp, children } = props;
    const classes = useStyles();

    return <Chip
        className={clsx(
            classes.root,
            {
                [classes.right]: side === 'right',
                [classes.left]: side === 'left',
            },
        )}
        color={side === 'right' ? 'primary' : 'default'}
        label={children}
    />;
};

export { Message };
