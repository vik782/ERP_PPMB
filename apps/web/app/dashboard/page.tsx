'use client'

// app/dashboard/page.tsx

import React from 'react';
import { sampleItems } from '@web/components/layout/MenuConfig';
import Topbar from '@web/components/layout/Topbar';
import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, MenuProps } from 'antd';
import { User } from '@web/types/global';
import { useState } from 'react';
import Sidebar from '@web/components/layout/Sidebar';

const { Header, Content, Sider } = Layout;

export default function DashboardPage() {
    return (
      <>
        <Content style={{ background: 'green', flexGrow: 1, overflowY: 'auto' }}>
            <div style={{ background: 'red', height: '700px' }}>
              Dashboard Content
            </div>
          </Content>
      </>
    );
  }

  
