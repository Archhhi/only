import React from 'react';
import s from './Profile.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuth, getUser } from '../../Login/selectors';
import { Redirect } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../../router/routes';
import { logoutStart } from '../../Login/actions';

export const Profile = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  const user = useSelector(getUser);

  if (!isAuth) {
    return <Redirect to={LOGIN_ROUTE} />;
  }

  const onLogout = () => {
    dispatch(logoutStart());
  };

  return (
    <div className={s.content}>
      <span>
        Здравствуйте, <strong>{user!.email}</strong>
      </span>

      <button onClick={onLogout}>Выйти</button>
    </div>
  );
};
