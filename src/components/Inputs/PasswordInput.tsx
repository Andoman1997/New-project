import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { InfoInput, InfoInputWrapper } from 'src/components/Inputs/Input.styled';

export const EyeIconButton = styled.button`
  ${({ theme: { indents } }) => css`
    position: absolute;
    top: ${indents.i16};
    right: ${indents.i10};
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  `};
`;

interface PassProps {
  label: string;
}

const PasswordInput: React.FC<PassProps> = ({ label }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggle = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    setShowPassword(prev => !prev);
  };

  return (
    <InfoInputWrapper>
      <InfoInput type={!showPassword ? 'password' : 'text'} placeholder=" " />
      <label>{label}</label>

      <EyeIconButton onClick={toggle}>
        {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
      </EyeIconButton>
    </InfoInputWrapper>
  );
};

export default PasswordInput;
