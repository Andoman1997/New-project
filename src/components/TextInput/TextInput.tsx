import React from 'react';
import { Input, InputWrapper } from 'src/components/TextInput/TextInput.styled';

interface TextInputProps {
  type: string;
  label: string;
}

const TextInput: React.FC<TextInputProps> = ({ type, label }) => {
  return (
    <InputWrapper>
      <Input type={type} placeholder=" " />
      <label>{label}</label>
    </InputWrapper>
  );
};

export default TextInput;
