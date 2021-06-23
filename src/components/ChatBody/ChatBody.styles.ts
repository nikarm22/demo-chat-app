import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
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
