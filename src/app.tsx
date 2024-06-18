import Menu from '@/routes/Menu';
import { Navigate, defineApp } from 'umi';

import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';

dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.locale('zh-cn');

export default defineApp({
  patchClientRoutes: ({ routes }) => {
    routes.unshift({
      path: '/',
      element: <Navigate to={Menu[0].path} />,
    });
  },
});
