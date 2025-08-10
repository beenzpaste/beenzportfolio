// components/PortfolioCard.tsx
import { Card, Image, Text, Badge, Group } from '@mantine/core';
import styles from '.../styles/CardProps.module.css';

interface PortfolioCardProps {
  title: string;
  subtitle?: string;
  date: string;
  imageUrl?: string;
}

export default function PortfolioCard({ title, subtitle, date, imageUrl }: PortfolioCardProps) {
  return (
    <Card shadow="md" padding="lg" radius="md" withBorder className={styles.card}>
      {imageUrl && (
        <Card.Section>
          <Image src={imageUrl} height={160} alt={title} className={styles.image} />
        </Card.Section>
      )}

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
        <Badge color="blue" variant="light">
          {new Date(date).getFullYear()}
        </Badge>
      </Group>

      <Text size="sm" c="dimmed" className={styles.subtitle} lineClamp={3}>
        {subtitle}
      </Text>
    </Card>
  );
}