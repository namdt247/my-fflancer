import React from 'react';
import { Navigate } from 'react-router-dom';
import ModelManager from '../utils/ModelManager';
import { Path } from './Path';
import PropTypes from 'prop-types';

function PublicRoute({ children }) {
  const useAuth = ModelManager.useAuth();
  return useAuth
    ? (
      <Navigate
        to={{
          pathname: Path.DASHBOARD,
        }}
      />
    )
    : children;
}

PublicRoute.prototype = {
  children: PropTypes.element.isRequired,
}

export default PublicRoute;
