import React, { useContext, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { Button, FormControlLabel, Switch } from '@material-ui/core';
import { database } from '../firebase-config';
import { UserContext } from '../context/userContext';
import firebase from 'firebase'
import { FirebaseUserDefaultData } from '../utils/default';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  secnd: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
}));

export default function InputAdornments() {
  const classes = useStyles();
  const [user, setUser] = useContext(UserContext)
  const [values, setValues] = useState(FirebaseUserDefaultData);
  // Date dateStart = new Date();
  // Date dateEnd = new Date();
  // System.out.println(dateEnd.getTime() - dateStart.getTime()/1000);

  const createPoll = () => {
    const currentDate = new Date()
    database.collection('polls').add({
      ...values,
      created_by: firebase.auth().currentUser.displayName,
      created_at: currentDate.getTime()
    })
      .then(() => {
        console.log(values)
        alert("Poll Created");
        console.log("Poll Created");
        setValues(FirebaseUserDefaultData)
      })
      .catch((err) => {
        alert("Something went wrong :(");
        console.log(err)
      })
  }

  return (
    <div className={classes.root}>
      <div>
        <FormControl fullWidth className={classes.margin} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Your Question</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            value={values.question}
            onChange={(e) => setValues({ ...values, question: e.target.value })}
          />
        </FormControl>

        <div className={classes.secnd}>
          <TextField
            label="Option 1"
            id="filled-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            variant="filled"
            value={values.option1}
            onChange={(e) => setValues({ ...values, option1: e.target.value })}
          />
          <TextField
            label="Option 2"
            id="filled-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            variant="filled"
            value={values.option2}
            onChange={(e) => setValues({ ...values, option2: e.target.value })}
          />
        </div>
        <div className={classes.secnd}>
          <TextField
            label="Option 3"
            id="filled-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            variant="filled"
            value={values.option3}
            onChange={(e) => setValues({ ...values, option3: e.target.value })}
          />
          <TextField
            label="Option 4"
            id="filled-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            variant="filled"
            value={values.option4}
            onChange={(e) => setValues({ ...values, option4: e.target.value })}
          />
          <FormControlLabel
            labelPlacement="start"
            label="Anonymous" control={
              <Switch
                checked={values.isAnonymous}
                onChange={(e) => setValues({ ...values, isAnonymous: !values.isAnonymous })}
                color="primary"
                name="checkedB"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            } />
        </div>
        <div className={classes.secnd}>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginLeft: '8px' }}
            onClick={createPoll}
          >
            Submit
        </Button>
        </div>
      </div>
    </div>
  );
}
