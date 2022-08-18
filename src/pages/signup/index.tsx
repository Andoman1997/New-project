import React, { useState } from 'react';
import {
  AvatarUploadWrapper,
  Container,
  FormContainer,
  SelectBox,
  Title,
} from 'src/pages/signup/styled';
import AvatarUpload from 'src/components/AvatarUpload/AvatarUpload';
import PasswordInput from 'src/components/Inputs/PasswordInput';
import Select from 'src/components/Select/Select';
import { Option } from 'src/types';
import { NameInputContainer, NameInputGroup } from 'src/components/Inputs/Input.styled';
import NameInput from 'src/components/Inputs/NameInput';
import TextInput from 'src/components/Inputs/TextInput';
import EmailInput from 'src/components/Inputs/EmailInput';

const IndustryList: Option[] = [
  {
    label: 'Development',
    value: 'development',
  },
  {
    label: 'Design',
    value: 'design',
  },
];

const OccupationList: Option[] = [
  {
    label: 'Developer',
    value: 'developer',
  },
  {
    label: 'Designer',
    value: 'designer',
  },
];

const Signup: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Option | null>(null);

  return (
    <Container>
      <Title>Sign Up</Title>
      <FormContainer>
        <NameInputContainer>
          <AvatarUploadWrapper>
            <AvatarUpload />
          </AvatarUploadWrapper>
          <NameInputGroup>
            <NameInput label="First Name" />
            <NameInput label="Last Name" />
          </NameInputGroup>
        </NameInputContainer>
        <TextInput label="Bio (Optional)" />
        <EmailInput label="Email Address" />
        <PasswordInput label="Password" />
        <PasswordInput label="Confirm Password" />
        <SelectBox>
          <Select
            placeholder="Industry"
            selected={selectedItem}
            options={IndustryList}
            onChange={(selection: Option) => setSelectedItem(selection)}
          />
          <Select
            placeholder="Occupation"
            selected={selectedItem}
            options={OccupationList}
            onChange={(selection: Option) => setSelectedItem(selection)}
          />
        </SelectBox>
      </FormContainer>
    </Container>
  );
};

export default Signup;
