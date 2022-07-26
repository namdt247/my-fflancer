import React, { useEffect, useState } from 'react';
import LoginLayout from '../../layout/LoginLayout';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../actions/authActions';
import { authActionTypes } from '../../actions/types/authActionTypes';
import { Path } from '../../routers/Path';
import APICode from '../../utils/APICode';
import { contentMessage, notifyMessage } from '../../utils/Message';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authReducer = useSelector((state) => state.authReducer);

  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const [form] = Form.useForm();

  const openMessage = () => {
    message.loading('Loading...', 60);
  }

  const onFinish = (values) => {
    if (!loadingSubmit) {
      const params = {
        "email": values.email,
        "password": values.password,
      };
      dispatch(authActions.postLogin(params));
      openMessage();
      setLoadingSubmit(true);
    }
  };

  useEffect(() => {
    if (authReducer.type === authActionTypes.LOGIN_SUCCESS) {
      message.destroy();
      navigate(Path.DASHBOARD);
    }
    if (authReducer.type === authActionTypes.LOGIN_FAILED) {
      if (authReducer.status === APICode.PERMISSION_DENIED) {
        notifyMessage(400, authReducer.message || contentMessage.MESSAGE_LOGIN_FAILED);
        message.destroy();
        setLoadingSubmit(false);
      } else if (authReducer.status === APICode.USER_LOCKED) {
        notifyMessage(400, authReducer.message || contentMessage.MESSAGE_LOGIN_FAILED);
        message.destroy();
        setLoadingSubmit(false);
      } else {
        notifyMessage(400, contentMessage.MESSAGE_LOGIN_FAILED);
        message.destroy();
        setLoadingSubmit(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authReducer]);

  return (
    <LoginLayout>
      <div className="d-flex align-items-center justify-content-center flex-column wrap-login">
        <div className="wrap-form-login">
          <div className="text-center px-5">
            <img
              src={logo}
              alt="logo"
              style={{
                width: '66px',
              }}
            />
            <h2 className="mt-2 mb-4 text-primary">FFlancer - Admin</h2>
            <p className="text-login">Login</p>
          </div>
          <Form
            form={form}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input
                prefix={
                  <UserOutlined className="icon-login" />
                }
                placeholder="Username"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password
                prefix={
                  <LockOutlined className="icon-login" />
                }
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
            >
              <div className="d-flex justify-content-between">
                <Checkbox checked>Save login</Checkbox>
                <Link to="#">
                  Forgot password
                </Link>
              </div>
            </Form.Item>

            <Form.Item>
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className="btn-block w-100 fw-bold mb-2"
                // loading={loadingSubmit}
              >
                Login
              </Button>
              <p>Do not have an account? <Link to="#">Contact now</Link></p>
            </Form.Item>
          </Form>
        </div>
      </div>
    </LoginLayout>
  );
}

export default Login;
