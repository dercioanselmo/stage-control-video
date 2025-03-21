'use client';

import Header from './components/Header';
import HomeComponent from './HomeComponent';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
      <div style={{ minHeight: '100vh' }}>
        <Header />
        <HomeComponent/>{children}
      </div>
  );
}