import React, { useState } from 'react';
import {
  AgreementWrapper,
  AvatarUploadWrapper,
  CheckboxInput,
  CheckboxWrapper,
  Container,
  FormContainer,
  NameInputContainer,
  NameInputGroup,
  SelectBox,
  SignInText,
  Terms,
  TermsLink,
  Text,
  Title,
} from 'src/pages/signup/styled';
import AvatarUpload from 'src/components/AvatarUpload/AvatarUpload';
import PasswordInput from 'src/components/Inputs/PasswordInput';
import Select from 'src/components/Select/Select';
import { Option } from 'src/types';
import NameInput from 'src/components/Inputs/NameInput';
import TextInput from 'src/components/Inputs/TextInput';
import EmailInput from 'src/components/Inputs/EmailInput';
import Link from 'next/link';

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
  const [selectedIndustry, setSelectedIndustry] = useState<Option | null>(null);
  const [selectedOccupation, setSelectedOccupation] = useState<Option | null>(null);

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
            selected={selectedIndustry}
            options={IndustryList}
            onChange={(selection: Option) => setSelectedIndustry(selection)}
          />
          <Select
            placeholder="Occupation"
            selected={selectedOccupation}
            options={OccupationList}
            onChange={(selection: Option) => setSelectedOccupation(selection)}
          />
        </SelectBox>
        <AgreementWrapper>
          <CheckboxWrapper>
            <CheckboxInput type="checkbox" />
            <Text>I agree with</Text>
            <TermsLink href="/terms" passHref>
              <Terms>Terms and Conditions</Terms>
            </TermsLink>
          </CheckboxWrapper>
          <Link href="/login" passHref>
            <SignInText>Sign In</SignInText>
          </Link>
        </AgreementWrapper>
      </FormContainer>
    </Container>
  );
};

export default Signup;
