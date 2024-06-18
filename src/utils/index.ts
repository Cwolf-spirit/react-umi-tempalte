import { useAntdTable } from 'ahooks';
import dayjs from 'dayjs';

// 根据后端返回的数据结构重新改为符合 ahooks 的数据结构,并合并form数据传参
export const useTable = (service: any, options?: any) => {
  return useAntdTable(({ current, pageSize, sorter, filters }, formData) => {
    return service({
      page: current || 1,
      page_size: pageSize || 10,
      sort: sorter,
      filters: filters,
      ...formData,
    }).then((res: any) => ({
      total: res?.data.total,
      list: res?.data.list,
    }));
  }, options);
};

// 递归找到目标向，并将父级添加到寻找路径中
export const findRoutePath = (
  routes: any[],
  targetPath: string,
  pathStack: any[] = [],
  key: string = 'key',
  children: string = 'children',
) => {
  for (const route of routes) {
    if (route?.[key] === targetPath) {
      return [...pathStack, route];
    }
    if (route?.[children]) {
      const foundPath: any = findRoutePath(
        route?.[children],
        targetPath,
        [...pathStack, route],
        key,
        children,
      );
      if (foundPath) {
        return foundPath;
      }
    }
  }
  return null;
};

// 递归寻找所有匹配项
export function findTargetNodes(
  data: any[],
  targetCodes: any[],
  key = 'code',
  children = 'children',
) {
  let result: any[] = [];

  function recurse(nodes: any[], targets: any[]) {
    nodes.forEach((node) => {
      if (targets.includes(node[key])) {
        result.push(node);
      }
      if (node[children] && node[children].length > 0) {
        recurse(node[children], targets);
      }
    });
  }

  recurse(data, targetCodes);
  return result;
}
