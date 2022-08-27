import React from 'react';
import ModelManager from "../../../utils/ModelManager";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faPencilAlt, faTrashAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { Table, Tag, Tooltip, Modal } from "antd";
import moment from "moment";
import DateHelper from "../../../utils/DateHelper";
import { contentMessage, notifyMessage } from "../../../utils/Message";

const { confirm } = Modal;

function TableAccountAdmin(props) {
  const {
    loading, data, currentPage, pageSize, totalPage, handleChangePage, setVisible,
    setTypeForm, setAccountId, handleDelete,
  } = props;
  const totalItem = parseInt(pageSize) * parseInt(totalPage);

  const currentUserId = ModelManager.userId;

  const handleEdit = (value) => {
    setAccountId(value.id || '');
    setVisible(true);
    setTypeForm('edit');
  }

  const columns = [
    {
      title: '#',
      dataIndex: 'stt',
      key: 'stt',
      width: '80px',
      render: text =>
        <code>
          {text}
        </code>
      ,
    },
    {
      title: 'Fullname',
      dataIndex: 'username',
      key: 'username',
      render: text => (
        <span>
          <span className="text-table-primary">{text}</span>
        </span>
      ),
    },
    {
      title: 'Username',
      dataIndex: 'email',
      key: 'email',
      render: text => (
        <span>
          <span>
            <FontAwesomeIcon
              icon={faUser}
              className="me-1 info-icon-color-2"
            />
          </span>
          <span>{text}</span>
        </span>
      ),
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: () => (
        <Tag color='geekblue'>
          Admin
        </Tag>
      ),
    },
    {
      title: 'Created at',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text) => (
        <span>
          {text && (
            <>
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="me-1 info-icon-color-4"
              />
              {text ? moment(text).format(DateHelper.formatFullDay()) : ''}
            </>
          )}
        </span>
      ),
    },
    {
      width: '90px',
      render: (text, record) => (
        <div className="d-flex justify-content-end">
          <Tooltip placement="top" title={'Edit'}>
            <span
              className="wrap-button-info-2 text-center"
              onClick={() => handleEdit(record)}
            >
              <FontAwesomeIcon
                icon={faPencilAlt}
              />
            </span>
          </Tooltip>
          {parseInt(currentUserId) !== record.id && (
            <Tooltip placement="top" title={'Delete'} className="ms-1">
              <span
                className="wrap-button-delete-2 text-center"
                onClick={() => showDeleteConfirm(record)}
              >
                <FontAwesomeIcon
                  icon={faTrashAlt}
                />
              </span>
            </Tooltip>
          )}
        </div>
      ),
    },
  ];

  const convertDataTable = (list) => {
    return list.map((item, index) => {
      return {
        ...item,
        stt: index + 1,
      }
    })
  }

  const showDeleteConfirm = (value) => {
    confirm({
      title: contentMessage.CONFIRM_DELETE_ACCOUNT,
      content: contentMessage.UNRECOVERABLE_DATA,
      okText: 'Agree',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk() {
        if (value && value.id) {
          handleDelete(value.id)
        } else {
          notifyMessage(400, contentMessage.MESSAGE_ERROR);
        }
      },
      onCancel() {},
    });
  }

  return (
    <Table
      columns={columns}
      dataSource={convertDataTable(data)}
      scroll={{x: true}}
      bordered
      rowKey={record => record.id}
      loading={loading}
      size='middle'
      pagination={{
        current: currentPage,
        pageSize: pageSize,
        total: totalItem,
        onChange: (page) => {
          handleChangePage(page);
        },
        showSizeChanger: false,
      }}
    />
  );
}

export default TableAccountAdmin;