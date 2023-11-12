'use client';

import { DSProvider } from "@jobstack/ds";
import { Roboto } from "next/font/google";
import { theme } from "./theme";

const roboto = Roboto({ weight: ["400", "500"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <DSProvider theme={theme}>
        <body className={roboto.className}>{children}</body>
      </DSProvider>
    </html>
  );
}
