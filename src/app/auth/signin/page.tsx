'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import {
  Container,
  Paper,
  Title,
  Text,
  TextInput,
  PasswordInput,
  Button,
  Stack,
  Center
} from '@mantine/core';

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  
  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 6 ? 'Password must be at least 6 characters' : null)
    }
  });

  const handleSubmit = async (values: typeof form.values) => {
    setIsLoading(true);
    
    try {
      const result = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false
      });

      if (result?.error) {
        notifications.show({
          title: 'Error',
          message: 'Invalid credentials',
          color: 'red'
        });
      } else {
        notifications.show({
          title: 'Success',
          message: 'Signed in successfully',
          color: 'green'
        });
        router.push('/admin');
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
    <Center mih="100vh" bg="gray.1">
      <Container size={420} my={40}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Title ta="center" mb={5}>
            Jsons Group CMS
          </Title>
          <Text c="dimmed" size="sm" ta="center" mb={30}>
            Sign in to your account
          </Text>

          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack>
              <TextInput
                label="Email"
                placeholder="your@email.com"
                required
                {...form.getInputProps('email')}
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                required
                {...form.getInputProps('password')}
              />
              <Button
                type="submit"
                fullWidth
                loading={isLoading}
                mt="md"
              >
                Sign in
              </Button>
            </Stack>
          </form>
        </Paper>
      </Container>
    </Center>
  );
}