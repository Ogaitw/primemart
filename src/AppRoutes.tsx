// AppRoutes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Employees from './views/employees';
import Produtos from './views/produtos'; // Importe o componente de produtos
// Importe a página de adição de funcionário

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/employees" element={<Employees />} />
      <Route path="/produtos" element={<Produtos />} />
    </Routes>
  );
};

export default AppRoutes;
