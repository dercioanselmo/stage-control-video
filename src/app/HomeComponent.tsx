'use client';

import { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';

const colors = {
  background: '#000000',
  textPrimary: '#fff',
  textSecondary: '#ccc',
} as const;

export default function HomeComponent() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
        padding: { xs: 0, sm: 0 }, // Remove padding to maximize space
        backgroundColor: colors.background,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        width: '100vw', // Full viewport width
        height: 'calc(100dvh - 70px)', // Exact remaining height
      }}
    >
      <Box
        component="video"
        src="https://dmtspaceto.s3.me-central-1.amazonaws.com/Smart+Mobility+Analytics+Framework.mp4"
        controls
        autoPlay
        muted
        loop
        sx={{
          width: '100% !important', // Force width scaling
          height: '100% !important', // Force height scaling
          maxWidth: '100%', // Cap at original width
          maxHeight: '100%', // Cap at original height
          objectFit: 'contain', // Scale proportionally
          border: 0,
          display: 'block',
        }}
      />
    </Container>
  );
}