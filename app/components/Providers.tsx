"use client";

import { SessionProvider } from "next-auth/react";
import { GeistProvider, CssBaseline } from "@geist-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <GeistProvider>
        <CssBaseline />
        {children}
      </GeistProvider>
    </SessionProvider>
  );
}
