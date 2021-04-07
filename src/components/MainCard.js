import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, FormControl, FormControlLabel, Radio, RadioGroup, Slider } from '@material-ui/core';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import { database } from '../firebase-config';
import firebase from 'firebase'
import { UserContext } from '../context/userContext';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  result: {
    margin: 15
  }
});

export default function MainCard({ pollData1 }) {

  const classes = useStyles();
  const [value, setValue] = React.useState('1');
  const [PollData, setPollData] = React.useState(pollData1);
  const [flag, setFlag] = useState(false)
  const [userActive] = useContext(UserContext)

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    database.collection('polls_done').get()
      .then((res) => {
        console.log("RESULT: ", res)
      })
  }, [])

  const submitPoll = (e) => {
    console.log(value)
    console.log("ID", e.target.id)
    // console.log(pollData1[e.target.id])
    const pollid = e.target.id

    if (pollid)
      database.collection('polls_done').add({
        poll_option: value,
        poll_id: pollid,
        polled_by: firebase.auth().currentUser.uid
      })
        .then(() => alert("Poll done"))
        .catch((err) => alert(err))
    else console.log("poll id error")
  }

  function valuetext(value) {
    return `${value}%`;
  }

  return (
    pollData1.map((data) => (!data.isAnonymous && !flag) && (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            The Poll is create by {data.created_by}
          </Typography>
          <Typography variant="h5" component="h2">
            {data.question}
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
              <FormControlLabel
                color="#000"
                value="1"
                control={<Radio />}
                label={data.option1}
              />
              <FormControlLabel
                color="#000"
                value="2"
                control={<Radio />}
                label={data.option2}
              />
              <FormControlLabel
                color="#000"
                value="3"
                control={<Radio />}
                label={data.option3}
              />
              <FormControlLabel
                color="#000"
                value="4"
                control={<Radio />}
                label={data.option4}
              />
            </RadioGroup>
          </FormControl>
        </CardContent>

        <Button
          startIcon={<CalendarViewDayIcon />}
          color="secondary"
          variant="contained"
          id={data.created_at}
          onClick={submitPoll}
          style={{ marginLeft: '38%' }}
        >
          Submit
          </Button>
        <br />

        { flag ? (
          <div className={classes.result}>
            <Typography id="discrete-slider" gutterBottom>
              {data.option1}
            </Typography>
            <Slider
              defaultValue={30}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              min={0}
              max={100}
              disabled
            // onChange={setPollData({...PollData, option1: option1+1})}
            />
            <br />
            <Typography id="discrete-slider" gutterBottom>
              {data.option2}
            </Typography>
            <Slider
              defaultValue={30}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              min={0}
              max={100}
              disabled
            // onChange={setPollData({...PollData, option2: option2+1})}
            />
            <br />
            <Typography id="discrete-slider" gutterBottom>
              {data.option3}
            </Typography>
            <Slider
              defaultValue={30}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              min={0}
              max={100}
              disabled
            // onChange={setPollData({...PollData, option3: option3+1})}
            />
            <br />
            <Typography id="discrete-slider" gutterBottom>
              {data.option4}
            </Typography>
            <Slider
              defaultValue={30}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              min={0}
              max={100}
              disabled
            // onChange={setPollData({...PollData, option4: option1+1})}
            />
          </div>
        ) : (<></>)}

      </Card>
    )));
}
