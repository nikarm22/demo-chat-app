import { FormControl, Input, InputAdornment, TextField } from '@material-ui/core';
import { IconButton, makeStyles, Paper } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import React from 'react';

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
    const classes = useStyles();

    return (
        <FormControl component="form" className={classes.root} variant="filled">
            <Input
                className={classes.input}
                autoFocus
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
