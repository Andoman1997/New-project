import React, { useRef, useState } from 'react';
import { Option } from 'src/types';
import {
  DownIcon,
  Options,
  SelectContent,
  SelectWrapper,
  UpIcon,
} from 'src/components/Select/Select.styled';
import UseOnClickOutside from 'src/hooks/useOutsideClick';

interface SelectProps {
  placeholder?: string;
  options: Option[];
  selected: Option | null;
  onChange: (selection: Option) => void;
}

const Select: React.FC<SelectProps> = ({ placeholder, selected, options, onChange }) => {
  const [showOptions, setShowOptions] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const clickOutsideHandler = () => {
    setShowOptions(false);
  };

  UseOnClickOutside(ref, clickOutsideHandler);

  return (
    <SelectWrapper ref={ref}>
      <SelectContent onClick={() => setShowOptions(!showOptions)}>
        <span>{selected ? selected.label : placeholder}</span>
        {showOptions ? <UpIcon /> : <DownIcon />}
      </SelectContent>
      {showOptions && (
        <Options>
          {options.map(option => (
            <option
              onClick={() => {
                onChange(option);
                setShowOptions(false);
              }}
              key={option.value}
            >
              <span>{option.label}</span>
            </option>
          ))}
        </Options>
      )}
    </SelectWrapper>
  );
};

export default Select;
