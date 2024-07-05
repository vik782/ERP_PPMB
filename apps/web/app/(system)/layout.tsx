// app/layout.tsx
'use client';
import { metadata } from '../metadata';
import { ConfigProvider } from 'antd';
import { designTokens } from '../../styles/designTokens';
import '../globals.css';
import { Inter } from 'next/font/google';
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { adminItems } from '@web/components/layout/MenuConfig';
import Topbar from '@web/components/layout/Topbar';
import { LogoutOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, MenuProps } from 'antd';
import { User } from '@web/types/global';
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

const queryClient = new QueryClient();

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
          <QueryClientProvider client={queryClient}>
            <Layout className="layout">
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
                <Layout style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <NavBreadcrumb />
                  <Content style={{ padding: '10px', flexGrow: 1, overflowY: 'auto' }}>
                    {children}
                  </Content>
                </Layout>
              </Layout>
            </Layout>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
