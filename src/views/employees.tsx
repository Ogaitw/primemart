import React from 'react';
import { Grid } from 'semantic-ui-react';
import EmployeeCard from '../components/card';
import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom
// Importe o componente Button
import Button from '../components/buttom';

interface Employee {
  name: string;
  cpf: string;
  address: string;
  telefone: string;
  image: string; // Agora a propriedade 'image' aceita uma URL externa
}

const EmployeeList = () => {
  const employees: Employee[] = [
    {
      name: 'Funcionário 1',
      cpf: '123.456.789-00',
      address: 'Rua 123, Cidade A',
      telefone: '123-456-7890',
      image: 'https://cdn-icons-png.flaticon.com/512/64/64572.png',
    },
    {
      name: 'Funcionário 2',
      cpf: '987.654.321-00',
      address: 'Rua 456, Cidade B',
      telefone: '987-654-3210',
      image: 'https://cdn-icons-png.flaticon.com/512/64/64572.png',
    },
    {
      name: 'Funcionário 3',
      cpf: '111.222.333-44',
      address: 'Rua 789, Cidade C',
      telefone: '111-222-3330',
      image: 'https://cdn-icons-png.flaticon.com/512/64/64572.png',
    },
  ];

  return (
    <div>
      {/* Usando o Link para redirecionar para EmployeeAddPage */}
      <Link to="/addEmployee">
        <Button label="Cadastrar Funcionário" iconName="user plus" />
      </Link>
      <Grid columns={3}>
        {employees.map((employee, index) => (
          <Grid.Column key={index}>
            <EmployeeCard {...employee} />
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
};

export default EmployeeList;
