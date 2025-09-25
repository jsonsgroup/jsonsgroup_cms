'use client';

import { SessionProvider } from 'next-auth/react';
import { MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';

const theme = createTheme({
  primaryColor: 'blue',
  colors: {
    'industrial-blue': [
      '#e6f2ff',
      '#b3d9ff',
      '#80bfff',
      '#4da6ff',
      '#1a8cff',
      '#0073e6',
      '#005bb3',
      '#004280',
      '#002a4d',
      '#00111a'
    ],
  },
  fontFamily: 'system-ui, sans-serif',
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <ModalsProvider>
        <SessionProvider>
          {children}
        </SessionProvider>
      </ModalsProvider>
    </MantineProvider>
  );
}