'use client';
// app/layout.tsx
import { metadata } from '../metadata';
import { ConfigProvider } from 'antd';
import { designTokens } from '../../styles/designTokens';
import '../globals.css';
import { Inter } from 'next/font/google';
import React from 'react';
import { adminItems, sampleItems } from '@web/components/layout/MenuConfig';
import Topbar from '@web/components/layout/Topbar';
import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, MenuProps } from 'antd';
import { User } from '@web/types/global';
import { useState } from 'react';
import Sidebar from '@web/components/layout/Sidebar';
import NavBreadcrumb from '@web/components/layout/NavBreadcrumb';
import { Content } from 'antd/lib/layout/layout';

const inter = Inter({ subsets: ['latin'] });

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      
      <body className={inter.className}>
        <ConfigProvider
          theme={{
            token: designTokens,
          }}
        >
          <Layout className="layout" >
              <Topbar 
                user={sampleUser} 
                topDropdownItems={topbarItems} 
                onToggleSidebar={toggleSidebar}
              />

            <Layout hasSider style={{ height: 'calc(100vh - 64px)' }}>
              <Sidebar
                collapsed={collapsed}
                sideMenuItems={adminItems}
              />

              <Layout style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, background:"00000"}}>
              <NavBreadcrumb />
              <Content style={{ padding: '10px', flexGrow: 1, overflowY: 'auto' }}>
                {children}
               </Content> 
              </Layout>

            </Layout>

          </Layout>

        </ConfigProvider>
      </body>
    </html>
  );
}


