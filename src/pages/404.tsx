import { Button, Result } from 'antd';

const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="对不起，你访问的页面不存在哦！"
      extra={
        <Button onClick={() => window.history.back()} type="primary">
          返回首页
        </Button>
      }
    />
  );
};

export default NotFound;
