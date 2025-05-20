import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Theme } from "@radix-ui/themes";

import "@fontsource-variable/plus-jakarta-sans";
import "@radix-ui/themes/styles.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yolehago",
  description:
    "Aplicacion para encontrar a los mejores profesionales locales para tus necesidades y trabajos casuales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${plusJakartaSans.variable} ${geist.variable} ${geistMono.variable} antialiased`}
        >
          <Theme accentColor="green" grayColor="sand" radius="large" scaling="95%">{children}</Theme>
        </body>
      </html>
    </ClerkProvider>
  );
}
