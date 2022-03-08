import React from 'react';

import styles from './ActionButton.module.scss';

type ActionButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
  text: string,
  className?: string
};

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, text, className }: ActionButtonProps) => {
  return (
    <button className={`${styles['action-btn']} ${className}`} onClick={onClick}>{text}</button>
  );
};

export default ActionButton;
