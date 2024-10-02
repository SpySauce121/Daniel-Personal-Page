import type { Metadata } from "next";
import "./globals.css";
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: "NaPrdAplikacia",
  description: "Created by Pakoň224",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <main style={{ paddingBottom: '56px' }}>{children}</main> {/* Pridaj padding na hlavný obsah */}
        <Navbar /> {/* Navbar bude na spodku */}
      </body>
    </html>
  );
}
