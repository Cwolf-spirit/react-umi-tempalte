import { WebLogin } from '@/services/front/yonghuguanli';
import { LockOutlined, UserOutlined } from '@ant-design/icons/lib/icons';
import { useRequest } from 'ahooks';
import { Button, Form, Input, notification } from 'antd';
import React, { useCallback } from 'react';
import { history, useModel } from 'umi';

const LoginForm = () => {
  const { setLoginInfo } = useModel('useAuth');
  const [form] = Form.useForm();

  const { loading, runAsync: runLoginAsync } = useRequest(WebLogin, {
    manual: true,
  });

  const onFinish = useCallback(() => {
    form.validateFields().then((values: any) => {
      runLoginAsync({
        ...values,
      }).then((res) => {
        setLoginInfo(res.data);
        notification.success({ message: '登录成功' });
        history.push('/');
      });
    });
  }, [form, runLoginAsync, setLoginInfo]);

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      requiredMark="optional"
    >
      <Form.Item label="账号" name="username" rules={[{ required: true }]}>
        <Input prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item label="密码" name="password" rules={[{ required: true }]}>
        <Input.Password prefix={<LockOutlined />} />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 24 }}>
        <Button
          loading={loading}
          type="primary"
          htmlType="submit"
          style={{ width: '100%' }}
        >
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
