// src/components/Button.tsx

import React from 'react';
import { Button as SemanticButton, ButtonProps,Icon } from 'semantic-ui-react';


interface Props extends ButtonProps {
  label: string;
  iconName?: string;
}

const Button: React.FC<Props> = ({ label,iconName, ...props }) => {
  
  
  return (
    <SemanticButton {...props}>
      {iconName && <Icon name={iconName as any} />}
      {label}
    </SemanticButton>
  );
};

export default Button;