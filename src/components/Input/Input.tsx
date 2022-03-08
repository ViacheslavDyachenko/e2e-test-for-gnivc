import React from 'react';

import styles from './Input.module.scss';

type InputProps = {
  value: string;
  onChange: (event: React.FormEvent) => void,
  onFocus: (event: React.FocusEvent) => void,
  onBlur: (event: React.FocusEvent) => void
};

const Input: React.FC<InputProps> = ({ value, onChange, onFocus, onBlur }) => {
  return (
    <input onBlur={onBlur} onFocus={onFocus} className={styles.input} type='text' value={value} onChange={onChange} />
  );
};

export default Input;
