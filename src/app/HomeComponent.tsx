'use client';

import { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';

// Define color constants
const colors = {
  background: '#0F0F0F',
  textPrimary: '#fff',
  textSecondary: '#ccc',
} as const;

export default function HomeComponent() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Run only on client-side after mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer); // Cleanup
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Container
      maxWidth={false}
      sx={{
        mt: 0,
        minHeight: 'calc(100vh - 70px)',
        padding: { xs: 1, sm: 3 },
        color: colors.textPrimary,
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        component="iframe"
        src="https://dmtspaceto.s3.me-central-1.amazonaws.com/Smart+Mobility+Analytics+Framework.mp4"
        title="Online Olayer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        sx={{
          width: '100%',
          height: '100%',
          flexGrow: 1,
          border: 0,
        }}
      />
    </Container>
  );
}