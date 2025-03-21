'use client';

import Header from './components/Header';
import HomeComponent from './HomeComponent';
export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        height: '100dvh', // Direct viewport height
        width: '100vw', // Direct viewport width
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <HomeComponent />
      {children}
    </div>
  );
}