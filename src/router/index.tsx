import React from 'react';
import { WithRequired } from '../common/utils';
import { MainLayout } from '../common/layouts/MainLayout/MainLayout';
import { LOGIN_ROUTE, PAGE_404_ROUTE, PROFILE_ROUTE } from './routes';
import { Login } from '../pages/Login/LoginPage/Login';
import { Profile } from '../pages/Profile/ProfilePage/Profile';
import { Page_404 } from '../common/pages/Page_404/Page_404';
import { RouteProps } from 'react-router-dom';

export type IRouteProps = WithRequired<RouteProps, 'component'> & {
  title?: string;
  layout: React.FC;
};

export const allRoutes: IRouteProps[] = [
  {
    path: '/',
    component: Login,
    exact: true,
    layout: MainLayout,
  },
  {
    path: LOGIN_ROUTE,
    component: Login,
    exact: true,
    layout: MainLayout,
  },
  {
    path: PROFILE_ROUTE,
    component: Profile,
    exact: true,
    layout: MainLayout,
  },
  {
    path: PAGE_404_ROUTE,
    exact: true,
    layout: Page_404,
    component: () => <></>,
  },
];
