'use client';

import Header from './components/Header';
import HomeComponent from './HomeComponent';
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
      <HomeComponent />
      {children}
    </div>
  );
}