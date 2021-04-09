import React from 'react'
import { Button, makeStyles } from '@material-ui/core';
import GmailIcon from '../static/images/google.svg'


const useStyles = makeStyles((theme) => ({
  icon: {
    height: 30,
    width: 30,
    margin: 10
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-around'
  },
}));

function BottomLinks({
  signInGoogle }) {

  const classes = useStyles();
  return (
    <div className={classes.icons}>
      <Button type="button" onClick={signInGoogle}>
        <img src={GmailIcon} alt="Sample Google" className={classes.icon} />
      </Button>
    </div>
  )
}

export default BottomLinks
