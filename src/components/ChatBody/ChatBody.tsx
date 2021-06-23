import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useMessages } from '../../contexts/Messages';
import { useStyles } from './ChatBody.styles';
import { Message } from './components/Message/Message';
import { MessageInput } from './components/MessageInput/MessageInput';

const ChatBody: React.FC = () => {
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
