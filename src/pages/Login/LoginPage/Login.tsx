import React from 'react';
import s from './Login.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart } from '../actions';
import { getAuthError, getAuthLoading, getIsAuth } from '../selectors';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import { PROFILE_ROUTE } from '../../../router/routes';

type Inputs = {
  email: string;
  password: string;
  rememberPassword: boolean;
};

export const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  const error = useSelector(getAuthError);
  const loading = useSelector(getAuthLoading);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(loginStart(data.email, data.password));
  };

  if (isAuth) {
    return <Redirect to={PROFILE_ROUTE} />;
  }

  return (
    <div className={s.content}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {error && (
            <div className={s.authErrorNotFoundBlock}>
              <span>{error}</span>
            </div>
          )}
        </div>

        <div className={s.inputBlock}>
          <label htmlFor={'email'}>Логин</label>
          <input
            defaultValue={'steve.jobs@example.com'}
            type={'text'}
            placeholder={'Электронная почта'}
            {...register('email', { required: true })}
          />
          {errors.email && <span>Обязательное поле</span>}
        </div>

        <div className={s.inputBlock}>
          <label htmlFor={'password'}>Пароль</label>
          <input
            defaultValue={'password'}
            type={'password'}
            placeholder={'Пароль'}
            {...register('password', { required: true })}
          />
          {errors.password && <span>Обязательное поле</span>}
        </div>

        <div className={s.checkboxInputBlock}>
          <input
            type={'checkbox'}
            id={'rememberPassword'}
            className={s.rememberMe}
            defaultChecked
            {...register('rememberPassword')}
          />
          <label htmlFor={'rememberPassword'} id={'rememberPassword'}>
            Запомнить пароль
          </label>
        </div>

        <input type={'submit'} value={'Войти'} disabled={loading} />
      </form>
    </div>
  );
};
