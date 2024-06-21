import type { Meta, StoryObj } from '@storybook/react';
import SideMenu from './SideMenu';
import { sampleItems } from './MenuConfig';

const meta = {
  title: 'Example/SideMenu',
  component: SideMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof SideMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menuItems: sampleItems,
  },
};