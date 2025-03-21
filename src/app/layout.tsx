import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ['400', '700'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stage Control",
  description: "Stage Control",
  icons: {
    icon: "/Logo.png", // Use PNG directly
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} 
        style={{
          margin: 0,
          padding: 0,
          height: '100dvh', // Full dynamic viewport height
          overflow: 'hidden', // Prevent scrolling
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}