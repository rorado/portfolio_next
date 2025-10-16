import type { ReactNode } from "react";
import { Inter, JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";
import "./theme.css";

import { getMessages } from "next-intl/server";
import ClientProviderWrapper from "@/components/provideres/ClientProviderWrapper";
import ThemeInitializer from "@/components/provideres/ThemeInitializer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-poppins" });

interface RootLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>; // ✅ make params async
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  // ✅ Await params before accessing
  const { locale } = await params;

  if (!locale) throw new Error("Locale param is missing");

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={`${inter.variable} ${jetbrainsMono.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-bg text-text dark:bg-bg dark:text-text">
        <ThemeInitializer /> 
        <ClientProviderWrapper locale={locale} messages={messages}>
          {children}
        </ClientProviderWrapper>
      </body>
    </html>
  );
}
