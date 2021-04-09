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

function Poll({ data }) {
  const classes = useStyles();
  const [value, setValue] = React.useState('1');
  const [voted, setVoted] = useState(false)
  const [userActive] = useContext(UserContext)

  useEffect(() => {
    data.answered_by.forEach(name => {
      if (name === userActive) {
        setVoted(false);
      }
    });
  }, [])

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const submitPoll = (e) => {
    if (e.target.id)
      console.log(e.target.id, " ->", value)
    else console.log("Firebase ID not loaded")
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        {!data.isAnonymous ? (
          <Typography color="textSecondary" gutterBottom>
            The Poll is create by {data.created_by}
          </Typography>
        ) : (
          <Typography color="textSecondary" gutterBottom>
            Anonymous Poll
          </Typography>
        )}
        <Typography variant="h5" component="h2">
          {data.question}
        </Typography>
        {!voted && (<FormControl component="fieldset">
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
        </FormControl>)}
      </CardContent>

      <Button
        startIcon={<CalendarViewDayIcon />}
        color="secondary"
        variant="contained"
        id={data.id}
        onClick={submitPoll}
        style={{ marginLeft: '38%' }}
      >
        Submit
      </Button>
      <br />

      { voted ? (
        <div className={classes.result}>
          <Typography id="discrete-slider" gutterBottom>
            {data.option1}
          </Typography>
          <Slider
            defaultValue={data.option1_count}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            min={0}
            max={100}
            disabled
          />
          <br />
          <Typography id="discrete-slider" gutterBottom>
            {data.option2}
          </Typography>
          <Slider
            defaultValue={data.option2_count}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            min={0}
            max={100}
            disabled
          />
          <br />
          <Typography id="discrete-slider" gutterBottom>
            {data.option3}
          </Typography>
          <Slider
            defaultValue={data.option3_count}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            min={0}
            max={100}
            disabled
          />
          <br />
          <Typography id="discrete-slider" gutterBottom>
            {data.option4}
          </Typography>
          <Slider
            defaultValue={data.option4_count}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            min={0}
            max={100}
            disabled
          />
        </div>
      ) : (<></>)}

    </Card>

  )
}

export default Poll
