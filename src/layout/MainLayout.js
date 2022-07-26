import React, { useState } from 'react';
import { Layout } from 'antd';
import MHeader from './components/MHeader';
import MSidebar from './components/MSidebar';
import MFooter from './components/MFooter';
import { MenuOutlined } from '@ant-design/icons';

const { Header, Sider, Content, Footer } = Layout;

function MainLayout(props) {

  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  }

  return (
    <Layout>
      <Header className="wrap-header">
        <MHeader />
      </Header>
      <Layout>
        <Sider
          theme='light'
          trigger={null}
          width={240}
          collapsed={collapsed}
          collapsible
          className="d-none d-md-block"
        >
          <MSidebar
            handleToggle={handleToggle}
          />
        </Sider>
        <Layout>
          <Content className="main-content">
            {props.children}
          </Content>
          <Footer className="text-center">
            <MFooter />
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
