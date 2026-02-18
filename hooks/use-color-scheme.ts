import { useColorScheme as useNativeColorScheme } from "react-native";

export type AppColorScheme = "light" | "dark";

export function useColorScheme(): AppColorScheme | null {
  const scheme = useNativeColorScheme();
  return scheme === "dark" ? "dark" : scheme === "light" ? "light" : null;
}