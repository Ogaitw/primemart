// App.tsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import AppMenu from './components/AppMenu';


function App() {
  const [menuItems] = useState([
    { name: 'Inicio', path: '/' }, // Defina os caminhos para cada item do menu
    { name: 'Produtos', path: '/produtos' }, // Por exemplo, '/ofertas' para a página de ofertas
    { name: 'Employees', path: '/employees' }, // '/employees' para funcionários
  ]);

  const location = useLocation();
  const activeItem = menuItems.find((item) => item.path === location.pathname)?.name || 'Inicio';

  return (
    
    <div className='app'>
      <AppMenu activeItem={activeItem} menuItems={menuItems} />
      <AppRoutes />
    </div>
    
  );
}

export default App;
