import React, { useState } from 'react';

const LoginInput = ({
  ctaClicked = f => f,
  ctaTitle = 'Log in',
  isCTAButton = true,
  isEditable = true,
  placeholder = '',
  value = '',
}) => {
  const [input, setInput] = useState(value);
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        paddingX: 12,
      }}
    >
      <input
        disabled={!isEditable}
        onChange={e => setInput(e.target.value)}
        placeholder={placeholder}
        style={{
          background: 'rgba(16, 16, 16, 0.05)',
          borderRadius: '20px',
          borderWidth: '0px',
          flex: 1,
          height: '40px',
          marginBottom: '20px',
          marginRight: '12px',
          marginTop: '20px',
          paddingLeft: '20px',
        }}
        value={input}
      />
      {isCTAButton && (
        <button
          color="white"
          onClick={() => ctaClicked(input)}
          style={{
            background: 'black',
            borderRadius: '20px',
            color: 'white',
            height: '40px',
            width: '99px',
          }}
          type="button"
        >
          {ctaTitle}
        </button>
      )}
    </div>
  );
};

export default LoginInput;
