import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, FormControl, FormControlLabel, Radio, RadioGroup, Slider } from '@material-ui/core';

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

export default function AnonymousCard({ pollData2 }) {
  const classes = useStyles();
  const [value, setValue] = React.useState('1');
  const [flag, setFlag] = useState(false)

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  function valuetext(value) {
    return `${value}%`;
  }

  return (
    pollData2.map((data) => data.isAnonymous && (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Anonymous Poll
          </Typography>
          <Typography variant="h5" component="h2">
            {data.question}
          </Typography>

          <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
              <FormControlLabel color="#000" value="1" control={<Radio />} label={data.option1} />
              <FormControlLabel color="#000" value="2" control={<Radio />} label={data.option2} />
              <FormControlLabel color="#000" value="3" control={<Radio />} label={data.option3} />
              <FormControlLabel color="#000" value="4" control={<Radio />} label={data.option4} />
            </RadioGroup>
          </FormControl>

        </CardContent>

        <Button
          // startIcon={<CalendarViewDayIcon />}
          color="secondary"
          variant="contained"
          docId={data.id}
          // onClick={submitPoll}
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
            />

            <Button
              // startIcon={<CalendarViewDayIcon />}
              color="secondary"
              variant="contained"
              docId={data.id}
            // onClick={submitPoll}
            >
              Submit
          </Button>

          </div>
        ) : (<></>)}

      </Card>
    )));
}
