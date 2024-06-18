# 后管系统

### 项目框架

umi4 + antd5 + Typescript

### 项目启动

```
yarn && yarn start 测试环境
yarn openapi 生成openapi
```
### 发版流程
1. main主分支
2. 每次新需求，基于main分支创建feature分支
3. feature分支开发完成后，feature分支合并到dev分支提测
4. dev分支提测完成后，feature分支合并到uat分支发版提测
5. uat分支发版完成后，feature分支合并到main分支发版

### 路由

动态路由，由接口返回。根据在 src/routes/index.ts 下定义的路由 CODE 和 ROUTES 做映射。
路由配置可以在权限管理中添加；添加标准：导航栏要展示的类型为菜单，通过地址栏可以访问的页面为路由，页面中按钮的权限则为按钮。
添加完成后需要将对应角色添加上相应的资源即可。
**type：1=菜单，2=路由，0=按钮**

### 接口服务

由 openapi 根据 swagger 自动生成 service 和 typescript 类型定义，**后端 swagger 定义需规范**

- 全局 namespace
  - WEBAPI（根据后端 web 服务生成）
  - API（根据后端其他底层服务生成）
- service 使用
  - 通过 import 引入服务"@/services/xxx/xxx"
  - _（建议）通过 ahooks 使用：useRequest(service)_

### CRUD 页面生成

- **yarn g:page --name _\<xxx>_**

改动文件目录结构：

```
- src
  - pages
    - <xxx>
      - List              列表页面
        - components
          - Form          新增/编辑表单
          - FormDrawer    嵌了Form的抽屉
        - hooks.tsx       定义查询条件、表格列、服务调用等钩子函数  // todo：定义Services接口服务
        - index.tsx       入口文件
  - routes
    - index.tsx           自动引入路由CODE和ROUTES映射关系。// todo：在权限管理中添加资源
```

