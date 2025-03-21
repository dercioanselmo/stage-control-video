'use client';

import { useState, useEffect } from 'react';
import { Container } from '@mui/material';

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
    <>
      <style jsx global>{`
        video {
          width: 100% !important;
          height: 100% !important;
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          display: block;
        }
      `}</style>
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
        <video
          src="https://dmtspaceto.s3.me-central-1.amazonaws.com/Smart+Mobility+Analytics+Framework.mp4"
          controls
          autoPlay
          muted
          loop
        />
      </Container>
    </>
  );
}