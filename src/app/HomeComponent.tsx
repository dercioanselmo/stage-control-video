'use client';

import { useState, useEffect } from 'react';
import { Container } from '@mui/material';

const colors = {
  background: '#000000',
  textPrimary: '#fff',
  textSecondary: '#ccc',
  grey: '#808080', // Grey for the div
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
          width: '100%',
          height: '100%',
          maxWidth: '1920px', // Cap at original video width
          maxHeight: '1080px', // Cap at original video height
          aspectRatio: '16 / 9', // Force 16:9 ratio
          backgroundColor: colors.grey,
          objectFit: 'contain', // For consistency (though not needed for div)
          display: 'block',
        }}
      />
    </Container>
  );
}