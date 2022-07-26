import React from 'react';
import { Navigate } from 'react-router-dom';
import ModelManager from '../utils/ModelManager';
import { Path } from './Path';
import PropTypes from 'prop-types';

function PrivateRoute({ children }) {
  const useAuth = ModelManager.useAuth();
  return useAuth
    ? children
    : (
      <Navigate
        to={{
          pathname: Path.LOGIN,
        }}
      />
    );
}

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateRoute;
