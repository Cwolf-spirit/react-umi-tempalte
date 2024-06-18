import zhCN from 'antd/locale/zh_CN';
import { defineConfig } from 'umi';
import routes from '../src/routes';

const CDN = 'https://tscdn.xyuqing.com/tarsocial/gravity/product/';

export default defineConfig({
  npmClient: 'yarn',
  outputPath: 'dist',
  publicPath: CDN,
  hash: true,
  routes,
  define: {
    env: 'product',
    requestHost: 'https://apigravity.xyuqing.com',
  },
  antd: {
    dark: false,
    configProvider: {
      locale: zhCN,
      theme: {
        token: {
          colorPrimary: '#0033EE',
        },
      },
    },
  },
  cssLoaderModules: {
    // 配置驼峰式使用
    exportLocalsConvention: 'camelCase',
  },
  model: {},
  plugins: [
    '@umijs/max-plugin-openapi',
    '@umijs/plugins/dist/antd',
    '@umijs/plugins/dist/model',
  ],
  openAPI: [
    {
      requestLibPath: "import request from '@/services';", // 请求方式路径（自定义）
      // requestLibPath: "import request from 'umi-request'", // 请求方式路径（框架封装）
      schemaPath: 'https://t-apigravity.xyuqing.com/g-swagger/are1fcs2eaa.json', // 线上 swagger 接口地址
      // schemaPath: 'http://192.168.50.78/g-swagger/are1fcs2eaa.json', // 后端本地swagger接口地址
      // schemaPath: join(__dirname, 'oneapi.json'), // 支持从本地文件导入
      mock: false, // 是否支持mock
      projectName: 'front', // 生成文件件名
      // apiPrefix: 'API_PREFIX',
    },
  ],
  // proxy: {
  //   '/api': {
  //     'target': 'http://jsonplaceholder.typicode.com/',
  //     'changeOrigin': true,
  //     'pathRewrite': { '^/api' : '' },
  //   },
  // },
});
