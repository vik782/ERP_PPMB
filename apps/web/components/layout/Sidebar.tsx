import React from 'react';
import { Layout, MenuProps } from 'antd';
import SideMenu from './SideMenu';
import Sider from "antd/lib/layout/Sider";

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
      collapsible 
      trigger={null}
      collapsed={collapsed}
      collapsedWidth={70}
      width={250}
    >
      <SideMenu menuItems={sideMenuItems} collapsed={collapsed} />
    </Sider>
  );
};

export default Sidebar;


