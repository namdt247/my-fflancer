import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Path } from './Path';
import Home from '../screens/Home/Home';
import Page404 from '../screens/404/Page404';
import Dashboard from '../screens/Dashboard/Dashboard';
import Login from '../screens/Login/Login';
import Loading from '../components/Loading/Loading';

export default function RouteContent() {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s | FFlancer"
        defaultTitle="Connect frellancer with company">
        <meta name="description" content="Connect frellancer with company." />
      </Helmet>

      <Routes>
        <Route path={Path.HOME} exact element={<Home />} />
        <Route path={Path.DASHBOARD} exact element={<Dashboard />} />
        <Route path={Path.LOGIN} exact element={<Login />} />
        <Route path={Path.NOT_FOUND} exact element={<Page404 />} />
        <Route path={Path.LOADING} exact element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
}
