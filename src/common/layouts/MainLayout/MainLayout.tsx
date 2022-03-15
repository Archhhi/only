import React from 'react';
import s from './MainLayout.module.css';
import { Header } from '../../components/Header/Header';

export const MainLayout: React.FC = ({ children }) => {
  return (
    <div className={s.page}>
      <Header />
      <div className={s.page__wrapper}>
        <div className={s.page__content}>{children}</div>
      </div>
    </div>
  );
};
