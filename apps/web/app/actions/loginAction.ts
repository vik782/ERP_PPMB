'use server';

import axiosInstance from '@web/utils/axios';
import { cookies } from 'next/headers';

export async function loginAction(username: string, password: string) {
  try {
    const response = await axiosInstance.post('/auth/login', { username, password });
    const data = response.data;

    // Set the token in cookies using next/headers
    cookies().set('token', data.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 30, // 30 seconds for testing, change this to 60 * 60 * 24 in prod
      path: '/',
    });

    return data.user;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
}

