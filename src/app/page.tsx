import { Container, Title, Text, SimpleGrid, Card, Button, Box } from '@mantine/core';
import Link from 'next/link';

export default function Home() {
  const companies = [
    'Jsons Foundry',
    'Western Precicast I', 
    'Western Precicast II',
    'Jsons Engineering',
    'Jsons Precision',
    'Jsons Industries'
  ];

  return (
    <Box
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e3a8a 0%, #374151 100%)',
        color: 'white'
      }}
    >
      <Container size="lg" py={80}>
        <Box ta="center">
          <Title order={1} size={60} fw={700} mb={24}>
            Jsons Group
          </Title>
          <Text size="xl" c="gray.3" mb={48} maw={800} mx="auto">
            Leading metal casting & manufacturing conglomerate with 6 specialized companies
            delivering precision solutions across industries.
          </Text>
          
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg" mb={48}>
            {companies.map((company) => (
              <Card key={company} p="lg" radius="md" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
                <Title order={3} size="lg" c="white" mb={8}>
                  {company}
                </Title>
                <Text size="sm" c="gray.3">
                  Specialized manufacturing solutions
                </Text>
              </Card>
            ))}
          </SimpleGrid>
          
          <Button
            component={Link}
            href="/admin"
            size="lg"
            radius="md"
            variant="filled"
            color="blue"
          >
            Access CMS Dashboard
          </Button>
        </Box>
      </Container>
    </Box>
  );
}