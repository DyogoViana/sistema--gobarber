import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

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

  return <Route {... rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
