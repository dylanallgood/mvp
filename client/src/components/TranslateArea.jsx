import React, { useState, useEffect } from 'react';
import TextArea from './TextArea';
import TextTranslated from './TextTranslated';
import TranslateColumn from './TranslateColumn';
import { key } from '../key';

const TranslateArea = ({ addTo, clickedSave, playVal }) => {
  const [value, setValue] = useState('');
  const [translatedValue, setTranslatedValue] = useState('');
  const [fromLang, setFromLang] = useState('');
  const [toLang, setToLang] = useState('');

  let url = `https://translation.googleapis.com/language/translate/v2?key=${key}`;
  url += '&q=' + encodeURI(value);
  url += `&source=${fromLang}`;
  url += `&target=${toLang}`;

  useEffect(() => {
    if (!fromLang || !toLang) {
      // do nothing
    } else {
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then((res) => res.json())
        .then((response) => {
          response.data.translations.map((value) => {
            setTranslatedValue(value.translatedText);
          });
        })
        .catch((error) => {
          console.log(
            'There was an error with the translation request: ',
            error
          );
        });
    }
  }, [value, toLang, fromLang]);

  const getValue = (e) => {
    setValue(e);
  };

  const langTo = (lang) => {
    setToLang(lang);
  };

  const langFrom = (lang) => {
    setFromLang(lang);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2%',
      }}>
      <div style={{ display: 'flex' }}>
        <TranslateColumn
          TextArea={<TextArea getValue={getValue} playVal={playVal} />}
          getLang={langFrom}
          value={value}
          addTo={addTo}
          clickedSave={clickedSave}
          translatedValue={false}
        />
        <TranslateColumn
          TextArea={<TextTranslated translatedValue={translatedValue} />}
          getLang={langTo}
          value={value}
          addTo={addTo}
          clickedSave={clickedSave}
          translatedValue={translatedValue}
        />
      </div>
    </div>
  );
};

export default TranslateArea;
