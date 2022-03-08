import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from '../routes/MainPage';
import AboutProject from '../routes/AboutProject';
import BookInfoPage from '../routes/BookInfoPage';

const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainPage isTile />} />
    <Route path="/card" element={<MainPage isTile />} />
    <Route path="/list" element={<MainPage isTile={false} />} />
    <Route path="/about-project" element={<AboutProject />} />
    <Route path='/book/:id' element={<BookInfoPage />} />
    <Route path="/*" element={<MainPage isTile />} />
  </Routes>
);

export default AppRouter;
