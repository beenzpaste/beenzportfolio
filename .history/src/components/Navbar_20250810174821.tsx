// components/Navbar.tsx
import Link from 'next/link';
import { useMantineColorScheme, useComputedColorScheme, ActionIcon, Container, Group } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import cx from 'clsx';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');

  const toggleTheme = () => {
    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={styles.navbar}>
      <Container size="lg" className={styles.inner}>
        <div className={styles.logo}>
          <Link href="/">beenz pocket</Link>
        </div>

        <Group gap="lg" className={styles.links}>
          <Link className={styles.link} href="/about">about me</Link>
          <Link className={styles.link} href="/works">works</Link>
          <Link className={styles.link} href="/contact">contact</Link>
          <ActionIcon
            onClick={toggleTheme}
            variant="outline"
            aria-label="Toggle color scheme"
            className={styles.toggle}
          >
            {computedColorScheme === 'light' ? <IconMoon size={18} /> : <IconSun size={18} />}
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}