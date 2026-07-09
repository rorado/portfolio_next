"use client";

import { Icon } from "@iconify/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { setMode, toggleMode, ThemeMode } from "@/app/store/themeSlice";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    if (buttonRef.current) {
      // Spin animation on theme change
      gsap.to(buttonRef.current, {
        rotation: 360,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      });
    }
  }, [mode]);

  const icon = mode === "dark" ? "solar:sun-linear" : "line-md:moon";

  const handleToggle = () => {
    dispatch(toggleMode());
  };

  return (
    <div className="flex items-center gap-2">
      <button
        ref={buttonRef}
        aria-label="Toggle theme"
        title={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
        onClick={handleToggle}
        className="p-2 rounded-lg text-text transition-colors cursor-pointer hover-glow"
      >
        <Icon icon={icon} className="text-lg" />
      </button>

      <Select
        value={mode}
        onValueChange={(value: string) => dispatch(setMode(value as ThemeMode))}
      >
        <SelectTrigger
          size="sm"
          className="bg-elevated hidden sm:flex w-[100px] h-8 text-xs px-2 py-1 rounded-md bg-(--color-surface) border border-(--color-border) text-(--color-text-muted) hover:text-(--color-text)"
        >
          <SelectValue placeholder="Theme mode" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
