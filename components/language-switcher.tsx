"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { languages } from "@/lib/languages";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LanguageSwitcher() {
  const locale = useLocale();
  console.log(locale);
  const pathname = usePathname();

  const changeLanguage = (newLocale: string) => {
    setLocale(newLocale);
    // Change the URL to the new locale
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    window.location.href = newPath;
  };

  return (
    <Select>
      <SelectTrigger className="w-[100px] h-8 text-sm px-2" size="sm">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Object.entries(languages).map(([code, name]) => (
            <SelectItem
              key={code}
              value={code}
              onClick={() => changeLanguage(code)}
              className="cursor-pointer rounded-full"
            >
              {name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
