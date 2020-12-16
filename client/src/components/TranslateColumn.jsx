import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageSelect from './LanguageSelect';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import Success from './Success';
import Warning from './Warning';
import Speech from './Speech';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: '15px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const TranslateColumn = ({
  TextArea,
  getLang,
  value,
  clickedSave,
  translatedValue,
}) => {
  const classes = useStyles();
  const [langType, setLangType] = useState('Select a language');
  const [text, setText] = useState('');
  const [hasSaved, setHasSaved] = useState(false);
  let [textCount, setTextCount] = useState(0);

  useEffect(() => {
    setText(value);
    clickedSave();
  }, [hasSaved]);

  useEffect(() => {
    if (!text) {
      // do nothing
    } else {
      axios
        .post(`http://localhost:3000/data`, {
          params: {
            savedText: text,
          },
        })
        .then((res) => {
          // do nothing
        })
        .catch((err) => console.log(err));
    }
    setTextCount((textCount += 1));
  }, [text]);

  const getLangName = (type) => {
    setLangType(type);
  };

  const openSuccess = () => {
    // once i click on text to speak i cant save right away
    setTextCount(0);
    setHasSaved(!hasSaved);
  };

  return (
    <div className={classes.root}>
      <Accordion style={{ width: '97.3%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <Typography
            className={classes.heading}
            style={{
              borderBottom: '5px solid #222',
              borderBottomWidth: 'thin',
            }}>
            {langType}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <LanguageSelect getLang={getLang} getLangName={getLangName} />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div style={{ marginTop: '5px', marginLeft: '-8px' }}>{TextArea}</div>
      <div style={{ display: 'flex' }}>
        <SaveAltIcon
          style={{ fontSize: '30px' }}
          onClick={() => openSuccess()}
        />
        {translatedValue === false ? (
          ''
        ) : (
          <Speech text={translatedValue} langTitle={langType} />
        )}
      </div>
      {text && textCount > 0 ? (
        <Success hasSaved={hasSaved} />
      ) : text && textCount === 0 ? (
        <Warning hasSaved={hasSaved} />
      ) : (
        ''
      )}
    </div>
  );
};

export default TranslateColumn;
