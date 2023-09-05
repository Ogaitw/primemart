import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Input, InputProps } from 'semantic-ui-react';

interface Props extends Omit<InputProps, 'onChange'> {
  onChange?: (value: number) => void;
}

const InputNumeric: React.FC<Props> = ({ onChange, ...props }) => {
  const [showWarning, setShowWarning] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = parseInt(inputValue, 10);

    if (!isNaN(numericValue)) {
      onChange && onChange(numericValue);
      setShowWarning(false); 
    } else {
      setShowWarning(true); 
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;

    
    if (!/^[0-9]$/.test(key)) {
      e.preventDefault();
      setShowWarning(true); 
    }
  };

  return (
    <div>
      {showWarning && <div className="warning">Digite apenas números!</div>}
      <Input
        {...props}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
        onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => handleKeyPress(e)}
      />
      <style>
        {`
          .warning {
            color: red;
            font-size: 14px;
            margin-top: 4px;
          }
        `}
      </style>
    </div>
  );
};

export default InputNumeric;
