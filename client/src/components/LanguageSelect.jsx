import React, { useState, useEffect } from 'react';
const { langs } = require('../utils/Languages');

const LanguageSelect = ({ getLang, getLangName }) => {
  const [langType, setLangType] = useState('');
  const [defaultTitle, setDefaultTitle] = useState('Select a langauge');

  const title = Object.keys(langs).find((key) => langs[key] === langType);

  useEffect(() => {
    getLang(langType);
    getLangName(title || defaultTitle);
  }, [langType]);

  const getValue = (e) => {
    setLangType(langs[e]);
  };

  const list = Object.keys(langs).map((item) => {
    return (
      <li className='single-lang' key={item} onClick={() => getValue(item)}>
        {item}
      </li>
    );
  });
  return (
    <div>
      <ul className='lang-list'>{list}</ul>
    </div>
  );
};

export default LanguageSelect;
