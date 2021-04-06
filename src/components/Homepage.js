import { Container, Divider, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import "./../App.css"
import AnonymousCard from './AnonymoudCard';
import LoginComp from './LoginComp';
import MainCard from './MainCard';
import PollForm from './PollForm'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh',
  },
  head1: {
    // padding: 10,
    marginTop: 30,
    display: 'flex',
    alignItems: 'center',
  },
  takePoll: {
    padding: 10,
    marginTop: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  takePollIn: {
  }
}));

function Homepage({ switchComp }) {
  const classes = useStyles();
  const [user, setUser] = useState(null);

  return (
    <Container className={classes.root}>
      <Grid container className={classes.head1}>
        <Grid item md={8} align="center">
          <Typography
            className="main-heading"
            color="primary"
            style={{ display: 'flex' }}
          >
            Let's Poll it
        </Typography>
        </Grid>
        <Grid item md={4}>
          {!user ? (
            <LoginComp />
          ) : (
            <Typography>
              Welcome {user}
            </Typography>
          )}
        </Grid>
      </Grid>
      <Grid container className={classes.takePoll}>
        <Grid item md={4} className={classes.takePollIn}>
          <Typography
            align="center"
            color="secondary"
            variant="h4"
            component="h3"
          >
            Create a Poll
          </Typography>
        </Grid>
        <Grid item md={8}>
          <PollForm />
        </Grid>
      </Grid>

      <br />

      <Container>
        <Grid container>
          <Grid item md={5}>
            <MainCard />
          </Grid>
          <Grid item md={2}>
          </Grid>
          <Grid item md={5}>
            <AnonymousCard />
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

export default Homepage
