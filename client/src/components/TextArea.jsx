import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '-0.1%',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

const TextArea = ({ getValue, playVal }) => {
  const classes = useStyles();
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(playVal);
  }, [playVal]);

  useEffect(() => {
    getValue(value);
  }, [value]);

  const handleChange = (e) => {
    setValue(e);
  };

  return (
    <div className={classes.root}>
      <TextField
        value={value}
        id='outlined-full-width'
        style={{ margin: 8, width: 1006 }}
        placeholder=''
        margin='normal'
        multiline={true}
        rows={9}
        InputLabelProps={{
          shrink: true,
        }}
        variant='outlined'
        onChange={(e) => handleChange(e.target.value)}
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

export default TextArea;
