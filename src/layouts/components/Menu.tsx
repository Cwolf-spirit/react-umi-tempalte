import routes from '@/routes/Menu';
import { IconMap } from '@/routes/MenuIconMap';
import { findRoutePath } from '@/utils';
import Icon from '@ant-design/icons/lib/components/Icon';
import { Menu, MenuProps } from 'antd';
import { useCallback, useMemo } from 'react';
import { history, useLocation } from 'umi';

type MenuItem = Required<MenuProps>['items'][number];

const MenuList = () => {
  const location = useLocation();

  // 将菜单配置转换为菜单项
  const generateMenuItem = useCallback((routes: any[]): MenuItem[] => {
    return routes.map((route) => {
      if (route.hideChildrenInMenu) return null;
      if (route.routes) {
        return {
          key: route.path,
          icon: route?.icon ? (
            <img src={IconMap[route.icon]} width={14} height={14} />
          ) : null,
          label: route.name,
          children: generateMenuItem(route.routes),
        };
      }
      console.log(route.icon);
      return {
        key: route.path,
        icon: route?.icon ? (
          <img src={IconMap[route.icon]} width={14} height={14} />
        ) : null,
        label: route.name,
      };
    });
  }, []);

  const MenuItems = useMemo(() => generateMenuItem(routes), [generateMenuItem]);

  const defaultOpenKeys = useMemo(() => {
    const keys = (findRoutePath(MenuItems, location.pathname) || []).map(
      (v: any) => v.key,
    );
    keys.length > 1 && keys.pop();
    return keys;
  }, [location.pathname, MenuItems]);

  const handleMenuSelect = useCallback((e: any) => {
    history.push(e.key);
  }, []);

  return (
    <Menu
      mode="inline"
      theme="dark"
      defaultOpenKeys={defaultOpenKeys}
      selectedKeys={[location.pathname]}
      onSelect={handleMenuSelect}
      items={MenuItems}
    />
  );
};

export default MenuList;
