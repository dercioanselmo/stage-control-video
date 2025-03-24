'use client';

import Header from './components/Header';
import Rectangle from './components/Rectangle';
export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        height: '100dvh', 
        width: '100vw', 
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <div style={{ height: '100vh' }}>
        <Rectangle />
      </div>
      {children}
    </div>
  );
}