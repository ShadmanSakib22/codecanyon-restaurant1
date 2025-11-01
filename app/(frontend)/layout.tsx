// app/layout.tsx

import { Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";
import React from "react";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const sans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      className={`${playfair.variable} ${sans.variable} antialiased overflow-x-hidden`}
    >
      <body>{children}</body>
    </html>
  );
}
