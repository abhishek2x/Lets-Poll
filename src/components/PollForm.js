import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Button, FormControlLabel, Switch } from '@material-ui/core';

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
    justifyContent: 'center',
  },
}));

export default function InputAdornments() {
  const classes = useStyles();
  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const [checkedB, setCheckedB] = useState(true)

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChangeSwitch = (event) => {
    setCheckedB(!checkedB)
  };


  return (
    <div className={classes.root}>
      <div>
        <FormControl fullWidth className={classes.margin} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Your Question</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            value={values.amount}
            onChange={handleChange('amount')}
          />
        </FormControl>

        <div className={classes.secnd}>
          <TextField
            label="Option 1"
            id="filled-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            variant="filled"
          />
          <TextField
            label="Option 2"
            id="filled-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            variant="filled"
          />
          <FormControlLabel
            labelPlacement="start"
            label="Anonymous" control={
              <Switch
                checked={checkedB}
                onChange={handleChangeSwitch}
                color="primary"
                name="checkedB"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            } />
        </div>
        <div className={classes.secnd}>
          <Button variant="contained" marginTop="10" color="secondary">
            Submit
        </Button>
        </div>
      </div>
    </div>
  );
}
