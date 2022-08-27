import React, { useEffect, useState } from 'react';
import MainLayout from '../../layout/MainLayout';
import { Breadcrumb, Button, Card, Col, Divider, Input, Row } from "antd";
import { Path } from "../../routers/Path";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus } from "@fortawesome/free-solid-svg-icons";
import TableAccountAdmin from "./components/TableAccountAdmin";
import ModalAccountAdmin from "./components/ModalAccountAdmin";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../actions/userActions";
import { userActionTypes } from "../../actions/types/userActionTypes";
import { contentMessage, notifyMessage } from "../../utils/Message";

function UserAdmin() {
  const dispatch = useDispatch();

  const accountReducer = useSelector((state) => state.accountReducer);

  const [listUserAdmin, setListUserAdmin] = useState([]);

  // form modal
  const [visible, setVisible] = useState(false);
  const [typeForm, setTypeForm] = useState('add');
  const [accountId, setAccountId] = useState('');

  // loading
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const pageSize = 10;

  // search
  const [fullName, setFullName] = useState('');

  let params = {
    'currentPage': currentPage,
    'pageSize': pageSize,
    'typeUser': 0,
  }

  const headerPage = () => {
    return (
        <div className="d-md-flex justify-content-between mb-3">
          <div>
            <h4 className="mb-0">Admin management</h4>
          </div>
          <div>
            <Button type="primary" onClick={handleShowForm} className="mt-md-0 mt-2">
              <FontAwesomeIcon
                  icon={faPlus}
                  className="me-2"
              />
              Create
            </Button>
          </div>
        </div>
    )
  }

  const handleChangeKeyword = (e) => {
    setFullName(e.target.value || '');
  }

  const handleSearch = () => {
    const paramSearch = {
      ...params,
      currentPage: 1,
    }
    dispatch(userActions.getLisAccount(paramSearch));
  }

  const handleShowForm = () => {
    setVisible(true);
    setTypeForm('add');
    setAccountId('');
  }

  const handleChangePage = (value) => {
    setCurrentPage(value);
  }

  const handleDelete = (value) => {
    const paramsDelete = {
      accountId: value,
    }
    dispatch(userActions.deleteAccount(paramsDelete));
  }

  useEffect(() => {
    dispatch(userActions.getLisAccount(params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  useEffect(() => {
    if (accountReducer.type === userActionTypes.GET_LIST_ACCOUNT) {
      setLoading(true);
    }
    if (accountReducer.type === userActionTypes.GET_LIST_ACCOUNT_SUCCESS) {
      setListUserAdmin(accountReducer.data?.list || []);
      setTotalPage(accountReducer.data?.totalPage || 0);
      setLoading(false);
    }

    if (accountReducer.type === userActionTypes.ADD_ACCOUNT_SUCCESS) {
      const params2 = {
        ...params,
        currentPage: 1,
      }
      dispatch(userActions.getLisAccount(params2));
    }

    if (accountReducer.type === userActionTypes.UPDATE_ACCOUNT_SUCCESS) {
      dispatch(userActions.getLisAccount(params));
    }

    if (accountReducer.type === userActionTypes.DELETE_ACCOUNT_SUCCESS) {
      notifyMessage(200, contentMessage.MESSAGE_DELETE_SUCCESS)
      let params3 = {};
      if (listUserAdmin.length === 1) {
        let page = currentPage;
        if (currentPage > 1) {
          params3 = {
            ...params,
            currentPage: page - 1,
          }
          setCurrentPage(page - 1);
        } else {
          params3 = {
            ...params,
          }
        }
      } else {
        params3 = {
          ...params,
        }
      }
      dispatch(userActions.getLisAccount(params3));
    }
    if (accountReducer.type === userActionTypes.DELETE_ACCOUNT_FAILED) {
      notifyMessage(400, contentMessage.MESSAGE_DELETE_FAILED);
      dispatch(userActions.getLisAccount(params));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountReducer]);

  return (
    <MainLayout>
      <div className="mb-1">
        <Breadcrumb>
          <Breadcrumb.Item href={Path.DASHBOARD}>
            <FontAwesomeIcon
                icon={faHome}
                className="me-1"
            />
            <span>Home</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span>Admin management</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      {headerPage()}

      <Card
          bordered={false}
          className="wrap-main-component"
      >
        <Row gutter={16} className="mb-2">
          <Col md={6} className="search">
            <Input
                type="text"
                placeholder="Full name..."
                allowClear
                onChange={handleChangeKeyword}
                value={fullName}
            />
          </Col>
          <Col md={18} className="mt-md-0 mt-2">
            <Button type="primary" className="btn-search" onClick={handleSearch}>
              Search
            </Button>
          </Col>
        </Row>
        <Divider />
        <TableAccountAdmin
          loading={loading}
          data={listUserAdmin}
          currentPage={currentPage}
          totalPage={totalPage}
          pageSize={pageSize}
          handleChangePage={handleChangePage}
          setVisible={setVisible}
          setTypeForm={setTypeForm}
          setAccountId={setAccountId}
          handleDelete={handleDelete}
        />
        <ModalAccountAdmin
          visible={visible}
          setVisible={setVisible}
          typeForm={typeForm}
          accountId={accountId}
        />
      </Card>
    </MainLayout>
  );
}

export default UserAdmin;
