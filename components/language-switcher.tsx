"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { locales } from "@/i18n";

// ✅ Define your locales here or export them from i18n/config.ts

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const changeLanguage = (newLocale: string) => {
    if (newLocale === locale) return;

    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/") || "/";
    router.replace  (newPath);
  };

  return (
    <Select
      onValueChange={(value) => changeLanguage(value)}
      defaultValue={locale}
    >
      <SelectTrigger
        size="sm"
        className="hidden sm:flex w-[100px] h-8 text-xs px-2 py-1 rounded-md 
        bg-[color:var(--color-surface)] border border-[color:var(--color-border)] 
        text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)]"
      >
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Object.entries(locales).map(([code, name]) => (
            <SelectItem key={code} value={name}>
              {name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
