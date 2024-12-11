"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import Typography from "@mui/material/Typography";

export default function HomeLayout({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();


  if (status === "loading") {
    // Show a loading message while checking session status
    return <Typography>Loading...</Typography>;
  }

  if (status === "unauthenticated") {
    // If unauthenticated, display a sign-in message (fallback for redirect issues)
    return (
      <div>
        <Typography>You need to sign in to access this content.</Typography>
      </div>
    );
  }

  // Use `session` to display user-specific content for authenticated users
  return (
    <>
      <Typography>Welcome, {session?.user?.name || "User"}!</Typography>
      {children}
    </>
  );
}
