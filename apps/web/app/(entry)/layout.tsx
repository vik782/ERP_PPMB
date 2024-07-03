// components/layout.tsx
import React from 'react';
import { metadata } from '../metadata';

const LoginLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
    <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </head>
    <body>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f2f5' }}>
          {children}
      </div>

    </body>
    </html>
  );
};

export default LoginLayout;