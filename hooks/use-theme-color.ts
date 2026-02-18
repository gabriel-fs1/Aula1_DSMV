import { Colors } from "@/constants/theme";
import { useColorScheme, AppColorScheme } from "@/hooks/use-color-scheme";

type ThemeProps = {
  light?: string;
  dark?: string;
};

export function useThemeColor(
  props: ThemeProps,
  colorName: keyof typeof Colors.light
) {
  const theme: AppColorScheme = useColorScheme() ?? "light";

  const colorFromProps = props[theme];
  if (colorFromProps) return colorFromProps;

  return Colors[theme][colorName];
}
