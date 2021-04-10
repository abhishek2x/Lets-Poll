import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import { database } from '../firebase-config';
import firebase from 'firebase'
import { UserContext } from '../context/userContext';
import LinearProgress from '@material-ui/core/LinearProgress';
import ResultModal from '../utils/ResultModal'

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.floor(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}


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
  }, btns: {
    display: 'flex',
    justifyContent: 'center',
    margin: 5
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
  const [time, setTime] = useState(0)

  useEffect(() => {
    const everySec = setInterval(() => {
      const currentDate = new Date()
      const currTime = currentDate.getTime()
      // console.log((currTime - data.created_at) / 1000)
      setTime((currTime - data.created_at) / 1000) //setting time in secs
      if ((currTime - data.created_at > 300000) && !data.is_expired) {
        database.collection("polls").doc(data.id).update({
          is_expired: true
        })
      }
    }, 1000)
    return () => clearInterval(everySec);
  }, [data.created_at, data.id, data.is_expired]);

  useEffect(() => {
    console.log("checkking if already answerd")

    data.answered_by.forEach(name => {
      if (name === userActive) {
        setVoted(true);
      }
    });

    setAns1((data.option1_count / (data.option1_count + data.option2_count + data.option3_count + data.option4_count)) * 100);
    setAns2((data.option2_count / (data.option1_count + data.option2_count + data.option3_count + data.option4_count)) * 100)
    setAns3((data.option3_count / (data.option1_count + data.option2_count + data.option3_count + data.option4_count)) * 100)
    setAns4((data.option4_count / (data.option1_count + data.option2_count + data.option3_count + data.option4_count)) * 100)

    if (ans1.isNaN && ans2.isNaN && ans3.isNaN && ans4.isNaN) {
      setAns1(0);
      setAns2(0);
      setAns3(0);
      setAns4(0);
    }
  }, [ans1, ans2, ans3, ans4, data.option1_count, data.option2_count, data.option3_count, data.option4_count, data.answered_by, userActive])

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const deleteIt = () => {
    var docRef = database.collection("polls").doc(data.id)
    docRef.delete()
      .then(() => {
        alert("Poll Deleted")
      })
      .catch(err => {
        alert(err)
      })
  }

  const submitPoll = (e) => {
    e.preventDefault();
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
        <Typography color="textSecondary" gutterBottom>
          The Poll is create by {data.created_by}
        </Typography>

        {data.is_expired && (<Typography color="textSecondary" variant="p" gutterBottom>
          <b>Expired</b> <br />  Created {Math.floor(time / 60)} mins and {Math.floor(time % 60)} secs ago
        </Typography>)}

        {!data.is_expired && (<Typography color="textSecondary" variant="p" gutterBottom>
          <b>Not Expired</b> <br />  Created {Math.floor(time / 60)} mins and {Math.floor(time % 60)} secs ago
        </Typography>)}

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
      <div class={classes.btns}>
        {!voted && !data.is_expired && (<Button
          startIcon={<CalendarViewDayIcon />}
          color="secondary"
          variant="contained"
          onClick={submitPoll}
        >
          Submit
        </Button>)}
        {data.created_by === userActive && (<Button
          style={{ fackgFloorColor: '#be93c5' }}
          variant="contained"
          onClick={deleteIt}
        >
          Delete Poll
        </Button>)}

        {!data.isAnonymous && voted && (<ResultModal names={data.answered_by} />)}
      </div>

      <br />

      { voted ? (
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
