import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeMode = "light" | "dark" | "system";

interface ThemeState {
  mode: ThemeMode;
}

const initialState: ThemeState = {
  mode:
    (typeof window !== "undefined" &&
      (localStorage.getItem("eliteshop-theme") as ThemeMode)) ||
    "system",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
      localStorage.setItem("eliteshop-theme", action.payload);

      const html = document.documentElement;
      if (action.payload === "system") {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        html.setAttribute("data-theme", prefersDark ? "dark" : "light");
      } else {
        html.setAttribute("data-theme", action.payload);
      }
      console.log(document.documentElement.getAttribute('data-theme'));
    },
    toggleMode: (state) => {
      const newMode = state.mode === "dark" ? "light" : "dark";
      state.mode = newMode;
      localStorage.setItem("eliteshop-theme", newMode);
      document.documentElement.setAttribute("data-theme", newMode);
    },
  },
});

export const { setMode, toggleMode } = themeSlice.actions;
export default themeSlice.reducer;
