'use client';

import Header from './components/Header';
import HomeComponent from './HomeComponent';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
      <div>
        <Header />
        <HomeComponent/>
        {children}
      </div>
  );
}