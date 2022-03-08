import React from 'react';

import AppRouter from '../AppRouter';
import Header from '../ui/Header';
import classes from './App.module.scss';

const App: React.FC = () => {

  return (
    <main className={classes.component}>
      <Header />
      <section className={classes.content}>
        <AppRouter />
      </section>
    </main>
  );
};

export default App;
