import React from 'react';

import styles from './DropDown.module.scss';

type DropDownProps = {
  label: string;
  value: string;
  onChange: (event: React.FormEvent) => void;
  list: string[]
};

const DropDown: React.FC<DropDownProps> = ({ label, value, onChange, list }) => {
  return (
    <>
      <label className={styles['dropdown-label']} htmlFor={label}>{label}</label>
      <select id={label} className={styles.dropdown} value={value} onChange={onChange}>
        {list.map(item => <option key={item} value={item}>{item}</option>)}
      </select>
    </>
  );
};

export default DropDown;
