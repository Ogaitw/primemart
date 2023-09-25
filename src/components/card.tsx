// EmployeeCard.tsx
import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import * as styles from '../utils/theme';

interface EmployeeCardProps {
  name: string;
  cpf: string;
  address: string;
  telefone: string;
  image: string;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ name, cpf, address, telefone, image }) => (
  <Card className={styles.employeeCard.toString()}>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Description>
        <p><strong>CPF:</strong> {cpf}</p>
        <p><strong>Endereço:</strong> {address}</p>
        <p><strong>Telefone:</strong> {telefone}</p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name="user" />
      Funcionário
    </Card.Content>
  </Card>
);

export default EmployeeCard;
