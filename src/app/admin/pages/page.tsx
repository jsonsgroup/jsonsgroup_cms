'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Table,
  Group,
  Text,
  ActionIcon,
  Badge,
  Button,
  Stack,
  Card,
  Skeleton,
  Center
} from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { IconPlus, IconEdit, IconTrash } from '@tabler/icons-react';
import dayjs from 'dayjs';

interface Page {
  _id: string;
  title: string;
  slug: string;
  status: 'draft' | 'published';
  company: string;
  updatedAt: string;
}

export default function PagesPage() {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const response = await fetch('/api/pages');
      if (response.ok) {
        const data = await response.json();
        setPages(data);
      }
    } catch (error) {
      console.error('Failed to fetch pages:', error);
    } finally {
      setLoading(false);
    }
  };

  const deletePage = async (id: string, title: string) => {
    modals.openConfirmModal({
      title: 'Delete Page',
      children: (
        <Text size="sm">
          Are you sure you want to delete "{title}"? This action cannot be undone.
        </Text>
      ),
      labels: { confirm: 'Delete', cancel: 'Cancel' },
      confirmProps: { color: 'red' },
      onConfirm: async () => {
        try {
          const response = await fetch(`/api/pages/${id}`, {
            method: 'DELETE',
          });
          
          if (response.ok) {
            setPages(pages.filter(page => page._id !== id));
            notifications.show({
              title: 'Success',
              message: 'Page deleted successfully',
              color: 'green'
            });
          }
        } catch (error) {
          notifications.show({
            title: 'Error',
            message: 'Failed to delete page',
            color: 'red'
          });
        }
      },
    });
  };

  if (loading) {
    return (
      <Stack>
        <Skeleton height={40} />
        <Card withBorder>
          <Stack>
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} height={60} />
            ))}
          </Stack>
        </Card>
      </Stack>
    );
  }

  const rows = pages.map((page) => (
    <Table.Tr key={page._id}>
      <Table.Td>
        <div>
          <Text fw={500}>{page.title}</Text>
          <Text size="sm" c="dimmed">/{page.slug}</Text>
        </div>
      </Table.Td>
      <Table.Td>
        <Badge
          color={page.status === 'published' ? 'green' : 'yellow'}
          variant="light"
        >
          {page.status}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Text size="sm">{page.company}</Text>
      </Table.Td>
      <Table.Td>
        <Text size="sm" c="dimmed">
          {dayjs(page.updatedAt).format('MMM D, YYYY')}
        </Text>
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <ActionIcon
            component={Link}
            href={`/admin/pages/${page._id}/edit`}
            variant="subtle"
            color="blue"
          >
            <IconEdit size={16} />
          </ActionIcon>
          <ActionIcon
            variant="subtle"
            color="red"
            onClick={() => deletePage(page._id, page.title)}
          >
            <IconTrash size={16} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack>
      <Group justify="space-between">
        <div>
          <Text c="dimmed">
            Manage your website pages and content.
          </Text>
        </div>
        <Button
          component={Link}
          href="/admin/pages/new"
          leftSection={<IconPlus size={16} />}
        >
          New Page
        </Button>
      </Group>

      <Card withBorder>
        {pages.length === 0 ? (
          <Center p="xl">
            <Stack align="center">
              <Text size="lg" fw={500}>No pages found</Text>
              <Text c="dimmed">Create your first page to get started.</Text>
            </Stack>
          </Center>
        ) : (
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Title</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th>Company</Table.Th>
                <Table.Th>Updated</Table.Th>
                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        )}
      </Card>
    </Stack>
  );
}