import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import HistoryList from './HistoryList';
import Deleted from './Deleted';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const Modal = ({ name, list, deleted, saved, playBtn }) => {
  const classes = useStyles();
  const [dense, setDense] = useState(false);
  let [delClicked, setDelClicked] = useState(0);

  // axios delete and update histroy here instead of historlist

  const del = (item) => {
    console.log(item);
    axios
      .delete(`http://localhost:3000/data`, {
        params: {
          _id: item,
        },
      })
      .then((res) => {
        deleted();
        setDelClicked((delClicked += 1));
      })
      .catch((err) => console.log(err));
  };

  const clickDel = () => {
    setDelClicked(0);
  };

  return (
    <Grid
      container
      spacing={2}
      style={{
        marginLeft: '35%',
        width: '60%',
        position: 'absolute',
        bottom: '90px',
      }}>
      <Grid item xs={12} md={6}>
        <Typography variant='h6' className={classes.title}>
          {name}
        </Typography>
        <div className='scroll-body'>
          <List dense={dense} className={!saved ? 'history-popup' : ''}>
            <HistoryList history={list} del={del} playBtn={playBtn} />
          </List>
        </div>
        {delClicked > 0 ? <Deleted clickDel={clickDel} /> : ''}
      </Grid>
    </Grid>
  );
};

export default Modal;
