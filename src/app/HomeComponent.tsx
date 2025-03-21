'use client';

import { useState, useEffect } from 'react';
import { Container } from '@mui/material';

const colors = {
  background: '#000000',
  textPrimary: '#fff',
  textSecondary: '#ccc',
  grey: '#808080',
} as const;

export default function HomeComponent() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLandscape, setIsLandscape] = useState<boolean>(
    typeof window !== 'undefined' && window.innerWidth > window.innerHeight
  );

  // Hook to detect orientation changes
  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <div style={{ color: colors.textPrimary }}>Loading...</div>;

  return (
    <Container
      maxWidth={false}
      sx={{
        flex: 1,
        padding: { xs: 0, sm: 0 },
        backgroundColor: colors.background,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        width: '100vw',
        height: 'calc(100dvh - 70px)',
      }}
    >
      <div
        style={{
          aspectRatio: '16 / 9', // Strict 16:9 ratio
          maxHeight: 'calc(100dvh - 70px)', // Fit within available height
          maxWidth: '100vw', // Fit within viewport width
          width: isLandscape ? 'auto' : '100%', // Width full in portrait, auto in landscape
          height: isLandscape ? '100%' : 'auto', // Height full in landscape, auto in portrait
          backgroundColor: colors.grey,
          display: 'block',
        }}
      />
    </Container>
  );
}