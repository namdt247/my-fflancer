import React from 'react';
import './styles.scss';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const loadingIcon = <LoadingOutlined style={{ fontSize: 70 }} spin />;

export default function Loading() {
  return (
    <div className="loader-container d-flex flex-column justify-content-center align-items-center">
      <Spin
        indicator={loadingIcon}
        style={{
          opacity: '1 !important',
        }}
      />
      <span
        style={{
          color: '#0747a6',
          fontSize: '15px',
          opacity: '1 !important'
        }}
        className="mt-3"
      >
        Loading page...
      </span>
    </div>
  );
}
