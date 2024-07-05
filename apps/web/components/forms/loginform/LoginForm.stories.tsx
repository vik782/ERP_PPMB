import type { Meta, StoryObj } from '@storybook/react';
import type { FormProps } from 'antd';
import LoginForm, { LoginFieldType } from './LoginForm';

const meta = {
  title: 'Forms/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

const onFinish: FormProps<LoginFieldType>['onFinish'] = () => {

};

const onFinishFailed: FormProps<LoginFieldType>['onFinishFailed'] = () => {
};

const handleForgotPassword = () => {
};

export const Default: Story = {
  args: {
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    onForgotPassword: handleForgotPassword,
    hasError: false,
    loading: false,
  }
};
