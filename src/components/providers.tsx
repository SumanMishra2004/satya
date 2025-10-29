"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {children}

      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "rgba(255, 255, 255, 0.1)", // translucent
            color: "#000000",
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "16px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
            padding: "12px 18px",
            textAlign: "center",
            minWidth: "280px",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#ffffff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#ffffff",
            },
          },
        }}
      />
    </SessionProvider>
  );
}
