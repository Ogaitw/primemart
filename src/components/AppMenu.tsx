// AppMenu.tsx
import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

interface MenuItem {
  name: string;
  path: string; // Adicionamos uma propriedade 'path' para cada item do menu
}

interface AppMenuProps {
  activeItem: string;
  menuItems: MenuItem[];
}

const AppMenu: React.FC<AppMenuProps> = ({ activeItem, menuItems }) => {
  return (
    <Menu inverted>
      <Menu.Item header className="company-name">
        PrimeMart
      </Menu.Item>
      {menuItems.map((item) => (
        <Menu.Item
          key={item.name}
          name={item.name}
          active={activeItem === item.name}
          as={Link} // Usamos o componente 'Link' do react-router-dom para criar links
          to={item.path} // Usamos a propriedade 'path' como destino do link
        />
      ))}
    </Menu>
  );
};

export default AppMenu;
