import { LOGIN_PATH, TOKEN } from '@/constant';
import { Navigate, Outlet, useLocation, useModel } from 'umi';

export default () => {
  const token = sessionStorage.getItem(TOKEN);
  const path = useLocation();
  if (token) {
    if (path.pathname === LOGIN_PATH) {
      return <Navigate to="/" />;
    }
    return <Outlet />;
  } else {
    if (path.pathname === LOGIN_PATH) {
      return <Outlet />;
    }
    return <Navigate to={LOGIN_PATH} />;
  }
};
