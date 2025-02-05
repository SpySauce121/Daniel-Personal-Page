// Layout.tsx
"use client";

import "./globals.css";
import Navbar from "../components/Navbar";
import AuthProvider from "../components/AuthProvider";
import ThemeProvider from "../components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sk" className="scroll-smooth">
      <body className="bg-background text-on-background">
        <AuthProvider>
          <ThemeProvider>
            <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
              <main style={{ flexGrow: 1 }}>
                {children}
              </main>
            </div>
          </ThemeProvider>
          <Navbar />
        </AuthProvider>
      </body>
    </html>
  );
}

