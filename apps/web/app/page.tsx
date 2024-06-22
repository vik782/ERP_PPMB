'use client'
import React from 'react';
import { trpc } from '@web/app/trpc';
import SideMenu from '@web/components/layout/SideMenu';
import { sampleItems } from '@web/components/layout/MenuConfig';
import Topbar from '@web/components/layout/Topbar';
import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, MenuProps } from 'antd';
import { User } from '@web/types/global';
import { useState } from 'react';
import Sidebar from '@web/components/layout/Sidebar';
import DokumenLelang from '@web/components/dokumenLelang/DokumenLelang';

const { Header, Content, Sider } = Layout;

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
  //const { greeting } = await trpc.getUsers.query({
  //  name: `Tom from backend 💚`,
  //});

  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <>
      <Layout>
        <Topbar user={sampleUser} topDropdownItems={topbarItems}/>
          <Layout style={{ height: 'calc(100vh - 64px)' }}>
            <Sidebar sideMenuItems={sampleItems}/>
            <Layout style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <Breadcrumb style={{ margin: '16px 16px'}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  position: 'relative',
                  overflowY: 'auto',
                  flexGrow: '1'
                }}
              >
                <DokumenLelang/>
                
              </Content>
          </Layout>
        </Layout>
      </Layout>

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
