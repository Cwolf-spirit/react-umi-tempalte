import routes from '@/routes/Menu';
import { webLogout } from '@/services/front/yonghuguanli';
import { findRoutePath } from '@/utils';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useRequest } from 'ahooks';
import {
  Avatar,
  Button,
  Layout,
  Popover,
  Row,
  Space,
  notification,
} from 'antd';
import { useCallback, useMemo } from 'react';
import { useLocation, useModel, useRouteProps } from 'umi';

const { Header } = Layout;

const HeaderWrapper = ({
  collapsed,
  setCollapsed,
  colorBgContainer,
}: {
  collapsed: boolean;
  setCollapsed: (...arg: any) => void;
  colorBgContainer: string;
}) => {
  const { userInfo, handleLogout, logoutLoading } = useModel('useAuth');
  const routeProps = useRouteProps();
  const location = useLocation();

  const targetRoutePaths = useMemo(() => {
    return findRoutePath(routes, location.pathname, [], 'path', 'routes');
  }, [location.pathname]);

  return (
    <Header style={{ padding: '0 16px', background: colorBgContainer }}>
      <Row justify="space-between" align="middle">
        <div>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          {routeProps.showHeaderInfo && (
            <span style={{ fontSize: '16px', color: '#182067' }}>
              {targetRoutePaths?.[targetRoutePaths.length - 1]?.name}
            </span>
          )}
        </div>
        <Popover
          placement="topRight"
          trigger="click"
          content={
            <Button
              danger
              type="link"
              loading={logoutLoading}
              onClick={handleLogout}
            >
              退出
            </Button>
          }
        >
          <Space>
            <span style={{ color: '#9294AE' }}>{userInfo?.nickname}</span>
            <Avatar size={30} icon={<UserOutlined />} />
          </Space>
        </Popover>
      </Row>
    </Header>
  );
};
export default HeaderWrapper;
