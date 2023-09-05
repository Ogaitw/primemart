import React, { useState } from 'react';
import { Container, Menu, Segment } from 'semantic-ui-react';
import DatePicker from './components/InputDatepicker';
import LoginButton from './components/loginButton';
import './App.css';

function App() {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (name: string) => {
    setActiveItem(name);
  };

  const handleClick = () => {
    alert('Botão clicado!');
  };

  const menuItems = [
    { name: 'Inicio', active: activeItem === 'Inicio', onClick: () => handleItemClick('Inicio') },
    { name: 'Ofertas', active: activeItem === 'Descontos', onClick: () => handleItemClick('Descontos') },
    { name: 'Eletrônicos', active: activeItem === 'Eletrônicos', onClick: () => handleItemClick('Eletrônicos') },
    { name: 'Mercado', active: activeItem === 'Mercado', onClick: () => handleItemClick('Teste2') },
  ];

  return (
    <div>
      <Menu inverted>
        
        <div className="menu-items">
          <Menu.Item header className="company-name">
            PrimeMart
         </Menu.Item>
          {menuItems.map((item) => (
            <div key={item.name} className={`menu-item ${item.active ? 'active' : ''}`} onClick={item.onClick}>
              {item.name}
            </div>
          ))}
        </div>
        <Menu.Menu position="right">
          <Menu.Item>
            <LoginButton />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Segment className="content">
        <div className="header-container">
          <div className="company-name">Nome do Seu App</div>
        </div>
        <DatePicker
          name="dataNascimento"
          label="Data de Nascimento"
          onDateChange={(date) => console.log('Data selecionada:', date)}
        />
      </Segment>
    </div>
  );
}

export default App;
