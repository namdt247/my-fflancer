import React from 'react';
import ModelManager from '../../utils/ModelManager';
import { Link, useNavigate } from 'react-router-dom';
import { Path } from '../../routers/Path';
import logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons';
import { Avatar, Dropdown, Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { authActions } from '../../actions/authActions';
import PropTypes from 'prop-types';

function MHeader(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {showSidebar}= props;

  const userName = ModelManager.userName || 'Admin';
  const userName2 = ModelManager.userName2 || 'admin@gmail.com';
  const groupOrganName = 'FFlancer Technology Joint Stock Company';
  const organName = 'D.Administration';

  const getValueByName = (text) => {
    return text
      .split(/\s/)
      .reduce((response, word) => (response += word.slice(0, 1).toUpperCase()), "");
  };

  const handleToggle = () => {
    if (showSidebar) {
      showSidebar();
    }
  }

  const handleLogOut = () => {
    dispatch(authActions.postLogout());
    ModelManager.clearLocalStorage();
    navigate(Path.LOGIN);
  }

  const dropDownUser = () => {
    return (
      <Menu>
        <Menu.Item className="mb-2">
          <div>
            <FontAwesomeIcon
              icon={faUser}
              className="me-2 header-dropdown-icon"
            />
            Profile
          </div>
        </Menu.Item>
        <Menu.Item>
          <div onClick={handleLogOut}>
            <FontAwesomeIcon
              icon={faPowerOff}
              className="me-2 header-dropdown-icon"
            />
            Logout
          </div>
        </Menu.Item>
      </Menu>
    )
  }

  return (
    <div className="d-flex justify-content-between h-100">
      <div className="d-flex align-items-center mx-3 mx-md-4">
        <Link to={Path.HOME} className="d-none d-md-block">
          <img
            src={logo}
            alt="logo"
            className="header-logo"
          />
        </Link>
        <Link
          to={Path.HOME}
          className="text-white px-2 header-company d-none d-md-block"
        >
          FFlancer
        </Link>
        <div className="d-flex text-white align-items-center" onClick={handleToggle}>
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            className="d-block d-md-none"
          />
        </div>
      </div>

      <div className="px-2 px-md-4 d-inline-flex align-items-center">
        <div className="header-organ text-end pe-md-3 pe-0">
          <div className="mb-1 header-group-organ">
            {groupOrganName}
          </div>
          <div className="header-organ">
            {organName}
          </div>
        </div>
        <Dropdown overlay={dropDownUser} trigger={["click"]} className="ps-3">
          <div className="ant-dropdown-link header-dropdown d-md-inline-flex d-none h-100 align-items-center">
            <Avatar size={36} className="header-user-avatar">
              {getValueByName(userName)}
            </Avatar>
            <div className="ms-2 header-wrap-organ">
              <div className="text-white text-capitalize">
                {userName}
              </div>
              {userName2 && (
                <div className="text-white text-lowercase header-organ-2">
                  @{userName2}
                </div>
              )}
            </div>
          </div>
        </Dropdown>
      </div>
    </div>
  );
}

MHeader.propTypes = {
  showSidebar: PropTypes.func.isRequired,
};

export default MHeader;
