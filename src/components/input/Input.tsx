import { useEffect, useState } from 'react';
import './input.scss';

type Props = {
  name: string;
  type: string;
  placeholder: string;
  errorMessage: string;
  label: string;
  pattern?: string;
  value: string;
  isEmpty: boolean | undefined;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  name,
  type,
  placeholder,
  errorMessage,
  label,
  pattern,
  value,
  isEmpty,
  // required,
  onChange,
}: Props) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  useEffect(() => {
    if (isEmpty) {
      setFocused(true);
    } else {
      setFocused(false);
    }
    // console.log('input empty', isEmpty);
  }, [isEmpty]);

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        pattern={pattern}
        // className={focused ? 'invalid' : ''}
        // required={required}
        onBlur={handleFocus}
        data-focused={focused.toString()}
      />
      <span
        className={`error-message ${focused ? 'error-message-focused' : ''}`}
      >
        {errorMessage}
      </span>
    </div>
  );
};

export default Input;
