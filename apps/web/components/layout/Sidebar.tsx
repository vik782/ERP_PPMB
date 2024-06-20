import React from 'react';
import { Layout, Button } from 'antd';
import SideMenu, { sampleItems } from './SideMenu';

const { Sider } = Layout;

interface SidebarProps {
  /**
   * Different modes of the sidebar
   */
  collapsed?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  return (
    
    <Sider 
        collapsible 
        trigger={null}
        collapsed={collapsed}>
        <SideMenu menuItems={sampleItems}/>
    </Sider>
  );
};

export default Sidebar;

