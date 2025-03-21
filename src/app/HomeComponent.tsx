'use client';

import { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';

const colors = {
  background: '#000000', // Pure black
  textPrimary: '#fff',
  textSecondary: '#ccc',
} as const;

export default function HomeComponent() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Container
      maxWidth={false}
      sx={{
        mt: 0,
        minHeight: 'calc(100vh - 70px)',
        padding: { xs: 1, sm: 3 },
        backgroundColor: colors.background, 
        display: 'flex',
        justifyContent: 'center', // Center video horizontally
        alignItems: 'center', // Center video vertically
        flex: 1, // Fill remaining space after header
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
          maxWidth: '538px', // Max width
          maxHeight: '305px', // Max height
          width: '100%', // Scale down if screen is smaller
          height: 'auto', // Maintain aspect ratio
          border: 0,
          backgroundColor: 'transparent', 
          
        }}
      />
    </Container>
  );
}