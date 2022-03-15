import React from 'react';
import { Route } from 'react-router-dom';
import { IRouteProps } from '../../router';

type RouteWrapperProps = IRouteProps;

export const RouteWrapper = ({
  component: Component,
  layout: Layout,
  ...rest
}: RouteWrapperProps): JSX.Element => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};
