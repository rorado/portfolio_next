// i18n.ts
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales = ['en', 'ar'] as const;

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  const messages = (await import(`./messages/${locale}.json`)).default;

  return {
    locale, 
    messages,
  };
});
