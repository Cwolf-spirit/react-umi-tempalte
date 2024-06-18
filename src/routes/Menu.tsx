/* 
  菜单配置
    隐藏子菜单
    hideChildrenInMenu: true,
    隐藏自己和子菜单
    hideInMenu: true,
    展示顶部菜单信息
    showHeaderInfo: true,
*/
import {
  FolderOpenFilled,
  HddFilled,
  IdcardFilled,
  SignalFilled,
} from '@ant-design/icons/lib/icons';
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
  {
    path: '/option',
    name: '方案管理',
    wrappers: ['@/wrappers/auth'],
    showHeaderInfo: true,
    routes: [
      {
        path: '/option/',
        redirect: '/option/list',
        hideChildrenInMenu: true,
        wrappers: ['@/wrappers/auth'],
      },
      {
        path: '/option/list',
        name: '方案列表',
        icon: <FolderOpenFilled />,
        component: '@/pages/OptionManage',
        showHeaderInfo: true,
        wrappers: ['@/wrappers/auth'],
      },
      {
        path: '/option/config/:type/*',
        name: '新建方案',
        component: '@/pages/OptionManage/Config',
        showHeaderInfo: true,
        hideChildrenInMenu: true,
        wrappers: ['@/wrappers/auth'],
      },
      {
        path: '/option/config/view/:id',
        name: '查看方案配置',
        component: '@/pages/OptionManage/ViewConfig',
        showHeaderInfo: true,
        hideChildrenInMenu: true,
        wrappers: ['@/wrappers/auth'],
      },
      {
        path: '/option/sourceListConfig',
        name: '查看信源组配置',
        component: '@/pages/OptionManage/SourceListConfig',
        showHeaderInfo: true,
        hideChildrenInMenu: true,
        wrappers: ['@/wrappers/auth'],
      },
      {
        path: '/option/detail/:id',
        name: '查看明细',
        component: '@/pages/OptionManage/Detail',
        showHeaderInfo: true,
        hideChildrenInMenu: true,
        wrappers: ['@/wrappers/auth'],
      },
    ],
  },
  {
    path: '/source',
    name: '信源管理',
    wrappers: ['@/wrappers/auth'],
    showHeaderInfo: true,
    routes: [
      {
        path: '/source/',
        redirect: '/source/list',
        hideChildrenInMenu: true,
        wrappers: ['@/wrappers/auth'],
      },
      {
        path: '/source/list',
        name: '信源列表',
        icon: <HddFilled />,
        component: '@/pages/SourceManage',
        showHeaderInfo: true,
        wrappers: ['@/wrappers/auth'],
      },
      {
        path: '/source/detail/:id',
        name: '查看明细',
        component: '@/pages/SourceManage/Detail',
        showHeaderInfo: true,
        hideChildrenInMenu: true,
        wrappers: ['@/wrappers/auth'],
      },
    ],
  },
  {
    path: '/person',
    name: '个人中心',
    component: '@/pages/Person',
    icon: <IdcardFilled />,
    wrappers: ['@/wrappers/auth'],
    showHeaderInfo: true,
  },
];
