import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false; // Controla de forma manual a entrada do usuário (logIn).

  // Redireciona o usuário de volta ao login, caso não esteja logado.
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  // Estando logado, o usuário entra na página de dashboard.
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  // Escolhe o layout de acordo com o acesso do usuário.
  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {... rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
