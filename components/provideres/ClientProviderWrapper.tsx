// components/ClientProviderWrapper.tsx
"use client";

import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { Provider } from "react-redux";
import { store } from "@/app/store";

interface Props {
  children: ReactNode;
  locale: string;
  messages: Record<string, Record<string, string>>;
}

export default function ClientProviderWrapper({ children, locale, messages }: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Provider store={store}>{children}</Provider>
    </NextIntlClientProvider>
  );
}
