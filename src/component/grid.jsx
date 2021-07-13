import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  div1: {
    textAlign: 'center',
    background: 'green',
  },
  div2: {
    textAlign: 'center',
    background: 'red',
  },
  div3: {
    textAlign: 'center',
    background: 'blue',
  },
  div4: {
    textAlign: 'center',
    background: 'yellow',
  },
  div5: {
    textAlign: 'center',
    background: 'grey',
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={4}>
          <div className={classes.div2}>xs=4</div>
        </Grid>
        <Grid item xs={8}>
          <div className={classes.div3}>xs=4</div>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.div4}>xs=4</div>
        </Grid>
      </Grid>
    </div>
  );
}
 