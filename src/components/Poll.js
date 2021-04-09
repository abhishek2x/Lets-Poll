import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, Slider } from '@material-ui/core';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import { database } from '../firebase-config';
import firebase from 'firebase'
import { UserContext } from '../context/userContext';
import LinearProgress from '@material-ui/core/LinearProgress';

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

// LinearProgressWithLabel.propTypes = {
//   /**
//    * The value of the progress indicator for the determinate and buffer variants.
//    * Value between 0 and 100.
//    */
//   value: PropTypes.number.isRequired,
// };



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
  const [value, setValue] = useState('1');
  const [voted, setVoted] = useState(false)
  const [userActive] = useContext(UserContext)
  const [ans1, setAns1] = useState(0)
  const [ans2, setAns2] = useState(0)
  const [ans3, setAns3] = useState(0)
  const [ans4, setAns4] = useState(0)


  useEffect(() => {
    console.log("checkking if already answerd")
    data.answered_by.forEach(name => {
      if (name === userActive) {
        setVoted(false);
      }
    });

    setAns1((data.option1_count / (data.option1_count + data.option2_count + data.option3_count + data.option4_count)) * 100);
    setAns2((data.option2_count / (data.option1_count + data.option2_count + data.option3_count + data.option4_count)) * 100)
    setAns3((data.option3_count / (data.option1_count + data.option2_count + data.option3_count + data.option4_count)) * 100)
    setAns4((data.option4_count / (data.option1_count + data.option2_count + data.option3_count + data.option4_count)) * 100)
  }, [])

  const handleChange = (event) => {
    setValue(event.target.value);
    // console.log("changing value", value)
  };

  const submitPoll = () => {
    var docRef = database.collection("polls").doc(data.id)

    // console.log("In submit poll", value, " ", typeof(value))

    // Atomically increment the value of the option by 1.
    if (value === '1') {
      docRef.update({
        option1_count: data.option1_count + 1
      })
    } else if (value === '2') {
      docRef.update({
        option2_count: data.option2_count + 1
      })
    } else if (value === '3') {
      docRef.update({
        option3_count: data.option3_count + 1
      })
    } else if (value === '4') {
      docRef.update({
        option4_count: data.option4_count + 1
      })
    }

    // Atomically add a new name to the "answered_by" array field.
    docRef.update({
      answered_by: firebase.firestore.FieldValue.arrayUnion(userActive)
    })

    setAns1((data.option1_count / (data.option1_count + data.option2_count + data.option3_count + data.option4_count)) * 100);
    setAns2((data.option2_count / (data.option1_count + data.option2_count + data.option3_count + data.option4_count)) * 100)
    setAns3((data.option3_count / (data.option1_count + data.option2_count + data.option3_count + data.option4_count)) * 100)
    setAns4((data.option4_count / (data.option1_count + data.option2_count + data.option3_count + data.option4_count)) * 100)

    setVoted(true);
    alert("Hurrayy!!...you Voted")
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

      {!voted && (<Button
        startIcon={<CalendarViewDayIcon />}
        color="secondary"
        variant="contained"
        id={data.id}
        onClick={submitPoll}
        style={{ marginLeft: '38%' }}
      >
        Submit
      </Button>)}
      <br />

      { !voted ? (
        <div className={classes.result}>
          <Typography id="discrete-slider" gutterBottom>
            {data.option1}
          </Typography>
          <LinearProgressWithLabel value={ans1} />
          <br />
          <Typography id="discrete-slider" gutterBottom>
            {data.option2}
          </Typography>
          <LinearProgressWithLabel value={ans2} />
          <br />
          <Typography id="discrete-slider" gutterBottom>
            {data.option3}
          </Typography>
          <LinearProgressWithLabel value={ans3} />
          <br />
          <Typography id="discrete-slider" gutterBottom>
            {data.option4}
          </Typography>
          <LinearProgressWithLabel value={ans4} />
        </div>
      ) : (<></>)}

    </Card>

  )
}

export default Poll
