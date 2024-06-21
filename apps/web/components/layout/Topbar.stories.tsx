import type { Meta, StoryObj } from '@storybook/react';

import Topbar from './Topbar';
import { MenuProps } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { User } from '@web/types/global';

const meta = {
  title: 'Example/Topbar',
  component: Topbar,
  tags: ['autodocs'],
} satisfies Meta<typeof Topbar>;

export default meta;

type Story = StoryObj<typeof meta>;

const topbarItems: MenuProps['items'] = [
  { key: '1', label: 'Settings' },
  { key: '2', icon: <LogoutOutlined />, label: 'Logout' },
];

const sampleUser: User = {
  id: '1',
  name: 'Fiona Apple',
  role: 'user',
  company: 'Panca Prima Maju Bersama'
};

export const Default: Story = {
  args: {
    user: sampleUser,
    topDropdownItems: topbarItems,
  },
};