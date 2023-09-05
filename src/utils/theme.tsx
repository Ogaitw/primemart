// AppStyles.tsx

import { css } from 'glamor';

export const customMenu = css({
  backgroundColor: '#333',
  color: '#fff',
  fontSize: '16px',
});

export const customMenuItem = css({
  padding: '10px 15px',
});

export const activeMenuItem = css({
  backgroundColor: '#555',
  borderBottom: '2px solid #f00',
});

export const inputContainer = css({
  display: 'flex',
  flexDirection: 'column',
});

export const inputIcon = css({
  marginRight: '8px',
});

export const loginButtonStyle = css({
  fontSize: '16px',
  padding: '10px 20px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
});

export const loginStyle = css({
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
});

export const loginHoverStyle = css({
  ':hover': {
    backgroundColor: '#0056b3',
  },
});

export const signUpStyle = css({
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
});

export const signUpHoverStyle = css({
  ':hover': {
    backgroundColor: '#1e7e34',
  },
});

export const removeFocusOutline = css({
  outline: 'none !important',
});