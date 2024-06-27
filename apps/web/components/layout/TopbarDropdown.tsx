import React from 'react';
import { Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';
import { DownOutlined} from '@ant-design/icons';
import { User } from '@web/types/global';

interface DropdownProps {
  /**
   * User type that contains user info to display into header
   */
  user: User;

  /**
   * Item list for the dropdown content
   */
  menuitems: MenuProps['items'];
}

const TopbarDropdown: React.FC<DropdownProps> = ({ user, menuitems }) => {
  return (
    <Dropdown 
    menu={{ items: menuitems}}
    trigger={['click']}
    >
      <Space>
          {user.name}
        <DownOutlined />
      </Space>
    </Dropdown>
  );
};

export default TopbarDropdown;
