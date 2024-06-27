'use client'
import React from 'react';
import { User } from '@web/types/global';
import { useState } from 'react';
import { Breadcrumb, Layout, MenuProps } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Topbar from '@web/components/layout/Topbar';
import Sider from 'antd/es/layout/Sider';
import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { sampleItems } from '@web/components/layout/MenuConfig';
import Sidebar from '@web/components/layout/Sidebar';
import SideMenu from '@web/components/layout/SideMenu';

const topbarItems: MenuProps['items'] = [
  { key: '1', label: 'Settings' },
  { key: '2', icon: <LogoutOutlined />, label: 'Logout' },
];

const sampleUser: User = {
  id: '1',
  name: 'Fiona Apple',
  role: 'user',
  company: 'Panca Prima Maju Bersama'
};

export default function Home() {

  return (
    <>
      Nothing here!
    </>
  );
}

/**
 * <Layout style={{ height: '100vh' }}>
      <Header style={{ background: 'blue', width: '100%', height: '64px' }}>
        <Topbar user={sampleUser} topDropdownItems={topbarItems} />
      </Header>
      <Layout style={{ height: 'calc(100vh - 64px)' }}>
        <Sider
          width={256}
          style={{ background: 'green', height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <div style={{ background: 'yellow', flexGrow: 1 }}>
            Sidebar Content
          </div>
        </Sider>
        <Layout style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Breadcrumb style={{ margin: '16px 0', background: 'blue' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ background: 'green', flexGrow: 1, overflowY: 'auto' }}>
            <div style={{ background: 'red', height: '700px' }}>
              Inner Content
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
 */
