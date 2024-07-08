import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Sidebar from './Sidebar';
import { sampleItems } from './MenuConfig';

const meta = {
  title: 'Layout/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    collapsed: false,
    sideMenuItems: sampleItems,
  },
};

export const Closed: Story = {
  args: {
    collapsed: true,
    sideMenuItems: sampleItems,
  },
};