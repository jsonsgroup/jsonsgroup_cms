'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import {
  Stack,
  Card,
  Title,
  Text,
  TextInput,
  Select,
  Button,
  Group,
  Grid
} from '@mantine/core';
import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import LinkExtension from '@tiptap/extension-link';

interface PageEditorProps {
  pageId?: string;
  initialData?: {
    title?: string;
    slug?: string;
    content?: string;
    company?: string;
    status?: 'draft' | 'published';
  };
}

const companies = [
  'Jsons Foundry',
  'Western Precicast I',
  'Western Precicast II',
  'Jsons Engineering',
  'Jsons Precision',
  'Jsons Industries'
];

export default function PageEditor({ pageId, initialData }: PageEditorProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const editor = useEditor({
    extensions: [StarterKit, LinkExtension],
    content: initialData?.content || '',
  });

  const form = useForm({
    initialValues: {
      title: initialData?.title || '',
      slug: initialData?.slug || '',
      company: initialData?.company || companies[0],
      status: initialData?.status || 'draft'
    },
    validate: {
      title: (value) => (value.length < 1 ? 'Title is required' : null),
      slug: (value) => (value.length < 1 ? 'Slug is required' : null)
    }
  });

  useEffect(() => {
    if (form.values.title && !pageId) {
      const slug = form.values.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      form.setFieldValue('slug', slug);
    }
  }, [form.values.title, pageId]);

  const handleSubmit = async (values: typeof form.values) => {
    if (!editor) return;
    
    setIsLoading(true);
    
    try {
      const url = pageId ? `/api/pages/${pageId}` : '/api/pages';
      const method = pageId ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          content: editor.getHTML()
        })
      });

      if (response.ok) {
        notifications.show({
          title: 'Success',
          message: pageId ? 'Page updated successfully' : 'Page created successfully',
          color: 'green'
        });
        router.push('/admin/pages');
      } else {
        notifications.show({
          title: 'Error',
          message: 'Failed to save page',
          color: 'red'
        });
      }
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: 'An error occurred',
        color: 'red'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="lg">
        <Card withBorder padding="lg">
          <Stack gap="md">
            <div>
              <Title order={3}>Page Information</Title>
              <Text size="sm" c="dimmed">Basic information about the page.</Text>
            </div>
            
            <Grid>
              <Grid.Col span={12}>
                <TextInput
                  label="Title"
                  placeholder="Enter page title"
                  required
                  {...form.getInputProps('title')}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  label="Slug"
                  placeholder="page-url-slug"
                  required
                  {...form.getInputProps('slug')}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  label="Company"
                  data={companies}
                  required
                  {...form.getInputProps('company')}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  label="Status"
                  data={[
                    { value: 'draft', label: 'Draft' },
                    { value: 'published', label: 'Published' }
                  ]}
                  required
                  {...form.getInputProps('status')}
                />
              </Grid.Col>
            </Grid>
          </Stack>
        </Card>

        <Card withBorder padding="lg">
          <Stack gap="md">
            <div>
              <Title order={3}>Content</Title>
              <Text size="sm" c="dimmed">The main content of the page.</Text>
            </div>
            
            <RichTextEditor editor={editor}>
              <RichTextEditor.Toolbar sticky stickyOffset={60}>
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Bold />
                  <RichTextEditor.Italic />
                  <RichTextEditor.Underline />
                  <RichTextEditor.Strikethrough />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.H1 />
                  <RichTextEditor.H2 />
                  <RichTextEditor.H3 />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.BulletList />
                  <RichTextEditor.OrderedList />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Link />
                  <RichTextEditor.Unlink />
                </RichTextEditor.ControlsGroup>
              </RichTextEditor.Toolbar>

              <RichTextEditor.Content />
            </RichTextEditor>
          </Stack>
        </Card>

        <Group justify="flex-end">
          <Button
            variant="default"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            loading={isLoading}
          >
            {pageId ? 'Update Page' : 'Create Page'}
          </Button>
        </Group>
      </Stack>
    </form>
  );
}