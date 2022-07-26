import React from 'react';
import { Link } from 'react-router-dom';
import { Path } from '../../routers/Path';
import MainLayout from '../../layout/MainLayout';

function Home() {
  return (
    <MainLayout>
      <div className="d-flex h-100 justify-content-center align-items-center">
        <div>
          <div>
            <Link to={Path.NOT_FOUND}>404 Page</Link>
          </div>
          <div>
            <Link to={Path.LOADING}>Loading Page</Link>
          </div>
          <div>
            <Link to={Path.LOGIN}>Login</Link>
          </div>
          <div>
            <Link to={Path.DASHBOARD}>Dashboard</Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
