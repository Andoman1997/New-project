import React from 'react';
import {
  AvatarUploadWrapper,
  Container,
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

const Signup = () => {
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
          <InfoInput type="password" placeholder=" " />
          <label>Confirm Password</label>
        </InfoInputWrapper>
      </FormContainer>
    </Container>
  );
};

export default Signup;
