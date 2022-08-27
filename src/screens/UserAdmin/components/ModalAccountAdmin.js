import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Input, Modal, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import LoadingData from "../../../components/LoadingData/LoadingData";
import LabelInput from "../../../components/LabelInput/LabelInput";
import { userActions } from "../../../actions/userActions";
import { userActionTypes } from "../../../actions/types/userActionTypes";
import { contentMessage, notifyMessage } from "../../../utils/Message";

function ModalAccountAdmin(props) {
  const dispatch = useDispatch();

  const {visible, setVisible, typeForm, accountId} = props;

  const accountReducer = useSelector((state) => state.accountReducer);

  // loading
  const [loading, setLoading] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    if (!loadingSubmit) {
      const params = {
        'username': values.username,
        'email': values.email,
        'password': values.password,
        'role': 0,
      }
      if (typeForm === 'add') {
        dispatch(userActions.addAccount(params));
        setLoadingSubmit(true);
      }
      if (typeForm === 'edit') {
        let paramsUpdate = {
          ...params,
          id: accountId,
        }
        dispatch(userActions.updateAccount(paramsUpdate));
        setLoadingSubmit(true);
      }
    }
  }

  const handleCancel = () => {
    form.resetFields();
    setVisible(false);
  }

  const validateConfirmPass = (rule, value, callback) => {
    if (value && value.length >= 6) {
      let passwordValue = form.getFieldValue('password');
      if (value !== passwordValue) {
        return Promise.reject('Confirm password is incorrect');
      }
    }
    return Promise.resolve();
  }

  useEffect(() => {
    if (
      accountId &&
      visible &&
      typeForm === 'edit'
    ) {
      let params = {
        accountId: accountId,
      }
      dispatch(userActions.detailAccount(params));
    }
    if (visible) {
      form.resetFields();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountId, visible]);

  useEffect(() => {
    // get detail account
    if (accountReducer.type === userActionTypes.DETAIL_ACCOUNT) {
      setLoading(true);
    }
    if (accountReducer.type === userActionTypes.DETAIL_ACCOUNT_SUCCESS) {
      setLoading(false);
      form.setFieldsValue(accountReducer.data || {});
    }

    // add account
    if (accountReducer.type === userActionTypes.ADD_ACCOUNT_SUCCESS) {
      notifyMessage(200, contentMessage.MESSAGE_ADD_SUCCESS);
      setLoadingSubmit(false);
      handleCancel();
    }
    if (accountReducer.type === userActionTypes.ADD_ACCOUNT_FAILED) {
      notifyMessage(400, contentMessage.MESSAGE_ADD_FAILED);
      setLoadingSubmit(false);
    }

    // update account
    if (accountReducer.type === userActionTypes.UPDATE_ACCOUNT_SUCCESS) {
      notifyMessage(200, contentMessage.MESSAGE_UPDATE_SUCCESS);
      setLoadingSubmit(false);
      handleCancel();
    }
    if (accountReducer.type === userActionTypes.UPDATE_ACCOUNT_FAILED) {
      notifyMessage(400, contentMessage.MESSAGE_UPDATE_FAILED);
      setLoadingSubmit(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountReducer]);

  return (
    <Modal
      visible={visible}
      title={typeForm === 'add' ? 'Create user' : 'Update user'}
      width={window.innerWidth > 768 ? (window.innerWidth > 1400 ? '50%' : '60%') : '100%'}
      onCancel={handleCancel}
      okButtonProps={{
        form: "accountAdmin",
        key: "submit",
        htmlType: "submit",
        type: "primary",
        loading: loadingSubmit,
      }}
      okText={typeForm === 'add' ? 'Create' : 'Update'}
      cancelText='Cancel'
      cancelButtonProps={{
        type: "default",
      }}
    >
      {(loading && typeForm === 'edit') && <LoadingData />}
      <Form
        form={form}
        name="accountAdmin"
        initialValues={{
          remember: true,
        }}
        layout="vertical"
        onFinish={handleSubmit}
        autoComplete="off"
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label={
                <LabelInput
                  text="Full name"
                  required={true}
                />
              }
              name='username'
              rules={[
                {
                  required: true,
                  message: 'Please input your full name!',
                },
              ]}
            >
              <Input
                placeholder="Full name"
                className='w-100'
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={
                <LabelInput
                  text="Username (email format)"
                  required={true}
                />
              }
              name='email'
              rules={[
                {
                  required: true,
                  message: 'Please enter username'
                },
                {
                  type: 'email',
                  message: 'Email invalidate',
                },
              ]}
            >
              <Input
                placeholder="example@email.com"
                disabled={typeForm === 'edit'}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col md={12}>
            <Form.Item
              label={
                <LabelInput
                  text="Password"
                  required={typeForm === 'add'}
                />
              }
              name='password'
              rules={[
                {
                  required: typeForm === 'add',
                  message: 'Please enter password'
                },
                {
                  min: 6,
                  message: 'Password minimum 6 characters'
                }
              ]}
            >
              <Input.Password
                placeholder="Password"
                type="password"
              />
            </Form.Item>
          </Col>
          <Col md={12}>
            <Form.Item
              label={
                <LabelInput
                  text="Confirm password"
                  required={typeForm === 'add'}
                />
              }
              name='passwordConfirm'
              rules={[
                {
                  required: typeForm === 'add',
                  message: 'Please re-enter password'
                },
                {
                  min: 6,
                  message: 'Password minimum 6 characters'
                },
                {
                  validator: validateConfirmPass,
                }
              ]}
            >
              <Input.Password
                placeholder="Confirm password"
                type="password"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}

export default ModalAccountAdmin;