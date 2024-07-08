/**
 * Login page handles the submission and validation of login creds.
 * will redirect to dashboard depending on server response.
 * Uses component LoginForm.
 */
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';
import type { FormProps } from 'antd';
import LoginForm, { LoginFieldType } from '@web/components/forms/loginform/LoginForm';
import { loginAction } from '@web/app/actions/loginAction';

const LoginPage: React.FC = () => {
  const router = useRouter();

  // Define the mutation
  const mutation = useMutation(
    async (values: LoginFieldType) => {
      return loginAction(values.username!, values.password!);
    },
    {
      onSuccess: (user) => {
        // Store user data in local storage
        localStorage.setItem('user', JSON.stringify(user));
        router.push('/dashboard');
      },
    }
  );

  const onFinish: FormProps<LoginFieldType>['onFinish'] = (values) => {
    mutation.mutate(values);
  };

  const onFinishFailed: FormProps<LoginFieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleForgotPassword = () => {
    console.log('Handle forgot password logic here');
    // You can navigate to a forgot password page or open a modal
    // router.push('/forgot-password'); // Example navigation
  };

  return (
    <LoginForm
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onForgotPassword={handleForgotPassword}
      hasError={mutation.isError}
      loading={mutation.isLoading} // Pass loading state to LoginForm
    />
  );
};

export default LoginPage;




