import React, { useState, useEffect } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const HistoryList = ({ history, del, playBtn }) => {
  const list = history.map((item) => {
    console.log(item);
    return (
      <ListItem key={item._id}>
        <ListItemAvatar>
          <Avatar className='history-add'>
            <ArrowRightIcon onClick={() => playBtn(item.savedText)} />
          </Avatar>
        </ListItemAvatar>
        <div className='history-item'>{item.savedText}</div>
        <ListItemSecondaryAction>
          <IconButton
            edge='end'
            aria-label='delete'
            onClick={() => del(item._id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });

  return <div>{list}</div>;
};

export default HistoryList;
