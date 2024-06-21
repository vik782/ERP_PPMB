import React from 'react';
import { ConfigProvider } from 'antd';
import { designTokens } from '../styles/designTokens';
import type { Preview } from '@storybook/react';

// Define the decorator with a proper type
/*const withAntdTheme = (Story: React.FC) => (
  <ConfigProvider
    theme={{
      token: designTokens,
    }}
  >
    <Story />
  </ConfigProvider>
);
*/
// Define the preview configuration with the decorator
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: true,
    },
    tags: ['autodocs'],
  },
  //decorators: [withAntdTheme],
};

export default preview;

