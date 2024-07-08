import type { Meta, StoryObj } from '@storybook/react';

import TopbarDropdown from './TopbarDropdown';
import { MenuProps } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { User } from '@web/types/global';

const meta = {
  title: 'Layout/TopbarDropdown',
  component: TopbarDropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof TopbarDropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

const topbarItems: MenuProps['items'] = [
  { key: '1', label: 'Settings' },
  { key: '2', icon: <LogoutOutlined />, label: 'Logout' },
];

const sampleUser: User = {
  id: '1',
  name: 'John Smith',
  role: 'user',
  company: 'PPMB'
};

export const Default: Story = {
  args: {
    user: sampleUser,
    menuitems: topbarItems,
  },
};