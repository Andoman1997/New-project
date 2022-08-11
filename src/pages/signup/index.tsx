import React from 'react';
import {
  Container,
  FormContainer,
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
          <AvatarUpload />
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
      </FormContainer>
    </Container>
  );
};

export default Signup;
