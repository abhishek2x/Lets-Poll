import React, { useContext, useState } from 'react'
import { UserContext } from '../context/userContext';
import Poll from '../components/Poll';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    display: 'flex',
  },
  mainHeading: {
    margin: 20
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}));

function Profile({ pollData }) {
  const classes = useStyles();
  const [user] = useContext(UserContext)

  return (
    <Container className={classes.box}>
      <>
        <Typography
          className={classes.mainHeading}
          variant="h5"
          color="primary"
          style={{ display: 'flex' }}
        >
          Polls create by {user}
        </Typography>
        <Grid container className={classes.mainGrid}>
          <Grid item xs={6}>
            {pollData.map((data) => (
              user == data.created_by && <Poll data={data} />
            ))}
          </Grid>
        </Grid>
      </>
    </Container>
  );
}

export default Profile
