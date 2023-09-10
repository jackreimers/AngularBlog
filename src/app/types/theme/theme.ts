import { HSL, RGB } from "./colors";

export type Theme = {
  name: string;
  colors: ThemeColors;
};

export type ThemeColors = {
  primary: HSL;
  secondary: HSL;

  tertiary: HSL;

  gradientLight: HSL;
  gradientDark: HSL;

  background: HSL;
};
