import React from 'react';
import { Box } from '../Box/Box';
import LoginInput from '../LoginInput/LoginInput';
import { Text } from '../Text/Text';

const EnterTriaPassword = ({ logo = null, triaName = '' }) => {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          display: 'flex',
          flex: 0.5,
          flexDirection: 'column',
        }}
      >
        {logo}
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 24,
          }}
        >
          {' '}
          Connect with Opensea{' '}
        </Text>
      </div>

      <Box
        cursor="pointer"
        style={{
          borderImage: 'linear-gradient(#9F8BFF4D, #7053FF4D) 30',
          borderRadius: '16!important',
          borderStyle: 'solid',
          borderWidth: '1.5px',
          padding: 16,
        }}
      >
        <Text> Continue with Tria </Text>
        <LoginInput isCTAButton={false} value={triaName} />
        <LoginInput ctaTitle="Log in" placeholder="Password" />
      </Box>
    </div>
  );
};

export default EnterTriaPassword;
