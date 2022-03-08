import React from 'react';

import styles from './Header.module.scss';

type HeaderProps = {
  children: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Search for books</h1>
      {children}
    </header>
  );
};

export default Header;
