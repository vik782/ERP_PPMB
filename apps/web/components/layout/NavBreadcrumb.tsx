/**
 * This is the navigation in the top above the content to show in which section you are in
 * This makes clickable links, continuous dev as we work on the modules for navigation
 */
'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Breadcrumb } from 'antd';
import { MODULES } from './ModuleConst';

const findModuleByPath = (path, modules) => {
    for (const key in modules) {
      const module = modules[key];
      if (module.key === path) {
        return module;
      }
      if (module.children) {
        const childModule = module.children.find(child => child.key === path);
        if (childModule) {
          return childModule;
        }
      }
    }
    return null;
  };

  const generateBreadcrumbItems = (pathname: string) => {
    const pathSnippets = pathname.split('/').filter(i => i);
    const breadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      const module = findModuleByPath(url, MODULES);
      return {
        title: module ? module.label : 'Unknown',
      };
    });
  
    return breadcrumbItems;
  };

const NavBreadcrumb: React.FC = () => {
  const pathname = usePathname();
  const [breadcrumbItems, setBreadcrumbItems] = useState([]);

  useEffect(() => {
    const items = generateBreadcrumbItems(pathname);
    setBreadcrumbItems(items);
  }, [pathname]);

  return (
    <Breadcrumb 
    style={{ padding: '10px'}}
    items={breadcrumbItems} 
    />
  );
};

export default NavBreadcrumb;



