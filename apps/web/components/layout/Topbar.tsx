import React from 'react';
import { Layout, MenuProps } from 'antd';
import { LineOutlined, MenuOutlined } from '@ant-design/icons';
import { User } from '@web/types/global';
import TopbarDropdown from './TopbarDropdown';
import './topbar.css';

const { Header } = Layout;

interface TopbarProps {
  /**
   * User type that contains user info to display into header
   */
  user: User;

  /**
   * For Topbar, just take menuitems directly
   */
  topDropdownItems: MenuProps['items'];
}

const Topbar: React.FC<TopbarProps> = ({ user, topDropdownItems }) => {
  return (
    <Header className="topbar">
        <div className='topbar-left'>
            <MenuOutlined />
            <div>{user.company}</div>
        </div>
        
        <div className='topbar-right'>
            <div>Notification Component</div>
            <LineOutlined rotate={90} style={{ margin: '0 10px' }} />
            <TopbarDropdown user={user} menuitems={topDropdownItems} />
        </div>
    </Header>
  );
};

export default Topbar;
