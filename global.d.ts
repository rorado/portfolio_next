// global.d.ts
import messages from './messages/en.json';
import { formats } from './i18n/request';
import { routing } from './i18n/routing';

declare module 'next-intl' {
  interface AppConfig {
    // Locale type (based on your routing config)
    Locale: (typeof routing.locales)[number];

    // Messages type (based on your default locale JSON)
    Messages: typeof messages;

    // Formats type
    Formats: typeof formats;
  }
}
