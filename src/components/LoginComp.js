import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import LoginModal from '../utils/LoginModal';

const useStyles = makeStyles((theme) => ({
  Btn: {
    display: 'flex',
    flexDirection: 'row-reverse'
  },
}));

function LoginComp() {
  const classes = useStyles();
  return (
    <div className={classes.Btn}>
      <Button
        startIcon={<CalendarViewDayIcon />}
        color="secondary"
        variant="contained">
        <LoginModal/>
        </Button>
    </div>
  )
}

export default LoginComp
