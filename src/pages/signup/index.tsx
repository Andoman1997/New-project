import React, { useState } from 'react';
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
  SelectBox,
  TextBox,
  TextBoxWrapper,
  Title,
} from 'src/pages/signup/styled';
import AvatarUpload from 'src/components/AvatarUpload/AvatarUpload';
import PasswordInput from 'src/components/Inputs/PasswordInput';
import Select from 'src/components/Select/Select';
import { Option } from 'src/types';

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
  // const [PasswordInputType, ToggleIcon] = usePasswordToggle();
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
