/* 
  菜单配置
    隐藏子菜单
    hideChildrenInMenu: true,
    隐藏自己和子菜单
    hideInMenu: true,
    展示顶部菜单信息
    showHeaderInfo: true,
*/
import { SignalFilled } from '@ant-design/icons/lib/icons';
import React from 'react';

export default [
  {
    path: '/index',
    name: '概览统计',
    component: '@/pages/Index',
    icon: <SignalFilled />,
    wrappers: ['@/wrappers/auth'],
    showHeaderInfo: true,
  },
];
