"use client"; // This marks the component as a client component
import { Metadata } from 'next'; // Correct import path for Metadata
import "./globals.css";
import Navbar from "../components/Navbar";
import AuthProvider from "../components/AuthProvider";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme"; // Correct import for theme
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "MaxPrd",
  description: "Created by student of SPŠE Zochova 9, Bratislava",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session } = useSession();
  const router = useRouter();

  // Redirect authenticated users away from the public section of the app
  useEffect(() => {
    if (session) {
      router.push("/"); // Redirect to the homepage if the user is authenticated
    }
  }, [session, router]);

  return (
    <html lang="sk">
      <body>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
