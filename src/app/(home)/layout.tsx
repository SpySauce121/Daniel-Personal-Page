"use client";

import { useSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";
import Typography from "@mui/material/Typography";
import NonAuthHomeView from "@/sections/NonAuthHomeView";

export default function HomeLayout({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Typography>Loading...</Typography>;
  }

  if (status === "unauthenticated") {
    return <NonAuthHomeView />; // Render the actual component
  }

  return (
    <>
      <Typography>Welcome, {session?.user?.name || "User"}!</Typography>
      {children}
    </>
  );
}
