'use client'
import React from 'react';
import { User } from '@web/types/global';
import { useState } from 'react';


export default function Home() {
  //const { greeting } = await trpc.getUsers.query({
  //  name: `Tom from backend 💚`,
  //});

  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <>
      Hello
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
