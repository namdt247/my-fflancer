import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ModelManager from '../../common/ModelManager';
import { Path } from '../../routers/Path';
import { authActions } from '../../actions/authActions';

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(authActions.postLogout());
    ModelManager.clearLocalStorage();
    navigate(Path.LOGIN);
  }

  return (
    <div>
      Dashboard
      <Button
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
}

export default Dashboard;
