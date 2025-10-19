"use client";

import { Icon } from "@iconify/react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { setMode, toggleMode, ThemeMode } from "@/app/store/themeSlice";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);

  const icon = mode === "dark" ? "solar:sun-linear" : "line-md:moon";

  return (
    <div className="flex items-center gap-2">
      <button
        aria-label="Toggle theme"
        title={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
        onClick={() => dispatch(toggleMode())}
        className="p-2 rounded-lg text-text transition-colors cursor-pointer"
      >
        <Icon icon={icon} className="text-lg" />
      </button>

      <Select value={mode} onValueChange={(value: string) => dispatch(setMode(value as ThemeMode))}>
        <SelectTrigger size="sm" className="bg-elevated hidden sm:flex w-[100px] h-8 text-xs px-2 py-1 rounded-md bg-[color:var(--color-surface)] border border-[color:var(--color-border)] text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)]">
          <SelectValue placeholder="Theme mode" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup >
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
