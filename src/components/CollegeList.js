import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingTop: '.5rem'
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

function generate(element) {
    return [0, 1, 2].map(value =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

export default function CollegeList({ colleges, deleteCollege }) {
    const classes = useStyles();
    return (
        <Container fluid="true" className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <div className={classes.demo}>
                        <List>
                            {colleges.map((college, index) => {
                                const initials = college.split(" ").map((n) => n[0]).join('');
                                return (
                                    <ListItem disableGutters divider key={index}>
                                        <ListItemAvatar>
                                            <Avatar>{initials}</Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={college}
                                            secondary='Secondary text'
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="Delete" onClick={() => deleteCollege(index)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}
