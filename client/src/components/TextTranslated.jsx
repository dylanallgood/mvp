import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

const TextTranslated = ({ translatedValue }) => {
  const classes = useStyles();

  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(translatedValue);
  }, [translatedValue]);

  return (
    <div className={classes.root}>
      <TextField
        id='outlined-full-width'
        style={{ margin: 8, width: 1008 }}
        placeholder='Translation...'
        margin='normal'
        multiline={true}
        rows={9}
        InputLabelProps={{
          shrink: true,
        }}
        variant='outlined'
        value={value}
      />
      <div
        style={
          value.length < 10 ? { marginLeft: '92.5%' } : { marginLeft: '92%' }
        }>
        {value.length} / 200
      </div>
    </div>
  );
};

export default TextTranslated;
