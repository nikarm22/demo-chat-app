import { FormControl, Input, InputAdornment } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import React, { useCallback, useState } from 'react';
import { useStyles } from './MessageInput.styles';

interface IMessageInputProps {
    onSend?: (message: string) => void;
}

const MessageInput: React.FC<IMessageInputProps> = props => {
    const { onSend } = props;
    const [currentMessage, setCurrentMessage] = useState('');
    const classes = useStyles();

    const handleChange = useCallback((event) => {
        setCurrentMessage(event.target.value);
    }, []);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        if(currentMessage.trim().length) {
            onSend?.(currentMessage.trim());
            setCurrentMessage('');
        }
    }, [currentMessage, onSend]);

    return (
        <FormControl component="form" className={classes.root} variant="filled" onSubmit={handleSubmit}>
            <Input
                name="message"
                className={classes.input}
                autoFocus
                value={currentMessage}
                onChange={handleChange}
                data-testid="message-input"
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            data-testid="send-message"
                            type="submit"
                        >
                            <SendIcon />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    );
};

export { MessageInput };
