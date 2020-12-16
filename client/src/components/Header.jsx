import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import TranslateIcon from '@material-ui/icons/Translate';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({ handleToggle }) => {
  const classes = useStyles();
  const [auth, setAuth] = useState(true);

  const handleChange = () => {
    handleToggle(auth);
    setAuth(!auth);
  };

  return (
    <div className={classes.root}>
      <AppBar className='header' position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'>
            <TranslateIcon className='header-logo' />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Translator
          </Typography>
        </Toolbar>
      </AppBar>
      <FormGroup style={{ float: 'right' }}>
        <FormControlLabel
          control={
            <Switch
              style={
                !auth
                  ? { color: 'rgba(1, 33, 116, 0.54)' }
                  : { color: 'rgba(27, 189, 127, 0.54)' }
              }
              checked={auth}
              onChange={handleChange}
              aria-label='login switch'
            />
          }
          label={'Theme'}
        />
      </FormGroup>
    </div>
  );
};

export default Header;
