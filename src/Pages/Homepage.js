import { Button, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/userContext';
import "././../App.css"
import AnonymousCard from '../components/AnonymoudCard';
import LoginComp from '../components/LoginComp';
import MainCard from '../components/MainCard';
import PollForm from '../forms/PollForm';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import { auth } from '../firebase-config';

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
  },
  btns: {
    display: 'flex',
    flexDirection: 'row',
  }
}));

function Homepage({ pollData }) {
  const classes = useStyles();
  const [user, setUser] = useContext(UserContext)
  const [userId, setUserId] = useState('')

  useEffect(() => {
    if (user) {
      const { currentUser } = auth;
      console.log('Currently logged in user', currentUser.uid);
      setUserId(currentUser.uid)
      console.log(user)
    }
  }, [user])

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
            <div className={classes.btns}>

              <Button
                startIcon={<CalendarViewDayIcon />}
                color="secondary"
                variant="contained"
                href={`/profile/${userId}`}
                style={{ margin: 5 }}
              >
                Profile
              </Button>
              <Button
                startIcon={<CalendarViewDayIcon />}
                color="secondary"
                variant="contained"
                onClick={signOut}
                style={{ margin: 5 }}
              >
                Logout
              </Button>
            </div>
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
              variant="h5"
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
            <Typography
              align="center"
              color="secondary"
              variant="subtitle"
              component="h3"
            >
              Public Poll
          </Typography>
            <MainCard pollData1={pollData} />
          </Grid>
          <Grid item md={2}>
          </Grid>
          <Grid item md={5}>
            <Typography
              align="center"
              color="secondary"
              variant="subtitle"
              component="h3"
            >
              Private Poll
          </Typography>
            <AnonymousCard pollData2={pollData} />
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

export default Homepage
