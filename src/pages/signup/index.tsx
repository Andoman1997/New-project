import React from 'react';
import {
  Container,
  FormContainer,
  NameInputContainer,
  NameInputGroup,
  Title,
} from 'src/pages/signup/styled';
import AvatarUpload from 'src/components/AvatarUpload/AvatarUpload';
import TextInput from 'src/components/TextInput/TextInput';

const Signup = () => {
  return (
    <Container>
      <Title>Sign Up</Title>
      <FormContainer>
        <NameInputContainer>
          <AvatarUpload />
          <NameInputGroup>
            <TextInput type="text" label="First Name" />
            <TextInput type="text" label="Last Name" />
          </NameInputGroup>
        </NameInputContainer>
        <textarea />
      </FormContainer>
    </Container>
  );
};

export default Signup;
