// components/ClientProviderWrapper.tsx
"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/app/store";

interface Props {
  children: ReactNode;
}

export default function ClientProviderWrapper({ children }: Props) {
  return (
      <Provider store={store}>{children}</Provider>
  );
}
