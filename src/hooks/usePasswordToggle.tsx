import React, { useState } from 'react';
import styled from 'styled-components';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

export const EyeIconButton = styled.button`
  position: absolute;
  top: 16px;
  right: 10px;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
`;

const usePasswordToggle = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePassword = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const ShowButton = (
    <EyeIconButton onClick={togglePassword}>
      {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
    </EyeIconButton>
  );

  const InputType = showPassword ? 'text' : 'password';

  return [InputType, ShowButton];
};

export default usePasswordToggle;
