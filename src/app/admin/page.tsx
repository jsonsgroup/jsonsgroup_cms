'use client';

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import {
  SimpleGrid,
  Card,
  Text,
  Group,
  ThemeIcon,
  Title,
  Stack,
  Button,
  Indicator,
  Box,
  Skeleton
} from '@mantine/core';
import {
  IconFileText,
  IconBox,
  IconPhoto,
  IconUsers,
  IconPlus,
  IconUpload
} from '@tabler/icons-react';
import Link from 'next/link';

interface Stats {
  pages: number;
  products: number;
  media: number;
  users: number;
}

export default function AdminDashboard() {
  const { data: session } = useSession();
  const [stats, setStats] = useState<Stats>({ pages: 0, products: 0, media: 0, users: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats');
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    { name: 'Total Pages', value: stats.pages, icon: IconFileText, color: 'blue' },
    { name: 'Total Products', value: stats.products, icon: IconBox, color: 'green' },
    { name: 'Media Files', value: stats.media, icon: IconPhoto, color: 'violet' },
    { name: 'Users', value: stats.users, icon: IconUsers, color: 'orange' },
  ];

  return (
    <Stack gap="xl">
      <Box>
        <Title order={2} mb={8}>
          Welcome back, {session?.user?.name}!
        </Title>
        <Text c="dimmed">
          Company: {session?.user?.company} | Role: {session?.user?.role}
        </Text>
      </Box>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
        {statCards.map((card) => (
          <Card key={card.name} withBorder padding="lg" radius="md">
            <Group justify="space-between">
              <div>
                <Text c="dimmed" size="sm" fw={500}>
                  {card.name}
                </Text>
                {loading ? (
                  <Skeleton height={28} width={40} />
                ) : (
                  <Text fw={700} size="xl">
                    {card.value}
                  </Text>
                )}
              </div>
              <ThemeIcon color={card.color} variant="light" size={40} radius="md">
                <card.icon size={24} />
              </ThemeIcon>
            </Group>
          </Card>
        ))}
      </SimpleGrid>

      <SimpleGrid cols={{ base: 1, lg: 2 }}>
        <Card withBorder padding="lg" radius="md">
          <Title order={3} mb="md">
            Recent Activity
          </Title>
          <Stack gap="sm">
            <Group gap="sm">
              <Indicator color="blue" size={8} />
              <Text size="sm" c="dimmed">
                Welcome to Jsons Group CMS
              </Text>
            </Group>
            <Group gap="sm">
              <Indicator color="green" size={8} />
              <Text size="sm" c="dimmed">
                System initialized successfully
              </Text>
            </Group>
          </Stack>
        </Card>

        <Card withBorder padding="lg" radius="md">
          <Title order={3} mb="md">
            Quick Actions
          </Title>
          <Stack gap="sm">
            <Button
              component={Link}
              href="/admin/pages/new"
              variant="light"
              leftSection={<IconPlus size={16} />}
              justify="flex-start"
            >
              Create New Page
            </Button>
            <Button
              component={Link}
              href="/admin/products/new"
              variant="light"
              leftSection={<IconBox size={16} />}
              justify="flex-start"
            >
              Add Product
            </Button>
            <Button
              component={Link}
              href="/admin/media"
              variant="light"
              leftSection={<IconUpload size={16} />}
              justify="flex-start"
            >
              Upload Media
            </Button>
          </Stack>
        </Card>
      </SimpleGrid>
    </Stack>
  );
}