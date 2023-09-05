import React from 'react';
import { Menu } from 'semantic-ui-react';

interface MenuItem {
  name: string;
  active: boolean;
  onClick: () => void;
}

interface AppMenuProps {
  activeItem: string;
  handleItemClick: (name: string) => void;
  menuItems: MenuItem[]; // Adicione uma prop para os itens do menu
}

const AppMenu: React.FC<AppMenuProps> = ({ activeItem, handleItemClick, menuItems }) => {
  return (
    <Menu pointing secondary>
      {menuItems.map((item, index) => (
        <Menu.Item
          key={index}
          name={item.name}
          active={activeItem === item.name}
          onClick={() => handleItemClick(item.name)}
        />
      ))}
    </Menu>
  );
};

export default AppMenu;
