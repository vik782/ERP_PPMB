import React from "react";
import { ConfigProvider, Menu } from "antd";
import type { MenuProps } from 'antd';
interface SideMenuProps {
    /**
     * The content inside the menu bar
     */
    menuItems: MenuProps['items'];

    /**
     * Proper inline collapse when Sider is collapsed
     */
    collapsed?: boolean;
}

const SideMenu: React.FC<SideMenuProps> = ({ menuItems, collapsed }) => {
    return (
        <Menu
            style={{ height: '100%', borderRight: 0, flexGrow: 1}}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={menuItems}
            inlineCollapsed={collapsed}
        />
    );
};

export default SideMenu;
