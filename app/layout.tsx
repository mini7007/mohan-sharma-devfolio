import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohan Sharma — AI-Enabled Full Stack Developer",
  description:
    "Mohan Sharma is an AI-Enabled Full Stack Developer with 3+ years experience in MERN Stack, scalable web applications, and 900+ LeetCode problems solved.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Node.js",
    "TypeScript",
    "Next.js",
    "AI Developer",
    "LeetCode",
  ],
  authors: [{ name: "Mohan Sharma" }],
  openGraph: {
    title: "Mohan Sharma — AI-Enabled Full Stack Developer",
    description:
      "Performance-obsessed developer specializing in MERN Stack and scalable web systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohan Sharma — AI-Enabled Full Stack Developer",
    description:
      "Performance-obsessed developer specializing in MERN Stack and scalable web systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="bg-navy overflow-x-hidden">{children}</body>
    </html>
  );
}
