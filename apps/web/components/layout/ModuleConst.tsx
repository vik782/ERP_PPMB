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
  LELANG: {
    key: '/lelang',
    icon: <DesktopOutlined />,
    label: <Link href="/lelang">Lelang</Link>,
    title: 'Lelang',
    children: [
      {
        key: '/lelang/list',
        label: <Link href="/lelang/list">List Dokumen Lelang</Link>,
        title: 'List Dokumen Lelang',
      },
    ],
  },
  RFQ: {
    key: '/rfq',
    icon: <ContainerOutlined />,
    label: <Link href="/rfq">Request For Quotation</Link>,
    title: 'Request For Quotation',
  },
  QUOTATION: {
    key: '/quotation',
    icon: <MailOutlined />,
    label: <Link href="/quotation">Quotation</Link>,
    title: 'Quotation',
  },
  PO: {
    key: '/po',
    icon: <AppstoreOutlined />,
    label: <Link href="/po">Pre-Order</Link>,
    title: 'Pre-Order',
  },
};
