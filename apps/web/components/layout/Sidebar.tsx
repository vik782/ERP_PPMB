import React from 'react';
import { Layout, MenuProps } from 'antd';
import SideMenu from './SideMenu';

const { Sider } = Layout;

interface SidebarProps {
  /**
   * Different modes of the sidebar
   */
  collapsed?: boolean;

  /**
   * For Sidebar, just take menuitems directly
   */
  sideMenuItems: MenuProps['items'];
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, sideMenuItems }) => {
  return (
    <Sider 
      style={{height: '100%', width: '256px', display: 'flex', flexDirection: 'column'}}
      collapsible 
      trigger={null}
      collapsed={collapsed}
    >
      <SideMenu menuItems={sideMenuItems} />
    </Sider>
  );
};

export default Sidebar;


