import React from 'react';
import { Text } from '../Text/Text';

const TagView = ({ backgroundColor, title, titleColor }) => {
  return (
    <div
      style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}
    >
      <Text color="modalText" size="18" style={{ width: 160 }}>
        Continue with Tria
      </Text>

      <div
        display="flex"
        style={{
          background: backgroundColor,
          borderRadius: '22px',
          width: '100px',
        }}
      >
        <Text
          size="12"
          style={{ color: titleColor, marginLeft: 12, width: '100px' }}
        >
          {' '}
          {title}{' '}
        </Text>
      </div>
    </div>
  );
};

export default TagView;
