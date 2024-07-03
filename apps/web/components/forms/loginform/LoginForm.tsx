import React from 'react';
import { Button, Checkbox, Form, Input, Card, Typography, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import type { FormProps } from 'antd';
import './LoginForm.css';

const { Title } = Typography;

export type LoginFieldType = {
  username?: string;
  password?: string;
  remember?: boolean;
};

interface LoginFormProps {
  /**
   * Function to handle successful form submission (successful validation)
   */
  onFinish: FormProps<LoginFieldType>['onFinish'];

  /**
   * Function to handle form submission failure (failed validation)
   */
  onFinishFailed: FormProps<LoginFieldType>['onFinishFailed'];

  /**
   * Function to handle forgot password
   */
  onForgotPassword: () => void;

  /**
   * Error message from server
   */
  errorMessage?: string | null;
}

const LoginForm: React.FC<LoginFormProps> = ({ onFinish, onFinishFailed, onForgotPassword, errorMessage }) => {
  return (
    <Card className="login-card">
      <div className="login-title">
        <Title level={2}>PPMB GROUP ERP</Title>
      </div>
      {errorMessage && (
        <Alert
          message="Login Failed"
          description={'Login credentials incorrect'}
          type="error"
          showIcon
          style={{ marginBottom: '16px' }}
        />
      )}
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item<LoginFieldType>
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item<LoginFieldType>
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item<LoginFieldType>
            name="remember"
            valuePropName="checked"
            noStyle
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Button type="link" onClick={onForgotPassword} className="login-form-forgot">
            Forgot password
          </Button>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginForm;


