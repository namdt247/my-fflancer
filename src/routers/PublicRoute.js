import React from 'react';
import { Navigate } from 'react-router-dom';
import ModelManager from '../common/ModelManager';
import { Path } from './Path';

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

export default PublicRoute;
