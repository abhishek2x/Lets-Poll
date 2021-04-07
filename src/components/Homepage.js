import { Button, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/userContext';
import "./../App.css"
import AnonymousCard from './AnonymoudCard';
import LoginComp from './LoginComp';
import MainCard from './MainCard';
import PollForm from './PollForm'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import { auth, database } from '../firebase-config';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh',
  },
  head1: {
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
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
}));

function Homepage() {
  const classes = useStyles();
  const [user, setUser] = useContext(UserContext)
  const [pollData, setPollData] = useState([])

  useEffect(() => {
    database.collection('polls').orderBy('created_at', 'desc').get()
      .then((querySnapshot) => {
        setPollData(querySnapshot.docs.map((doc) => doc.data()))
      });
  }, [pollData])

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null)
        alert("User Logged Out")
      })
      .catch((error) => alert(error.message))
  }

  return (
    <Container className={classes.root}>
      <Grid container className={classes.head1}>
        <Grid item md={4} align="center">
          <Typography
            className="main-heading"
            color="primary"
            style={{ display: 'flex' }}
          >
            Let's Poll it
        </Typography>
        </Grid>
        <Grid item md={6}>
        </Grid>
        <Grid item md={2}>
          {!user ? (
            <LoginComp />
          ) : (
            <>

              <Button
                startIcon={<CalendarViewDayIcon />}
                color="secondary"
                variant="contained"
                onClick={signOut}
              >
                Logout
              </Button>
            </>
          )}
        </Grid>
      </Grid>
      <Grid container className={classes.takePoll}>
        {user ? (
          <>
            <Grid item md={4} className={classes.takePollIn}>
              <Typography
                align="center"
                color="secondary"
                variant="h4"
                component="h3"
              >
                Create a Poll
              </Typography>
              <br />
              <Typography
                align="right"
                color="secondary"
                variant="subtitle"
              >
                Logged in as {user}
              </Typography>
            </Grid>
            <Grid item md={8}>
              <PollForm />
            </Grid>
          </>
        ) : (
          <Grid item md={12} className={classes.takePollIn}>
            <Typography
              align="center"
              color="secondary"
              variant="h4"
              component="h3"
            >
              Login to Create a Poll
          </Typography>
          </Grid>
        )}
      </Grid>

      <br />

      <Container>
        <Grid container>
          <Grid item md={5}>
            <MainCard pollData1={pollData} />
          </Grid>
          <Grid item md={2}>
          </Grid>
          <Grid item md={5}>
            <AnonymousCard pollData2={pollData} />
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

export default Homepage
