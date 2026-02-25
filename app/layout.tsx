import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import Script from "next/script";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  title: "Mohan Sharma — Software Engineer & Full Stack Developer",
  description:
    "AI-Enabled Full Stack Developer with 3+ years experience in MERN Stack, Laravel, Angular, and scalable web applications. 900+ LeetCode problems solved.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Node.js",
    "TypeScript",
    "Next.js",
    "Laravel",
    "Angular",
    "AI Developer",
    "Software Engineer",
    "LeetCode",
  ],
  authors: [{ name: "Mohan Sharma" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Dev Mohan",
  },
  openGraph: {
    title: "Mohan Sharma — Software Engineer & Full Stack Developer",
    description:
      "Performance-obsessed developer specializing in full-stack development and scalable web systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohan Sharma — Software Engineer & Full Stack Developer",
    description:
      "Performance-obsessed developer specializing in full-stack development and scalable web systems.",
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
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Dev Mohan" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="bg-navy overflow-x-hidden">
        {children}
        <Script
          id="register-sw"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ("serviceWorker" in navigator) {
                window.addEventListener("load", function() {
                  navigator.serviceWorker.register("/sw.js").then(
                    function(registration) {
                      console.log("Service Worker registration successful");
                    },
                    function(err) {
                      console.log("Service Worker registration failed: ", err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
