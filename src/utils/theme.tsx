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


export const employeeCard = css({
  maxWidth: '300px', // Defina a largura máxima desejada para os cards
  margin: '0 auto', // Centralize horizontalmente os cards
  padding: '20px', // Adicione espaçamento interno para o conteúdo do card
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Adicione uma sombra suave aos cards
  borderRadius: '5px', // Adicione cantos arredondados aos cards
  backgroundColor: '#007bff', // Cor de fundo dos cards
  fontSize: '16px', // Tamanho da fonte do conteúdo do card
  textAlign: 'left', // Alinhamento do texto à esquerda
  transition: 'box-shadow 0.3s ease', // Adicione uma transição suave para a sombra
});

export const cardHeader = css({
  fontSize: '20px', // Tamanho da fonte do cabeçalho do card
  fontWeight: 'bold', // Texto do cabeçalho em negrito
  marginBottom: '10px', // Espaçamento inferior para o cabeçalho
});

export const cardText = css({
  marginBottom: '10px', // Espaçamento inferior para o texto do card
});

export const cardIcon = css({
  marginRight: '8px', // Espaçamento à direita para o ícone
});

export const cardFooter = css({
  display: 'flex', // Exiba os itens do rodapé em linha
  alignItems: 'center', // Alinhe verticalmente os itens do rodapé ao centro
});

export const iconUser = css({
  marginRight: '5px', // Espaçamento à direita para o ícone de usuário
});

export const employeeType = css({
  fontWeight: 'bold', // Texto do tipo de funcionário em negrito
});

export const employeeImage = css({
  maxWidth: '100%', // Defina a largura máxima da imagem como 100%
  height: 'auto', // Altura automática para manter a proporção da imagem
  marginBottom: '10px', // Espaçamento inferior para a imagem
});


export const pageContainer = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

export const formContainer = css({
  backgroundColor: '#f0f0f0',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  width: '400px',
});

export const pageHeader = css({
  textAlign: 'center',
  marginBottom: '20px',
});




export const inputLabel = css({
  marginBottom: '5px',
});

export const input = css({
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '16px',
});

export const error = css({
  color: 'red',
  fontSize: '14px',
});

export const dateContainer = css({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '15px',
});

export const submitButton = css({
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',

  ':hover': {
    backgroundColor: '#0056b3',
  },
});
