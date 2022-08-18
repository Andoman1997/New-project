import React from 'react';
import { Input, InputWrapper } from 'src/components/Inputs/Input.styled';

interface InputProps {
  label: string;
}

const NameInput: React.FC<InputProps> = ({ label }) => {
  return (
    <InputWrapper>
      <Input type="text" placeholder=" " />
      <label>{label}</label>
    </InputWrapper>
  );
};

export default NameInput;
