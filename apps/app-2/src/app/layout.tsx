'use client';

import { DSProvider } from "@jobstack/ds";
import { Inter } from "next/font/google";
import { theme } from "./theme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <DSProvider theme={theme}>
        <body className={inter.className}>{children}</body>
      </DSProvider>
    </html>
  );
}
