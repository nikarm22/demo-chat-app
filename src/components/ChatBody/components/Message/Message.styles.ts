import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
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
