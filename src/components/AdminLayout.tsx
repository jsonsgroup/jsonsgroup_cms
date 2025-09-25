'use client';

import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AppShell,
  Text,
  Burger,
  Group,
  ActionIcon,
  Title,
  NavLink,
  Stack,
  Box,
  rem
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconHome,
  IconFileText,
  IconBox,
  IconPhoto,
  IconUsers,
  IconSettings,
  IconLogout
} from '@tabler/icons-react';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: IconHome },
  { name: 'Pages', href: '/admin/pages', icon: IconFileText },
  { name: 'Products', href: '/admin/products', icon: IconBox },
  { name: 'Media', href: '/admin/media', icon: IconPhoto },
  { name: 'Users', href: '/admin/users', icon: IconUsers },
  { name: 'Settings', href: '/admin/settings', icon: IconSettings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  const { data: session } = useSession();
  const pathname = usePathname();

  const currentPage = navigation.find(item => item.href === pathname)?.name || 'Dashboard';

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Title order={2} size="h3">
              {currentPage}
            </Title>
          </Group>
          
          <Group>
            <Text size="sm" c="dimmed">
              {session?.user?.name}
            </Text>
            <ActionIcon
              variant="subtle"
              color="gray"
              onClick={() => signOut()}
              title="Sign out"
            >
              <IconLogout size={18} />
            </ActionIcon>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Box mb="lg">
          <Title order={3} c="blue" size="h4">
            Jsons Group CMS
          </Title>
        </Box>
        
        <Stack gap={0}>
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <NavLink
                key={item.name}
                component={Link}
                href={item.href}
                label={item.name}
                leftSection={<item.icon size={20} />}
                active={isActive}
                onClick={() => toggle()}
              />
            );
          })}
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}