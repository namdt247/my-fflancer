import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Path } from './Path';
import Page404 from '../screens/404/Page404';
import Dashboard from '../screens/Dashboard/Dashboard';
import Login from '../screens/Login/Login';
import Loading from '../components/Loading/Loading';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Home from '../screens/Home/Home';
import Demo from '../screens/Demo/Demo';

export default function RouteContent() {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s | FFlancer"
        defaultTitle="Connect frellancer with company">
        <meta name="description" content="Connect frellancer with company." />
      </Helmet>

      <Routes>
        <Route
          path={Path.LOGIN}
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
          exact
        />

        <Route
          path={Path.HOME}
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
          exact
        />
        <Route
          path={Path.DASHBOARD}
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
          exact
        />
        <Route
          path={Path.LOADING}
          element={
            <PrivateRoute>
              <Loading />
            </PrivateRoute>
          }
          exact
        />
        <Route path="*" element={<Page404 />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  );
}
