import MENU_ROUTES from './Menu';

export const BASE_ROUTES = [
  {
    path: '/login',
    component: '@/pages/Login',
    wrappers: ['@/wrappers/auth'],
    layout: false,
  },
  { path: '/*', component: '@/pages/404', layout: false },
];

export const ALL_ROUTES = [...BASE_ROUTES, ...MENU_ROUTES];

export default ALL_ROUTES;
