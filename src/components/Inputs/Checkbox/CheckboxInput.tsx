import React from 'react';
import { CheckboxInput } from 'src/components/Inputs/Checkbox/Checkbox.styled';

const Checkbox: React.FC = () => {
  return (
    <>
      <CheckboxInput type="checkbox" id="agreement" />
      <label htmlFor="agreement">I agree with</label>
    </>
  );
};

export default Checkbox;
