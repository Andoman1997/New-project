import React from 'react';
import { TextBox, TextBoxWrapper } from 'src/components/Inputs/Input.styled';

interface TextInputProps {
  label: string;
}

const TextInput: React.FC<TextInputProps> = ({ label }) => {
  return (
    <TextBoxWrapper>
      <TextBox placeholder=" " />
      <label>{label}</label>
    </TextBoxWrapper>
  );
};

export default TextInput;
