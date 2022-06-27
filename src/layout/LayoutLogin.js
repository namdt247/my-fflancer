import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

function LayoutLogin(props) {
  return (
    <Layout>
      <div>{props.children}</div>
    </Layout>
  );
}

LayoutLogin.prototype = {
  children: PropTypes.any,
}

export default LayoutLogin;
