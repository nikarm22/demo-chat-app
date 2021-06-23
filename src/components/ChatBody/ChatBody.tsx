import { makeStyles, Theme, Divider, Typography } from '@material-ui/core';
import React from 'react';
import { useMessages } from '../../contexts/Messages';
import { Message } from './components/Message/Message';
import { MessageInput } from './components/MessageInput/MessageInput';

interface IChatBody {

}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    messages: {
        padding: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1,
        overflowY: 'auto',
    },
    inputBox: {
        height: '32px',
        padding: theme.spacing(1),
    },
}));

const ChatBody: React.FC<IChatBody> = props => {
    const classes = useStyles();
    const { currentMessages, sendMessageToCurrentFriend } = useMessages();

    return <div className={classes.root}>
        <div className={classes.messages}>
            {currentMessages.map(message => (
                <Message
                    side={message.from === 0 ? 'right' : 'left'}
                    timestamp={message.timestamp.toString()}
                    key={message.timestamp.toISOString()}
                >
                    {message.message}
                </Message>
            ))}
            {
                (
                    <>
                        <Divider />
                        <Typography
                            align="center"
                            color="textSecondary"
                        >
                            { currentMessages.length ? 'No more messages' : 'No messages here' }
                        </Typography>
                    </>
                )
            }
        </div>
        <div className={classes.inputBox}>
            <MessageInput onSend={sendMessageToCurrentFriend} />
        </div>
    </div>;
};

export { ChatBody };
