import React from "react";
import { ConfigProvider, Menu } from "antd";
import type { MenuProps } from 'antd';
interface SideMenuProps {
    /**
     * The content inside the menu bar
     */
    menuItems: MenuProps['items'];

    /**
     * Edit styling of menu bar
     */
}

const SideMenu: React.FC<SideMenuProps> = ({ menuItems }) => {
    return (
        <Menu
            style={{ height: '100%', borderRight: 0}}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={menuItems}
        />
    );
};

export default SideMenu;
