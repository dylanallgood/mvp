import React, { useState, useEffect } from 'react';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import Badge from '@material-ui/core/Badge';

const Options = ({ showSaved, savedNumber }) => {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    showSaved(saved);
  }, [saved]);

  return (
    <div>
      <div
        style={{
          float: 'right',
          marginTop: '10%',
        }}>
        <div>
          <Badge
            color='secondary'
            overlap='circle'
            badgeContent={savedNumber}
            style={{ marginLeft: '-70%' }}>
            <SaveAltIcon
              className='saved-icon'
              onClick={() => setSaved(!saved)}
              style={{
                fontSize: '30px',
                background: 'rgba(235, 235, 235, 0.975)',
                padding: '20px',
                textAlign: 'center',
                verticalAlign: 'middle',
                borderRadius: '50%',
              }}
            />
          </Badge>
          <div
            style={{
              marginTop: '10px',
              marginLeft: '-57%',
              fontSize: '20px',
            }}>
            Saved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
