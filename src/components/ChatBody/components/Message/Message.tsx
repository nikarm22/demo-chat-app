import Chip from '@material-ui/core/Chip';
import clsx from 'clsx';
import React from 'react';

import { useStyles } from './Message.styles';
interface IMessageProps {
    side: 'left' | 'right';
    timestamp: string;
    children: string;
};

const Message: React.FC<IMessageProps> = (props) => {
    const { side, children } = props;
    const classes = useStyles();

    return <Chip
        data-testid="message"
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
export type { IMessageProps };
