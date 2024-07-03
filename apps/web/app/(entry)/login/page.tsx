/**
 * Login page handles the submission and validation of login creds.
 * will redirect to dashboard depending on server response.
 * Uses component LoginForm.
 */
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { FormProps } from 'antd';
import LoginForm, { LoginFieldType } from '@web/components/forms/loginform/LoginForm';

const NEXT_PUBLIC_NESTJS_SERVER = process.env.NEXT_PUBLIC_NESTJS_SERVER;

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onFinish: FormProps<LoginFieldType>['onFinish'] = async (values) => {
    console.log(`${NEXT_PUBLIC_NESTJS_SERVER}/login`);

    console.log('Success:', values);

    // Simulate login API call
    const response = await fetch(`${NEXT_PUBLIC_NESTJS_SERVER}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      // Store token or any user data as needed
      localStorage.setItem('token', data.token);

      if (values.remember) {
        localStorage.setItem("username", values.username!);
        localStorage.setItem("password", values.password!);
      }

      // Redirect to dashboard
      router.push('/dashboard');
    } else {
      const errorData = await response.json();
      // Handle login error
      setErrorMessage(errorData.message || 'Login failed');
    }
  };

  const onFinishFailed: FormProps<LoginFieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleForgotPassword = () => {
    console.log("Handle forgot password logic here");
    // You can navigate to a forgot password page or open a modal
    // router.push('/forgot-password'); // Example navigation
  };

  return (
    <LoginForm
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onForgotPassword={handleForgotPassword}
      errorMessage={errorMessage}
    />
  );
};

export default LoginPage;



