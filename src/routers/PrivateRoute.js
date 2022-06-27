import React from 'react';
import { Navigate } from 'react-router-dom';
import ModelManager from '../common/ModelManager';
import { Path } from './Path';

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

export default PrivateRoute;
