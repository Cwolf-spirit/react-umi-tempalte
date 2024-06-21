/* 
  菜单配置
    隐藏子菜单
    hideChildrenInMenu: true,
    隐藏自己和子菜单
    hideInMenu: true,
    展示顶部菜单信息
    showHeaderInfo: true,
    icon: 【字符串类型】 为了维护一个路由结构，config读取编译时无法获取本地资源，所以icon先用字符串存储，菜单栏渲染时再转换成图片类型
*/

export default [
  {
    path: '/index',
    name: '概览统计',
    component: '@/pages/Index',
    icon: 'shuzhuang',
    wrappers: ['@/wrappers/auth'],
    showHeaderInfo: true,
  },
];
