import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Alex Johnson - Full Stack Developer",
  description:
    "Full Stack Developer specializing in Node.js, Next.js, Prisma, and modern web technologies",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const saved = localStorage.getItem('eliteshop-theme');  
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;  
                const theme =
                  saved === 'light' || saved === 'dark'
                    ? saved
                    : (prefersDark ? 'dark' : 'light'); 
                document.documentElement.setAttribute('data-theme', theme);  
              } catch(_) {}
            })();`,
          }}
        />
        <ThemeProvider>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
