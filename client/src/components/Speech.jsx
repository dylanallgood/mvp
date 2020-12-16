import React, { useState, useEffect } from 'react';
import { textToSpeechKey } from '../key';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import { speechLangs } from '../utils/Languages';
import { Howl } from 'howler';

const Speech = ({ text, langTitle }) => {
  const [lang, setLang] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    if (text === undefined) {
      console.log(text);
    } else {
      console.log(lang, name, text);
      set();
    }
  }, [text]);

  const set = () => {
    let language =
      langTitle !== 'Select a language' && langTitle !== 'Russian'
        ? speechLangs[langTitle].type
        : '';
    let named =
      langTitle !== 'Select a language' && langTitle !== 'Russian'
        ? speechLangs[langTitle].name
        : '';
    setLang(language);
    setName(named);
  };

  const soundPlay = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };

  const speak = () => {
    if (!text) {
      // do nothing
    } else {
      fetch(
        `https://tts.readspeaker.com/a/speak?key=${textToSpeechKey}&lang=${lang}&voice=${name}&text=${text}`
      )
        .then((res) => {
          let mp3 = res.url;

          let clip = [{ sound: mp3, label: 'speak' }];

          clip.map((soundObj) => {
            soundPlay(soundObj.sound);
          });
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div
      onClick={() => (lang === undefined || name === undefined ? '' : speak())}>
      <RecordVoiceOverIcon
        className='speech'
        style={{ fontSize: '30px', color: 'rgba(7, 106, 123, 0.54)' }}
      />
    </div>
  );
};

export default Speech;
