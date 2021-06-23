import { FormControl, Input, InputAdornment } from '@material-ui/core';
import { IconButton, makeStyles } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import React, { useCallback, useState } from 'react';

interface IMessageInputProps {
    onSend?: (message: string) => void;
}

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
    },
    input: {
        flex: 1,
    },
}));

const MessageInput: React.FC<IMessageInputProps> = props => {
    const { onSend } = props;
    const [currentMessage, setCurrentMessage] = useState('');
    const classes = useStyles();

    const handleChange = useCallback((event) => {
        setCurrentMessage(event.target.value);
    }, []);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        onSend?.(currentMessage);
        setCurrentMessage('');
    }, [currentMessage, onSend]);

    return (
        <FormControl component="form" className={classes.root} variant="filled" onSubmit={handleSubmit}>
            <Input
                name="message"
                className={classes.input}
                autoFocus
                value={currentMessage}
                onChange={handleChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
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
