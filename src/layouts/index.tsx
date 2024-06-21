import { LeftOutlined } from '@ant-design/icons';
import { Layout, theme } from 'antd';
import React, { useState } from 'react';
import { Outlet } from 'umi';
import Header from './components/Header';
import MenuList from './components/Menu';
import styles from './index.less';

const { Sider } = Layout;

export default function LayoutWrapper() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className={styles.layoutWrapper}>
      <Sider
        theme="dark"
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={220}
        style={{
          padding: '0 24px',
        }}
      >
        <LeftOutlined />
        <MenuList />
      </Sider>
      <Layout style={{ backgroundColor: '#F2F6FD' }}>
        <Header
          colorBgContainer={colorBgContainer}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        ></Header>
        <div style={{ padding: '8px 20px 20px', overflow: 'auto' }}>
          <Outlet />
        </div>
      </Layout>
    </Layout>
  );
}
