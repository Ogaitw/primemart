import React from 'react';
import { Input as SemanticInput, InputProps } from 'semantic-ui-react';
import * as styles from '../utils/theme'; // Importe os estilos CSS

interface Props extends InputProps {
  label: string;
  iconName?: string;
}

const InputText: React.FC<Props> = ({ label, iconName, ...props }) => {
  return (
    <div className={styles.inputContainer.toString()}>
      <SemanticInput
        icon={iconName ? iconName : undefined}
        iconPosition={iconName ? 'left' : undefined}
        placeholder={label}
        {...props}
      />
    </div>
  );
};

export default InputText;
