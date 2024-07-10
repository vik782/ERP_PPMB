'use server';

import axiosInstance from '@web/utils/axios';
import { cookies } from 'next/headers';
import { AxiosError } from 'axios';

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
    if (error.isAxiosError) {
      const status = error.response?.status;
      switch (status) {
        case 400:
          throw new Error('Invalid request. Please check your input and try again.');
        case 401:
          throw new Error('Unauthorized. Please check your username and password.');
        case 404:
          throw new Error('User not found. Please check your username and try again.');
        case 500:
          throw new Error('Internal server error. Please try again later.');
        default:
          throw new Error('An unexpected error occurred. Please try again.');
      }
    } else {
      throw new Error('Network error. Please check your connection and try again.');
    }
  }
}
