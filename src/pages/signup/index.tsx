import React, { useState } from 'react';

import {
  AvatarUploadWrapper,
  Container,
  EyeIconButton,
  FormContainer,
  InfoInput,
  InfoInputWrapper,
  Input,
  InputWrapper,
  NameInputContainer,
  NameInputGroup,
  TextBox,
  TextBoxWrapper,
  Title,
} from 'src/pages/signup/styled';
import AvatarUpload from 'src/components/AvatarUpload/AvatarUpload';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

const Signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePassword = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <Title>Sign Up</Title>
      <FormContainer>
        <NameInputContainer>
          <AvatarUploadWrapper>
            <AvatarUpload />
          </AvatarUploadWrapper>
          <NameInputGroup>
            <InputWrapper>
              <Input type="text" placeholder=" " />
              <label>First Name</label>
            </InputWrapper>
            <InputWrapper>
              <Input type="text" placeholder=" " />
              <label>Last Name</label>
            </InputWrapper>
          </NameInputGroup>
        </NameInputContainer>

        <TextBoxWrapper>
          <TextBox placeholder=" " />
          <label>Bio (Optional)</label>
        </TextBoxWrapper>
        <InfoInputWrapper>
          <InfoInput type="email" placeholder=" " />
          <label>Email Address</label>
        </InfoInputWrapper>
        <InfoInputWrapper>
          <InfoInput type="password" placeholder=" " />
          <label>Password</label>
        </InfoInputWrapper>
        <InfoInputWrapper>
          <InfoInput type={showPassword ? 'text' : 'password'} placeholder=" " />
          <label>Confirm Password</label>
          <EyeIconButton onClick={togglePassword}>
            {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </EyeIconButton>
        </InfoInputWrapper>
      </FormContainer>
    </Container>
  );
};

export default Signup;
