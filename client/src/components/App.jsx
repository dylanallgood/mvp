import React, { useState, useEffect } from 'react';
import TranslateArea from './TranslateArea';
import Header from './Header';
import Options from './Options';
import Modal from './Modal';
import axios from 'axios';
import '../styles/main.scss';

const App = () => {
  const [toggle, setToggled] = useState(false);
  const [saved, setSaved] = useState(false);
  const [value, setValue] = useState('');
  const [savedNumber, setSavedNumber] = useState(0);
  const [savedList, setSavedList] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [saveIcon, setSaveIcon] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/data`)
      .then((res) => {
        if (res.data.length === 0) {
          setSavedList([]);
          setSavedNumber(0);
        } else {
          let results = [];
          res.data.map((item) => {
            results.push(item);
            setSavedList(results);
            setSavedNumber(results.length);
          });
        }
      })
      .catch((err) => console.log(err));
  }, [deleted, saveIcon]);

  const handleToggle = () => {
    setToggled(!toggle);
  };

  const showSaved = () => {
    setSaved(!saved);
  };

  const updateValue = (e) => {
    setValue(e);
  };

  const deletedText = () => {
    setDeleted(!deleted);
  };

  const clickedSave = () => {
    setSaveIcon(!saveIcon);
  };

  const playBtn = (text) => {
    setValue(text);
  };

  return (
    <div className={!toggle ? 'dark-mode' : 'light-mode'}>
      <Header handleToggle={handleToggle} />
      <TranslateArea
        savedVal={updateValue}
        clickedSave={clickedSave}
        playVal={value}
      />
      <div
        className='options'
        style={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
        }}>
        {!saved && savedList.length > 0 ? (
          <Modal
            name={'Saved'}
            list={savedList}
            deleted={deletedText}
            saved={saved}
            playBtn={playBtn}
          />
        ) : (
          ''
        )}
        <Options showSaved={showSaved} savedNumber={savedNumber} />
      </div>
    </div>
  );
};

export default App;
