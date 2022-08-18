import React from 'react';
import { InfoInput, InfoInputWrapper } from 'src/components/Inputs/Input.styled';

interface EmailInputProps {
  label: string;
}

const EmailInput: React.FC<EmailInputProps> = ({ label }) => {
  return (
    <InfoInputWrapper>
      <InfoInput type="email" placeholder=" " />
      <label>{label}</label>
    </InfoInputWrapper>
  );
};

export default EmailInput;
