export const breadcrumbNameMap = {
  '/': 'Home',
  '/dasboard': 'Home',
  '/apps': 'Application List',
  '/apps/1': 'Application1',
  '/apps/2': 'Application2',
  '/apps/1/detail': 'Detail',
  '/apps/2/detail': 'Detail',
};
  
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

export const MODULES = {
  DASHBOARD: {
    key: '/dashboard',
    icon: <PieChartOutlined />,
    label: <Link href="/dashboard">Dashboard</Link>,
    title: 'Dashboard',
    children: [
      {
        key: '/dashboard/inner',
        label: <Link href="/dashboard/inner">Inner Dashboard</Link>,
        title: 'Inner Dashboard',
      },
    ],
  },
  ANALYTICS: {
    key: '/analytics',
    icon: <DesktopOutlined />,
    label: <Link href="/analytics">Analytics</Link>,
    title: 'Analytics',
    children: [
      {
        key: '/analytics/inner',
        label: <Link href="/analytics/inner">Inner Analytics</Link>,
        title: 'Inner Analytics',
      },
    ],
  },
  REPORTS: {
    key: '/reports',
    icon: <ContainerOutlined />,
    label: <Link href="/reports">Reports</Link>,
    title: 'Reports',
    children: [
      {
        key: '/reports/add',
        label: <Link href="/reports/add">Add Report</Link>,
        title: 'Add Report',
      },
    ],
  },
  MESSAGES: {
    key: '/messages',
    icon: <MailOutlined />,
    label: <Link href="/messages">Messages</Link>,
    title: 'Messages',
    children: [
      {
        key: '/messages/inner',
        label: <Link href="/messages/inner">Inner Messages</Link>,
        title: 'Inner Messages',
      },
    ],
  },
  SETTINGS: {
    key: '/settings',
    icon: <AppstoreOutlined />,
    label: <Link href="/settings">Settings</Link>,
    title: 'Settings',
    children: [
      {
        key: '/settings/inner',
        label: <Link href="/settings/inner">Inner Settings</Link>,
        title: 'Inner Settings',
      },
    ],
  },
};
