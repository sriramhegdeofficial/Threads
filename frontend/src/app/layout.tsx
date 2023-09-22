"use client";

import { SnackbarProvider, useSnackbar } from "notistack";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome | Threads",
  description: "Social Network By sriram",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <SnackbarProvider maxSnack={1} autoHideDuration={3000}>
            {children}
          </SnackbarProvider>
        </body>
      </html>
    </>
  );
}
