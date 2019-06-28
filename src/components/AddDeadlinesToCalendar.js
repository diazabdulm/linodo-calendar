import React from 'react';
import Fab from '@material-ui/core/Fab';
import EventIcon from '@material-ui/icons/Event';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));
export default function AddDeadlinesToCalendar() {
  const classes = useStyles();
  return (
    <Fab aria-label='Add Deadlines to Calendar' className={classes.fab} color='primary'>
      <EventIcon />
    </Fab>
  );
}