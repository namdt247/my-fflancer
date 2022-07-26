import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import {
  DashboardOutlined,
  MenuOutlined,
  UserOutlined,
  TeamOutlined,
  GlobalOutlined,
  LaptopOutlined,
  SyncOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { Path } from '../../routers/Path';
import { account, group, main, freelancer, job, transaction, report } from '../../common/MainMenu';
import HeaderSidebar from './HeaderSidebar';
import PropTypes from 'prop-types';

function MSidebar(props) {
  const {handleToggle} = props;

  const location = useLocation();
  const urlPath = location.pathname;

  // menu
  const [subMenuKeys, setSubMenuKeys] = useState('');
  const [activeMenu, setActiveMenu] = useState('');

  const handleClick = (value) => {
    setActiveMenu(value);
  }

  const onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys?.find(key => subMenuKeys.indexOf(key) === -1);

    setSubMenuKeys(latestOpenKey ? latestOpenKey : '');
  };

  const toggle = () => {
    handleToggle();
    setSubMenuKeys('');
  }

  useEffect(() => {
    let currentUrl = '';
    if (urlPath && urlPath !== "/") {
      currentUrl = urlPath.split("/").filter((el) => el)[0];
    }

    switch (currentUrl) {
      case Path.DASHBOARD.slice(1, Path.DASHBOARD.length):
        setActiveMenu('1');
        break;
      case Path.ADMIN_MANAGEMENT.slice(1, Path.ADMIN_MANAGEMENT.length):
        setActiveMenu('2');
        break;
      case Path.USER_MANAGEMENT.slice(1, Path.USER_MANAGEMENT.length):
        setActiveMenu('3');
        break;
      case Path.FREELANCER_MANAGEMENT.slice(1, Path.FREELANCER_MANAGEMENT.length):
        setActiveMenu('4');
        break;
      case Path.JOB_MANAGEMENT.slice(1, Path.JOB_MANAGEMENT.length):
        setActiveMenu('5');
        break;
      case Path.TRANSACTION_MANAGEMENT.slice(1, Path.TRANSACTION_MANAGEMENT.length):
        setActiveMenu('6');
        break;
      case Path.MAIN_REPORT.slice(1, Path.MAIN_REPORT.length):
        setActiveMenu('7');
        break;
      default:
        break;
    }
  }, [urlPath])

  return (
    <>
      <div className="d-block d-md-none main-menu-header-sidebar">
        <HeaderSidebar />
      </div>
      <Menu
        onClick={handleClick}
        selectedKeys={[activeMenu]}
        openKeys={[subMenuKeys]}
        onOpenChange={onOpenChange}
        mode="inline"
        className="main-menu"
      >
        <Menu.Item key="1">
          <Link to={Path.DASHBOARD}>
            <div className="d-flex align-items-center">
              <DashboardOutlined />
              <span>{main.DASHBOARD}</span>
            </div>
          </Link>
        </Menu.Item>
        <div className="text-uppercase main-menu-group">
          {group.SYSTEM}
        </div>
        <Menu.Item key="2">
          <Link to={Path.ADMIN_MANAGEMENT}>
            <div className="d-flex align-items-center">
              <UserOutlined />
              <span>{account.MANAGE_ACCOUNT_ADMIN}</span>
            </div>
          </Link>
        </Menu.Item>

        <div className="text-uppercase main-menu-group">
          {group.MANAGEMENT}
        </div>
        <Menu.Item key="3">
          <Link to={Path.USER_MANAGEMENT}>
            <div className="d-flex align-items-center">
              <TeamOutlined />
              <span>{account.MANAGE_ACCOUNT_USER}</span>
            </div>
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to={Path.FREELANCER_MANAGEMENT}>
            <div className="d-flex align-items-center">
              <GlobalOutlined />
              <span>{freelancer.MANAGE_FREELANCER}</span>
            </div>
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to={Path.JOB_MANAGEMENT}>
            <div className="d-flex align-items-center">
              <LaptopOutlined />
              <span>{job.MANAGE_JOB}</span>
            </div>
          </Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to={Path.TRANSACTION_MANAGEMENT}>
            <div className="d-flex align-items-center">
              <SyncOutlined />
              <span>{transaction.MANAGE_TRANSACTION}</span>
            </div>
          </Link>
        </Menu.Item>

        <div className="text-uppercase main-menu-group">
          {group.STATISTICAL_REPORT}
        </div>
        <Menu.Item key="7">
          <Link to={Path.MAIN_REPORT}>
            <div className="d-flex align-items-center">
              <BarChartOutlined />
              <span>{report.STATISTICAL_REPORT}</span>
            </div>
          </Link>
        </Menu.Item>
      </Menu>
      <div className="d-none d-md-block text-center sidebar-footer py-1">
        <MenuOutlined
          style={{
            fontSize: '1.5rem',
          }}
          className="main-menu-icon"
          onClick={toggle}
        />
      </div>
    </>
  );
}

MSidebar.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};

export default MSidebar;
