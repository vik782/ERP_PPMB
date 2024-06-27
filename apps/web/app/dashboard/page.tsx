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
      <div>
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

        </Content>
      </div>
    );
  }

  
