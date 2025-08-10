// components/Navbar.tsx
import Link from 'next/link';
import { useMantineColorScheme, useComputedColorScheme, ActionIcon, Container, Group } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import cx from 'clsx';
import styles from './Navbar.module.css';

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
          <Link href="/">MySite</Link>
        </div>

        <Group gap="md" className={styles.links}>
          <Link className={styles.link} href="/about">About</Link>
          <Link className={styles.link} href="/projects">Projects</Link>
          <Link className={styles.link} href="/blog">Blog</Link>
          <Link className={styles.link} href="/contact">Contact</Link>
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