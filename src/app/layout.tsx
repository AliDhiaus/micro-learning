import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Micro Learning",
  icons: {
    icon: "/images/adsmcl.png",
    shortcut: "/images/adsmcl.png",
    apple: "/images/adsmcl.png",
  },
  keywords: [
    "Micro Learning",
    "IT Quiz",
    "Daily Quiz",
    "AliDSX",
    "IT Knowledge",
    "Quiz App",
    "Learning",
    "Education",
  ],
  creator: "AliDSX",
  manifest: "/manifest.json",
  description: "A modern micro-learning platform developed by AliDSX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
