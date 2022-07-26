import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

function LoginLayout(props) {
  return (
    <Layout>
      <div>{props.children}</div>
    </Layout>
  );
}

LoginLayout.prototype = {
  children: PropTypes.element.isRequired,
}

export default LoginLayout;
